const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) =>
{
    Projects.getProjects()
    .then(projects =>
    {
        projects.forEach(project =>
        {
            if(project.completed === 0)
            {
                project.completed = false;
            }
            else
            {
                project.completed = true;
            }
        })
        res.status(200).json(projects);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'unable to get projects'});
    })
})

module.exports = router;