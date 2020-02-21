
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'task to complete Sprint Challenge'
        },
        {
          project_id: 2,
          description: 'Your task is to finish your portfolio'
        },
        {
          project_id: 3,
          description: 'Creating the PowerPuff Girls'
        },
        {
          project_id: 1,
          description: 'Push to Github'
        },
      ]);
    });
};
