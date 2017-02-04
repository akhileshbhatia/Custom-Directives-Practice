var app = angular.module("myApp",[]);

app.directive("custom1",function(){
  var custom1 = {};

  custom1.restrict = 'A';

  custom1.template = "My first custom directive: {{textToInsert}}";

  return custom1;
});

app.controller("myController",function($scope){
  $scope.textToInsert = "ban gya";
})
