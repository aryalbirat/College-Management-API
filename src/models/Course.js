const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: [true, 'Course code is required'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Course name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  credits: {
    type: Number,
    required: [true, 'Credits are required'],
    min: 1
  },
  category: {
    type: String,
    required: [true, 'Course category is required'],
    trim: true
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', CourseSchema);
