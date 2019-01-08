let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let Patient = require('../../models/patient');
let models = require('../../models/survey');
let recoveryplanModels = require('../../models/recoveryPlan');
let Survey = models.Survey;
let SurveyTemplate = models.SurveyTemplate;
let QuestionRadio = models.QuestionRadio;
let QuestionCheck = models.QuestionCheck;
let QuestionText = models.QuestionText;
let AnswerCheck = models.AnswerCheck;
let AnswerRadio = models.AnswerRadio;
let AnswerText = models.AnswerText;
let Answer = models.Answer;
let Week = recoveryplanModels.Week;
let Day = recoveryplanModels.Day;
let RecoveryPlan = recoveryplanModels.RecoveryPlan;

router.route('/')
.post(function(req, res) {
  let patient = new Patient();// create a new Patient
  for (prop in req.body) {
    patient[prop] = req.body[prop];
  }
  patient.doctor_notes = '';
  patient._created_by_doctorID = req.body.id;
  patient.status = 'ACTIVE';

  Patient.find({username: req.body.username},function(err, patients) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find of patients!'});
    }
    if (patients.length > 0) {
      return res.json({status: 'ERROR', message: 'Username already exist!'});
    }

    bcrypt.hash(patient.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      patient.password = hash;
      patient.save(function (err) {
        if (err) {
          return res.json({ status: 'ERROR', message: 'Error in saving new patient!' });
        }
        return res.json({ status: 'SUCCESS', message: 'Patient created!', object: patient });
      });
    });
  });
})
.get(function(req, res) {// get all patients
  Patient.find({}, function(err, patients) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding all patients!'});
    }
    return res.json({status: 'SUCCESS', message: 'List all patients!', object: patients});
  });
});

router.route('/:patientID')
.delete(function (req, res) {// delete specific patient
  Patient.remove({ _id: req.params.patientID }, function (err) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in removing patient!' });
    }
    else {
      res.json({ status: 'SUCCESS', message: 'Patient deleted!' });
    }
  });
})
.get(function(req, res) {// get specific patient
  Patient.findOne({_id: req.params.patientID}, function(err, patient) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding specific patient!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found specific patient!', object: patient});
  });
})
.put(function (req, res) {// update specific patient
  Patient.findOne({ _id: req.params.patientID }, function (err, patient) { // get doctor
    Patient.findOne({ username: req.body.username, _id: { $ne: req.params.patientID } }, function (err, patientduplicated) { // see if doctor duplicated
      if (patientduplicated == null) {
        for (prop in req.body) {
          patient[prop] = req.body[prop]
        }

        if (req.body.password) {
          let plainPassword = req.body.password;

          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
              return next(err)
            }
            patient.password = hash

            // save the patient
            patient.save(function (err) {
              if (req.body.password) {
                patient.password = plainPassword;
              }
              return res.json({
                status: 'SUCCESS',
                message: 'Updated specific patient!',
                object: patient,
              });
            });
          });
        } else {
          // save the patient
          patient.save(function (err) {
            return res.json({
              status: 'SUCCESS',
              message: 'Updated specific patient!',
              object: patient,
            });
          });
        }
      } else {
        return res.json({
          status: 'ERROR',
          message: 'Username already exists!'
        });
      }
    });
  });
});

// ################################# RECOVERY PLANS ######################################

router.route('/:patientID/recovery-plans')
.get(function(req, res) {
  RecoveryPlan.find({_patientID: req.params.patientID},
    function(err, recoveryPlans) {
      if (err) {
        return res.json({status: 'ERROR', message: 'Error in finding recovery plan of specific patient!'});
      }
      return res.json({status: 'SUCCESS', message: 'Found recovery plans of specific patient!', object: recoveryPlans});
    });
});

// ################################# SURVEYS ######################################

router.route('/:patientID/surveys')
.get(function(req, res) {// get all surveys from a patient
  Survey.find({_patientID: req.params.patientID}, function(err, surveys) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find all surveys of specific patient!'});
    }
    return res.json({status: 'SUCCESS', message: 'List all surveys of specific patient!', object: surveys});
  });
});

router.route('/:patientID/surveys/:surveyID')
.get(function(req, res) {// get specific survey
  Survey.find({_id: req.params.surveyID}, function(err, survey) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding that specific survey!'});
    }
    return res.json({status: 'SUCCESS', message: 'List one survey of specific patient!', object: survey});
  });
})
.post(function(req, res) {// answer survey
  Survey.findOne({_id: req.params.surveyID},function(err, survey) {
    SurveyTemplate.findOne({_id: survey._surveyTemplateID},function(err, surveyTemplate) {
      let questions = surveyTemplate.questions;

      let answers = [];
      for (index in questions) {
        let question = questions[index];

        if(question['type'] === 'multiple') {
          let answerCheck = new AnswerCheck();
          answerCheck.type = 'multiple';
          answerCheck.select = req.body.answers[index];
          answers.push(answerCheck);
        }
        else if(question['type'] === 'single') {
          let answerRadio = new AnswerRadio();
          answerRadio.type = 'single';
          answerRadio.choiceSelected = req.body.answers[index];
          answers.push(answerRadio);
        }
        else if(question['type'] === 'short') {
          let answerText = new AnswerText();
          answerText.type = 'short';
          answerText.text = req.body.answers[index];
          answers.push(answerText);
        }
      }
      
      survey.isFilled = true;
      survey.answer = answers;
      survey.save(function(err) {
        if (err) {
          return res.json({ status: 'ERROR', message: 'Failure in saving survey!' });
        }
        surveyTemplate.isFilled = true;
        surveyTemplate.save(function(err) {
          if (err) {
            return res.json({ status: 'ERROR', message: 'Failure in saving survey template!' });
          }
          return res.json({ status: 'SUCCESS', message: 'Saved successfully!', object: survey });
        });
      });
    });
  });
})
.delete(function(req, res) {
  Survey.remove({ _id: req.params.surveyID }, function (err) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in removing survey!' });
    }
    return res.json({ status: 'SUCCESS', message: 'Survey deleted!' });
  });
});

module.exports = router;