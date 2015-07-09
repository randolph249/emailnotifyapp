//定时任务
(function(){
    //年、月、日、星期
    var wakeUp=function(year,month,date,day){
      var args=Array.prototype.slice.call(arguments);
      var week=args.splice(3,1)[0];
      var weeks=['日','一','二','三','四','五','六'];
      console.log('今天是'+args.join('/')+',星期'+weeks[week]);
    }
    module.exports.wakeUp=wakeUp;
}).call(this)
