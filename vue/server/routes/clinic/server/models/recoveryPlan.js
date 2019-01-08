let mongoose = require('mongoose');
let schema = mongoose.Schema;

// ## Schemas

let DaySchema = schema({
  exercises: [schema.Types.ObjectId]
});

let WeekSchema = schema({
  days: [DaySchema],
});

let RecoveryPlanSchema = schema({
    _patientID: {type: schema.Types.ObjectId},
    _doctorID: {type: schema.Types.ObjectId},
    title: {type: String},
    start_date: {type: Date},
    weeks: {type: Number},
    status: {type: String},
    plan: [WeekSchema]},
  {timestamps: true});

// ## Methods
// ###########################################


// ###########################################
// ## Export model

let RecoveryPlan = mongoose.model('RecoveryPlan', RecoveryPlanSchema);
let Week = mongoose.model('Week', WeekSchema);
let Day = mongoose.model('Day', DaySchema);

module.exports = {
  Week: Week,
  Day: Day,
  RecoveryPlan: RecoveryPlan
};