let express = require('express');
let bcrypt = require('bcrypt');
let router = express.Router();
let Doctor = require('../../models/doctor');
let Patient = require('../../models/patient');
let models = require('../../models/survey');
let Exercise = require('../../models/exercise');
let recoveryplanModels = require('../../models/recoveryPlan');
let SurveyTemplate = models.SurveyTemplate;
let Survey = models.Survey;
let QuestionRadio = models.QuestionRadio;
let QuestionCheck = models.QuestionCheck;
let QuestionText = models.QuestionText;
let Week = recoveryplanModels.Week;
let Day = recoveryplanModels.Day;
let RecoveryPlan = recoveryplanModels.RecoveryPlan;

router.route('/')
.post(function(req, res) {
  let doctor = new Doctor();// create a new Doctor
  for (prop in req.body) {
    doctor[prop] = req.body[prop];
  }
  doctor.username = req.body.username;
  doctor.password = req.body.password;
  doctor.status = 'ACTIVE';
  doctor._created_by_adminID = req.body.id;

  Doctor.find({username: req.body.username},function(err, doctors) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find of doctors!'});
    }
    if (doctors.length > 0) {
      return res.json({status: 'ERROR', message: 'Username already exist!'});
    }

    bcrypt.hash(doctor.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      doctor.password = hash;
      doctor.save(function (err) {
        if (err) {
          return res.json({ status: 'ERROR', message: 'Error in creation of doctor!' });
        }
        else return res.json({ status: 'SUCCESS', message: 'Doctor created!' });
      });
    });
  });
})
.get(function(req, res) {// get all doctors
  Doctor.find({}, function(err, doctors) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find of doctors!'});
    }
    return res.json({status: 'SUCCESS', message: 'List all doctors!', object: doctors});
  });
});

router.route('/:id')
.delete(function (req, res) {// delete specific doctor
  Doctor.remove({ _id: req.params.id }, function (err) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in removing doctor!' });
    }
    else {
      res.json({ status: 'SUCCESS', message: 'Doctor deleted!' });
    }
  });
})
.get(function(req, res) {// get specific doctor
  Doctor.findOne({_id: req.params.id}, function(err, doctor) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in get specific doctor!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found specific admin!', object: doctor});
  });
})
.put(function (req, res) {// update specific doctor
  Doctor.findOne({ _id: req.params.id }, function (err, doctor) { // get doctor
    Doctor.findOne({ username: req.body.username, _id: { $ne: req.params.id } }, function (err, doctorduplicated) { // see if doctor duplicated
      if (doctorduplicated == null) {
        for (prop in req.body) {
          doctor[prop] = req.body[prop]
        }

        if (req.body.password) {
          let plainPassword = req.body.password;

          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
              return next(err)
            }
            doctor.password = hash

            // save the doctor
            doctor.save(function (err) {
              if (req.body.password) {
                doctor.password = plainPassword;
              }
              return res.json({
                status: 'SUCCESS',
                message: 'Updated specific doctor!',
                object: doctor,
              });
            });
          });
        } else {
          // save the doctor
          doctor.save(function (err) {
            return res.json({
              status: 'SUCCESS',
              message: 'Updated specific doctor!',
              object: doctor,
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

//////////////////////// PATIENTS ///////////////////////////

router.route('/:id/patients') // get my patients
.get(function (req, res) {
  Patient.find({ _created_by_doctorID: req.params.id }, function (err, patients) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in finding patients!' });
    }
    return res.json({ status: 'SUCCESS', message: 'List of my patients!', object: patients });
  });
});

//////////////////////// SURVEYS ///////////////////////////

router.route('/all_surveys')
.get(function(req, res) { // get all surveys
  Survey.find({}, function(err, surveys) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding survey!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found surveys!', object: surveys});
  });
});

router.route('/:doctorID/assign-survey/:patientID')
.post(function (req, res) {

  SurveyTemplate.findOne({_id: req.body.surveyTemplateID}, function (err, surveysTemplate) {
    let survey = new Survey();
    survey.title = surveysTemplate.title;
    survey._patientID = req.params.patientID;
    survey.isFilled = false;
    survey._surveyTemplateID = req.body.surveyTemplateID;
    survey.save(function (err) {
      if (err) {
        return res.json({ status: 'ERROR', message: 'Error in assignment!' });
      }
      return res.json({ status: 'SUCCESS', message: 'Assigned survey!', object: survey });
    });
  });
});

router.route('/answersurvey/:surveyID')
.get(function (req, res) {
  Survey.findOne({ _id: req.params.surveyID }, function (err, survey) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in finding survey!' });
    }

    SurveyTemplate.findOne({ _id: survey._surveyTemplateID }, function (err, surveyTemplate) {
      return res.json({ status: 'SUCCESS', message: 'Found survey!', survey: survey, surveyTemplate: surveyTemplate });
    })
  })
});

router.route('/all_survey_templates')
.get(function(req, res) { // get all surveys
  SurveyTemplate.find({}, function(err, surveysTemplates) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding survey template!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found survey templates!', object: surveysTemplates});
  });
});

router.route('/:doctorID/surveys')
.get(function (req, res) { // get surveys from specific doctor
  SurveyTemplate.find({_doctorID: req.params.doctorID}, function (err, surveys) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error finding surveys of doctor!' });
    }
    return res.json({ status: 'SUCCESS', message: 'List all surveys of doctor!', object: surveys });
  });
})
.post(function(req, res) {

  let surveyTemplate = new SurveyTemplate();
  surveyTemplate.isFilled = false;

  let questions = [];
  let reqQuestions = req.body.questions;
  for (index in reqQuestions) {
    let question = reqQuestions[index];
    if(question['type'] === 'multiple') {
      let questionCheck = new QuestionCheck();
      questionCheck.title = question.title;
      questionCheck.type = 'multiple';
      questionCheck.choices = question.choices;
      questionCheck.has_points = question.has_points;
      // questionCheck.save();
      questions.push(questionCheck);
    }
    else if(question['type'] === 'single') {
      let questionRadio = new QuestionRadio();
      questionRadio.title = question.title;
      questionRadio.type = 'single';
      questionRadio.choices = question.choices;
      // questionRadio.save();
      questions.push(questionRadio);
    }
    else if(question['type'] === 'short') {
      let questionText = new QuestionText();
      questionText.title = question.title;
      questionText.type = 'short';
      // questionText.save();
      questions.push(questionText);
    }
  }
  surveyTemplate._doctorID = req.params.doctorID;
  surveyTemplate.title = req.body.title;
  surveyTemplate.status = 'ACTIVE';
  surveyTemplate.questions = questions;

  // save
  surveyTemplate.save(function(err) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in saving new survey!'});
    }
    return res.json({status: 'SUCCESS', message: 'Created survey!', object: surveyTemplate});
  });
});

