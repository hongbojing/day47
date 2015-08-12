angular
  .module('myApp')
  .controller('fruitController',fruitController);

function fruitController(){
  var vm=this;
  vm.dayValue="Monday";
  vm.dataSource={
    'apple':[
      {'period':'01','time':'7:25 a.m. - 8:15 a.m.'},
      {'period':'02','time':'8:30 a.m. - 9:20 a.m.'},
      {'period':'03','time':'9:35 a.m. - 10:25 a.m.'},
      {'period':'04','time':'10:40 a.m. - 11:30 a.m.'},
      {'period':'05','time':'11:45 a.m. - 12:35 p.m.'},
      {'period':'06','time':'12:50 p.m. - 1:40 p.m.'},
      {'period':'07','time':'1:55 p.m. - 2:45 p.m.'},
      {'period':'08','time':'3:00 p.m. - 3:50 p.m.'},
      {'period':'09','time':'4:05 p.m. - 4:55 p.m.'},
      {'period':'10','time':'5:10 p.m. - 6:00 p.m.'},
      {'period':'11','time':'6:15 p.m. - 7:05 p.m.'},
      {'period':'E1','time':'7:20 p.m. - 8:10 p.m.'},
      {'period':'E2','time':'8:20 p.m. - 9:10 p.m.'},
      {'period':'E3','time':'9:20 p.m. - 10:10 p.m.'}
    ],
    'banana':[
      {'period':'01','time':'8:00 a.m. - 9:15 a.m.'},
      {'period':'02','time':'9:30 a.m. - 10:45 a.m.'},
      {'period':'03','time':'11:00 a.m. - 12:15 p.m.'},
      {'period':'04','time':'12:30 p.m. - 1:45 p.m.'},
      {'period':'05','time':'2:00 p.m. - 3:15 p.m.'},
      {'period':'06','time':'3:30 p.m. - 4:45 p.m.'},
      {'period':'07','time':'5:00 p.m. - 6:15 p.m.'},
      {'period':'E1','time':'7:00 p.m. - 8:15 p.m.'},
      {'period':'E2','time':'8:30 p.m. - 9:45 p.m.'}
    ],
    'pear':[
      {'period':'01','time':'7:25 a.m. - 8:15 a.m.'},
      {'period':'02','time':'8:30 a.m. - 9:20 a.m.'},
      {'period':'03','time':'9:35 a.m. - 10:25 a.m.'},
      {'period':'04','time':'10:40 a.m. - 11:30 a.m.'},
      {'period':'05','time':'11:45 a.m. - 12:35 p.m.'},
      {'period':'06','time':'12:50 p.m. - 1:40 p.m.'},
      {'period':'07','time':'1:55 p.m. - 2:45 p.m.'},
      {'period':'08','time':'3:00 p.m. - 3:50 p.m.'},
      {'period':'09','time':'4:05 p.m. - 4:55 p.m.'},
      {'period':'10','time':'5:10 p.m. - 6:00 p.m.'},
      {'period':'11','time':'6:15 p.m. - 7:05 p.m.'},
      {'period':'E1','time':'7:20 p.m. - 8:10 p.m.'},
      {'period':'E2','time':'8:20 p.m. - 9:10 p.m.'},
      {'period':'E3','time':'9:20 p.m. - 10:10 p.m.'}
    ]
  };

  vm.daySource=[
    {'day':['Monday','Tuesday','Wednesday'],'item':'apple','state':'juice'},
    {'day':['Thursday','Tuesday','Wednesday'],'item':'banana','state':'fruit'},
    {'day':['Thursday','Tuesday','Friday'],'item':'pear','state':'slice'},
    {'day':['Friday','Saturday'],'item':'vacada','state':'piece'},
    {'day':['Sunday','Monday','Saturday'],'item':'blabla','state':'juice'}

  ];
  vm.setDay=setDay;
  vm.isDay=isDay;
  vm.hasDay=hasDay;
  vm.getDay=getDay;
  vm.test=test;


  function test(){
    console.log(vm.daySource[0].day.indexOf('Monday'));
    console.log(vm.daySource[0].day.indexOf('Tuesday'));
    console.log(vm.daySource[0].day.indexOf('Wednesday'));
    console.log(vm.daySource[0].day.indexOf('Thursday'));
    console.log(hasDay(vm.daySource[0].day));
    console.log(hasDay(vm.daySource[1].day));
  }
  function setDay(dayValue){
    vm.dayValue=dayValue;
  }
  function isDay(dayValue){
    return vm.dayValue===dayValue;
  }
  function hasDay(dayArray){
    if($.isArray(dayArray)){
      if(dayArray.indexOf(vm.dayValue)>=0){
        return true;
      }else{
        return false;
      }
    }
  }
  function getDay(){
    return vm.dayValue;
  }
  test();


}
