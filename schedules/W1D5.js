// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D5', 12, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: date('W1D5', 12, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: date('W1D5', 16, 40),
  who: c.juniors,
  message: '<!channel> Junior/Senior Code Review in 5 minutes'
});

events.push({
  when: date('W1D5', 16, 44),
  who: c.juniors,
  message: '<!channel> Junior/Senior Code Review in 1 minute'
});

module.exports = events;
