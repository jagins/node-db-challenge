
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {
          pid: 1,
          rid: 1
        },
        {
          pid: 1,
          rid: 2
        },
        {
          pid: 2,
          rid: 1
        },
        {
          pid: 2,
          rid: 2
        },
        {
          pid: 3,
          rid: 3
        },
      ]);
    });
};