router.route('/:doctorID/surveys/:surveyTemplateID')
.get(function(req, res) {
  SurveyTemplate.findOne({ _id: req.params.surveyTemplateID, _doctorID: req.params.doctorID }, function(err, surveyTemplate) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in finding survey template!' });
    }
    return res.json({ status: 'SUCCESS', message: 'Found survey!', object: surveyTemplate});
  })
})
.put(function (req, res) {
  SurveyTemplate.findOne({ _id: req.params.surveyTemplateID, _doctorID: req.params.doctorID }, function (err, surveyTemplate) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in finding survey template!' });
    }
    for (prop in req.body) {
      surveyTemplate[prop] = req.body[prop];
    }

    if (req.body.questions) {
      let questions = [];
      let reqQuestions = req.body.questions;
      for (index in reqQuestions) {
        let question = reqQuestions[index];
        if (question['type'] === 'multiple') {
          let questionCheck = new QuestionCheck();
          questionCheck.title = question.title;
          questionCheck.type = 'multiple';
          questionCheck.choices = question.choices;
          questionCheck.has_points = question.has_points;
          // questionCheck.save();
          questions.push(questionCheck);
        }
        else if (question['type'] === 'single') {
          let questionRadio = new QuestionRadio();
          questionRadio.title = question.title;
          questionRadio.type = 'single';
          questionRadio.choices = question.choices;
          // questionRadio.save();
          questions.push(questionRadio);
        }
        else if (question['type'] === 'short') {
          let questionText = new QuestionText();
          questionText.title = question.title;
          questionText.type = 'short';
          // questionText.save();
          questions.push(questionText);
        }
      }
      surveyTemplate.questions = questions;
    }

    // save
    surveyTemplate.save(function (err) {
      if (err) {
        return res.json({ status: 'ERROR', message: 'Error in saving updated survey template!' });
      }
      return res.json({ status: 'SUCCESS', message: 'Updated survey template!', object: surveyTemplate });
    });
  });
})
.delete(function(req, res) {// delete
  SurveyTemplate.findOne({_id: req.params.surveyID, _doctorID: req.params.doctorID, status: 'ACTIVE'}, function(err, surveyTemplate) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in deleting survey template!'});
    }
    if(surveyTemplate !== null) {
      surveyTemplate.status = 'INACTIVE';
      surveyTemplate.save();
      return res.json({
        status: 'SUCCESS',
        message: 'Deleted survey!',
        object: surveyTemplate
      });
    }
    else return res.json({
      status: 'ERROR',
      message: 'No active survey with that id!',
      object: surveyTemplate
    });
  });
});

