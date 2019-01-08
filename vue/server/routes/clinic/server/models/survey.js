let mongoose = require('mongoose');
let schema = mongoose.Schema;

// ## Answer Schemas #####################################################

let AnswerCheckSchema = schema({
  type: {type: String, required: true},
  select: [String],
});

let AnswerRadioSchema = schema({
  type: {type: String, required: true},
  choiceSelected: {type: String},
});

let AnswerTextSchema = schema({
  type: {type: String, required: true},
  text: {type: String},
});

// ## Question Schemas #####################################################

let QuestionCheckSchema = schema({
  title: {type: String, required: true},
  type: {type: String, required: true},
  has_points: {type: Boolean},
  choices: [String],
});

let QuestionRadioSchema = schema({
  title: {type: String, required: true},
  type: {type: String, required: true},
  choices: [String],
});

let QuestionTextSchema = schema({
  title: {type: String, required: true},
  type: {type: String, required: true},
});

// ## Schema #####################################################
let AnswerSchema = schema({
  answers: [schema.Types.Mixed],
  status: {type: String},
});

// ## Survey Schema
let SurveyTemplateSchema = schema({
    _doctorID: {type: schema.Types.ObjectId, required: true},
    questions: [schema.Types.Mixed],
    isFilled: { type: Boolean },
    status: {type: String},
    title: { type: String },
  },
  {timestamps: true});


// ## Survey Schema
let SurveySchema = schema({
    _surveyTemplateID: {type: schema.Types.ObjectId, required: true},
    _patientID: {type: schema.Types.ObjectId, required: true},
    answer: [schema.Types.Mixed],
    isFilled: {type: Boolean},
    status: {type: String},
    title: { type: String },
  },
  {timestamps: true});

// ## Methods
// ############################################



// ############################################
// ## Export model

let SurveyTemplate = mongoose.model('SurveyTemplate', SurveyTemplateSchema);
let Survey = mongoose.model('Survey', SurveySchema);
let QuestionCheck = mongoose.model('QuestionCheck', QuestionCheckSchema);
let QuestionRadio = mongoose.model('QuestionRadio', QuestionRadioSchema);
let QuestionText = mongoose.model('QuestionText', QuestionTextSchema);
let AnswerText = mongoose.model('AnswerText', AnswerTextSchema);
let AnswerCheck = mongoose.model('AnswerCheck', AnswerCheckSchema);
let AnswerRadio = mongoose.model('AnswerRadio', AnswerRadioSchema);
let Answer = mongoose.model('Answer', AnswerSchema);

module.exports = {
  Survey: Survey,
  SurveyTemplate: SurveyTemplate,
  QuestionCheck: QuestionCheck,
  QuestionRadio: QuestionRadio,
  QuestionText: QuestionText,
  AnswerCheck: AnswerCheck,
  AnswerRadio: AnswerRadio,
  AnswerText: AnswerText,
  Answer: Answer
};