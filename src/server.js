import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Connection from './connection';
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
  updateProject,
} from './api/projects.route';

export const createServer = () => {
  const app = express();

  Connection();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: false }))
    .use(json())
    .use(cors());

  //  Routes
  app
    .get('/projects', getProjects)

    .get('/projects/:id', getProjectById)

    .post('/projects', createProject)

    .put('/projects/:id', updateProject)

    .delete('/projects/:id', deleteProject);

  return app;
};
