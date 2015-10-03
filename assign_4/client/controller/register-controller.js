var myApp = angular.module('myApp', []);
myApp.controller('RegisterController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/create').success(function(response) {
    console.log("I got the data I requested");
    $scope.myForm = response;
    $scope.myForm = "";
  });
};

refresh();

$scope.myForm.submitForm = function() {
  console.log($scope.myForm);
  $http.post('/create', $scope.myForm).success(function(response) {
    console.log(response);
    refresh();
  });
};