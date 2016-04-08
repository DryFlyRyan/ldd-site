
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments().primary().unsigned();
    table.string('name');
    table.string('email');
  }).then(function(){
    return knex.schema.createTable('messages', function(table){
      table.increments().primary().unsigned();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.string('message');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
  .then(function(){
    return knex.schema.dropTable('users')
  })
};
