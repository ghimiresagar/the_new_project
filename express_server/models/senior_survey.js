let mongoose = require('mongoose');
let Schema = mongoose.Schema;

SeniorSurveySchema = new Schema(
    {
        title: {type: String, required: true, unique: true},                    // title has to be unique
        input_type: {type: String},                                             // rate, input small, longer comment, information
        question_type: {type: Number},                                          // stores the order of question
        type: {type: String, required: true, default: "question"},              // type of question or url or detail
        result:
            {
                year: {type: Number},                               // used with detail only
                name: {type: String},                               // used with detail, senior, alumni, iba
                numberOfParts: {type: Number, default: 0},          // used with detail
                rate: {
                    1: {type: Number, default: 0},
                    2: {type: Number, default: 0},
                    3: {type: Number, default: 0},
                    4: {type: Number, default: 0},
                    5: {type: Number, default: 0}
                },                                                  // used with question results
                comment: {type: Array}                              // used with question results
            }
    }
);

module.exports = mongoose.model('SeniorSurvey', SeniorSurveySchema);