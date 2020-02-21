
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table =>
    {
        table.increments();
        table.string('name')
            .unique()
            .notNullable();
        table.string('description');
        table.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('tasks', table =>
    {
        table.increments();
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('description')
            .unique()
            .notNullable();
        table.string('notes');
        table.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', table =>
    {
        table.increments();
        table.string('name')
            .notNullable()
            .unique();
        table.string('description');
    })
    .createTable('project_resources', table =>
    {
        table.increments();
        table.integer('pid')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('rid')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists('project_resources')
    .dropIfTableExists('resources')
    .dropIfTableExists('tasks')
    .dropIfTableExists('projects');
};
