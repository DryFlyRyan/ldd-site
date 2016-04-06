var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport('smtps://ryan@luckydogdigital.com:pass@smtp.gmail.com');

router.get('/', function(req,res){
  res.send("please enter a search query")
})

router.post('/', function(req,res){
  console.log(req.body);
  var mailOptions = {
    from: '"Website Contact" <foo@blurdybloop.com>', // sender address
    to: 'ryan@luckydogdigital.com', // list of receivers
    subject: 'Contact Form from LDD', // Subject line
    text: 'Name:' + req.body.name +',' +
          'Email:' + req.body.email+',' + 'Message' + req.body.message,
    html: '<b>'+ 'Name:' + req.body.name +',' +
          'Email:' + req.body.email+',' + 'Message' + req.body.message +'</b>'
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

  res.status(200).send('Post Request Success');
})


module.exports = router;
