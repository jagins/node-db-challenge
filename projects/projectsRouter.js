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

router.get('/resources', (req, res) =>
{
    Projects.getResources()
    .then(resources =>
    {
        res.status(200).json(resources);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'unable to get resources'});
    })
})

router.get('/:id/tasks', (req, res) =>
{
    Projects.getProjectTasks(req.params.id)
    .then(tasks =>
    {
        tasks.forEach(task =>
        {
            if(task.completed === 0)
            {
                task.completed = false;
            }
            else
            {
                task.completed = true;
            }
        })

        res.status(200).json(tasks);
    })
    .catch(error =>
    {
        res.status(500).json({error: 'unable to get project tasks'});
    })
})

router.post('/resources')

module.exports = router;