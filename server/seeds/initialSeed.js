
exports.seed = function(knex, Promise) {
  return knex('users').del().then(function(){
    return Promise.all([
      knex('users').insert({
        name: "Ryan Douglas",
        email: "Ryan@LuckyDogDigital.com"
      }),
      knex('users').insert({
        name: "Valerie Gleaton",
        email: "ValerieGleaton@hotmail.com"
      })
    ])
  }).then(function(){
    return knex('messages').del().then(function(){
      return Promise.all([
        knex('messages').insert({
          user_id: 1,
          message: "It's me!"
        }),
        knex('messages').insert({
          user_id: 2,
          message: "It's Val!"
        })
      ])
    })
  })
};
