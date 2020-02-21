const database = require('../data/db-config');

function getProjects()
{
    return database('projects')
}

module.exports = {
    getProjects
}