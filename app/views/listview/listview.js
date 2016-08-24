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
  }
};

exports.loaded = function(args){
  page = args.object;
  page.bindingContext = pageData;
};