//////////////////////// RECOVERY PLANS ///////////////////////////

router.route('/all_recovery_plans')
.get(function(req, res) {
  RecoveryPlan.find({}, function(err, recovery_plans) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in finding recovery plans!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found recovery plans!', object: recovery_plans});
  });
});

router.route('/:doctorID/recovery-plans')
.get(function (req, res) {
  RecoveryPlan.find({ _doctorID: req.params.doctorID }, function (err, recoveryPlans) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in finding recovery plans of specific doctor!' });
    }
    return res.json({ status: 'SUCCESS', message: 'Found recovery plans template!', object: recoveryPlans });
  });
})
.post(function (req, res) {
  let recoveryPlan = new RecoveryPlan();
  recoveryPlan.status = 'ACTIVE';
  recoveryPlan._doctorID = req.params.doctorID;
  recoveryPlan._patientID = req.body.patientID;
  recoveryPlan.start_date = req.body.start_date;
  recoveryPlan.weeks = req.body.weeks;
  recoveryPlan.title = req.body.title;

  let plan = req.body.plan;
  for (let i = 0; i < plan.length; i++) {
    let week = new Week();

    for (let j = 0; j < plan[i].days.length; j++) {
      let day = new Day();
      day.exercises = plan[i].days[j].exercises;
      week.days.push(day);
    }

    recoveryPlan.plan.push(week);
  }
  recoveryPlan.save(function (err) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error creating Recovery Plan!' });
    }
    return res.json({ status: 'SUCCESS', message: 'Recovery Plan created!', object: recoveryPlan });
  });
});

router.route('/recovery-plans/:recoveryPlanID')
.get(function (req, res) {
  RecoveryPlan.findOne({ _id: req.params.recoveryPlanID }, function (err, recoveryPlan) {
    if (err) {
      return res.json(
        { status: 'ERROR', message: 'Error in getting recovery plan!' });
    }
    return res.json({
      status: 'SUCCESS',
      message: 'Found recovery plan!',
      object: recoveryPlan
    });
  });
})
.put(function (req, res) {
  RecoveryPlan.findOne({ _id: req.params.recoveryPlanID }, function (err, recoveryPlan) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in editing recovery plan!' });
    }
    for (prop in req.body) {
      recoveryPlan[prop] = req.body[prop];
    }

    if (req.body.plan != null) {
      recoveryPlan.plan = [];
      let plan = req.body.plan;

      for (let i = 0; i < plan.length; i++) {
        let week = new Week();

        for (let j = 0; j < plan[i].days.length; j++) {
          let day = new Day();
          day.exercises = plan[i].days[j].exercises;
          week.days.push(day);
        }

        recoveryPlan.plan.push(week);
      }
    }

    // save
    recoveryPlan.save(function (err) {
      if (err) {
        return res.json({ status: 'ERROR', message: 'Error in saving the edited recovery plan!' });
      }
      return res.json({ status: 'SUCCESS', message: 'Updated recovery plan!', object: recoveryPlan });
    });
  });
})
.delete(function(req, res) {
  RecoveryPlan.remove({_id: req.params.recoveryPlanID}, function(err, recoveryPlan) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in deleting recovery plan!'});
    }
    return res.json({status: 'SUCCESS', message: 'Deleted recovery plan!', object: recoveryPlan});
  });
});

// #################   Exercises   ######################

router.route('/:id/exercises')
.get(function(req, res) {
  Exercise.find({}, function(err, exercises) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find exercises!'});
    }
    return res.json({status: 'SUCCESS', message: 'List all exercises!', object: exercises});
  });
});

router.route('/exercises/:exerciseID')
.get(function(req, res) {
  Exercise.findOne({status: 'ACTIVE', _id: req.params.exerciseID}, function(err, exercise) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find exercise!'});
    }
    return res.json({status: 'SUCCESS', message: 'Show specific exercise!', object: exercise});
  });
});

module.exports = router;


