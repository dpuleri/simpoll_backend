// Code goes here

var myApp = angular.module('app', []);
myApp.config(['$httpProvider', function($httpProvider) {
 $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

myApp.controller('MainCtrl', function ($scope, $http, $location){

  $scope.select = false;

  var url = $location.path()
  console.log('the url is' + url)
  // Retrieving the ID from the URL
  var url = $location.absUrl();
  var reversed = url.split("").reverse().join("");
  id = reversed.split("/")[0]
  id = id.split("").reverse().join("");

  $http({
          url: 'http://simpoll-remote.cloudapp.net/poll/' + id,
          method: "GET",
        }).success(function (data, status, headers, config) {
          console.log("1");
          console.log(data);
          $scope.data = data;
          $scope.option1 = $scope.data.option1;
          $scope.option2 = $scope.data.option2;
          $scope.question = $scope.data.question;


        }).error(function (data, status, headers, config) {
          console.log("Data not retrieved");
          console.log(data);
        });

  $scope.selectedOption = function(){
    $scope.select = true;
  }



  $scope.addItem = function(){
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }



});
