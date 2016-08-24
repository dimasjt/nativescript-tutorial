var frameModule = require('ui/frame');

exports.toListView = function(){
  frameModule.topmost().navigate('views/listview/listview')
}
