var later =require('later');

var text = 'every 5 mins';
  var s = later.parse.text(text);

  later.schedule(s).prev(10);
