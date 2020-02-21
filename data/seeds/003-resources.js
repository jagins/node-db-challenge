
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Computer'
        },
        {
          name: 'Internet'
        },
        {
          name: 'Mixing Bowl',
          description: 'Standard mixing bowl'
        },
      ]);
    });
};
