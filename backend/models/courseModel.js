const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name of course please.']
    },
    units: [
      {
        id: {
          type: Number,
          required: [true, 'Match index']
        },
        name: {
          type: String,
          required: [true, 'What unit number? ID plus 1']
        },
        explanations: [
          {
            id: {
              type: Number,
              required: [true, 'Match Index']
            },
            title: {
              type: String,
              required: [true, 'Gist of it']
            },
            body: {
              type: String,
              required: [true, 'Explaon what this is and why it\'s important']
            }
          }
        ],
        links: [
          {
            type: {
              type: String,
              required: [true, 'To video or document?']
            },
            id: {
              type: String,
              required: [true, 'Match index']
            },
            url: {
              type: String,
              required: [true, 'Where is it?']
            }
          }
        ]
      }
    ]
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Course', CourseSchema)