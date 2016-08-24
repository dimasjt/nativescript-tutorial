var config = require("../../shared/config");
var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

function GroceryListViewModel(items){
  var viewModel = items;
  return viewModel;
}

module.exports = GroceryListViewModel;
