const database = require('../data/db-config');

function getProjects()
{
    return database('projects');
}

function getResources()
{
    return database('resources');
}

function getProjectTasks(projectID)
{
    /*
        select  projects.name,
                projects.description,
                t.description,
                t.notes,
                t.completed 
        from tasks t 
        join projects ON t.project_id = projects.id 
        where t.project_id = 1
    */

    return database.select('projects.name',
            'projects.description',
            'tasks.description',
            'tasks.notes',
            'tasks.completed')
            .from('tasks')
            .join('projects', 'tasks.project_id', 'projects.id')
            .where('tasks.project_id', projectID);
}

function addResource(resource)
{
    return database('resources').insert(resource, 'id');
}

function addProject(project)
{
    return database('projects').insert(project, 'id');
}

function addTask(task)
{
    return database('tasks').insert(task, 'id');
}

function getTasks()
{
    return database('tasks');
}

module.exports = {
    getProjects,
    getResources,
    getProjectTasks,
    addResource,
    addProject,
    addTask,
    getTasks
}