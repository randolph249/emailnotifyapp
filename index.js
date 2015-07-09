var Crontab = require('yi-task').Crontab;

var Task = require('./task.js');
var wakeUp = Task.wakeUp;

console.log(Task.wakeUp);

var crontab = new Crontab();

/**
 *minute, hour, date, month, day
 **/

var i = 0;

(function() {
  console.log('i is:' + i);
  debugger;
})()
crontab.set('*/1', '*', '*', '*', '1,2,3,4,5', function() {

  console.log('task in progress');
  var nowDate = new Date(),
    year = nowDate.getFullYear(),
    month = nowDate.getMonth() + 1,
    date = nowDate.getDate(),
    day = nowDate.getDay();

  wakeUp(year, month, date, day);


  // update_user_info();
});
crontab.run();
