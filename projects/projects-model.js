const database = require('../data/db-config');

function getProjects()
{
    return database('projects')
}

function getResources()
{
    return database('resources');
}

module.exports = {
    getProjects,
    getResources
}