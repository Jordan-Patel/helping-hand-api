import mongoose from 'mongoose';

const Project = new mongoose.Schema({
  projectName: { type: String, trim: true, default: '' },
  projectOwner: { type: String, trim: true, default: '' },
  description: { type: String, trim: true, default: '' },
  imageUrl: { type: String, trim: true, default: '' },
});

module.exports = mongoose.model('Project', Project);
