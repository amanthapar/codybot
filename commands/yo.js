'use strict';

module.exports = yo;

function yo(slack, args, message) {
  // var channel = slack.getChannelGroupOrDMByID(message.channel);
  message.channel.send('Yo!');
}