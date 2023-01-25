const Project = require('../models/Project');

const getProjects = (req, res) => {
  const query = req.query;
  Project.find(query).then((projects) => {
    res.json({
      confirmation: 'success',
      data: projects,
    });
  }).catch;
};

const getProjectById = (req, res) => {
  const id = req.params.id;
  Project.find({ _id: id }).then((project) => {
    res.json({
      confirmation: 'success',
      data: project,
    });
  }).catch;
};

const createProject = (req, res) => {
  const project = new Project({
    projectName: req.body.projectName,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });

  project.save((err, project) => {
    if (err) {
      res.send(err);
    }
    res.json(project);
  });
};

const updateProject = (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        projectName: req.body.projectName,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
      },
    },
    { new: true },
    (err, Project) => {
      if (err) {
        res.sed(err);
      } else res.json(Project);
    }
  );
};

const deleteProject = (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: 'Project Deleted!' }))
    .catch((err) => res.send(err));
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
