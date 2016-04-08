var knex = require('./db/knex');
var pg = require('pg');

/* Table References */

var users = function() {
  return knex('users');
};

var messages = function() {
  return knex('messages');
}

function createUser(userEmail, userName) {
  return users().select().where({
    email: userEmail
  })
  .then(function(user) {
    if (user.length < 1) {
      users().insert({
        email: userEmail,
        name: userName
      }, 'id')
      .then(function(user) {
        return user[0].id;
      })
    } else {
      return user[0].id;
    }
  })
}

function createMessage(userID, message) {
  return messages().insert({
    user_id: userID,
    message: message
  }, 'id')
}

function logMessage(userEmail, userName, message) {
  return createUser(userEmail, userName)
  .then(function(userID){
    console.log(userID);
    return createMessage(userID, message)
  }).then(function(messageID){
    return messageID
  })
}

module.exports = {
  logMessage: logMessage
}
