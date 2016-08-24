var Observable = require('data/observable').Observable

var page;

var pageData = new Observable({
  tasks: [],
  task: ""
});

exports.add = function(){
  if (pageData.get('task').trim() === '') {
    alert('Task cannot be blank')
    return;
  }else{
    page.getViewById('task').dismissSoftInput();
    task = pageData.get('task');

    pageData.tasks.push({ name: task });
    pageData.set('task', '')
    page.getViewById('tasksList').animate({
      opacity: 1,
      duration: 3000
    })
  }
};

exports.loaded = function(args){
  page = args.object;
  var listView = page.getViewById('tasksList');
  page.bindingContext = pageData;

  listView.animate({
    opacity: 1,
    duration: 1000
  })
};
