
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Sprint',
          description: 'The Finish Sprint desc',
          completed: false
        },
        {
          name: 'Portfolio',
          description: 'Create Portfolio desc',
          completed: false
        },
        {
          name: 'PowerPuff Girls',
          description: 'This will create the PowerPuff Girls',
          completed: false
        },
      ]);
    });
};
