// Code goes here

var myApp = angular.module('app', []);
myApp.config(['$httpProvider', function($httpProvider) {
 $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

myApp.controller('MainCtrl', function ($scope, $http, $location){

  $scope.selected = false;

  var url = $location.path()
  console.log('the url is' + url)
  // Retrieving the ID from the URL
  var url = $location.absUrl();
  var reversed = url.split("").reverse().join("");
  id = reversed.split("/")[0]
  id = id.split("").reverse().join("");

  $scope.newdata = {
    id : id,
    option1votes : 0,
    option2votes: 0
  };

  $http({
          url: 'http://simpoll-remote.cloudapp.net/poll/' + id,
          method: "GET",
        }).success(function (data, status, headers, config) {
          $scope.data = data;
          $scope.option1 = $scope.data.option1;
          $scope.option2 = $scope.data.option2;
          $scope.question = $scope.data.question;
          $scope.option1votes = $scope.data.option1votes;
          $scope.option2votes = $scope.data.option2votes;

        }).error(function (data, status, headers, config) {
          console.log("Data not retrieved");
          console.log(data);
        });

  $scope.putData = function(){
    //increment correctly
    $scope.newdata.option1votes = $scope.option1votes;
    $scope.newdata.option2votes = $scope.option2votes;
    $scope.selected = true;
    //update on server
    console.log(("http://simpoll-remote.cloudapp.net/poll/" + id));
    console.log($scope.newdata);
    $http.put(("http://simpoll-remote.cloudapp.net/poll/" + id), $scope.newdata);
  }


  $scope.selectedOption1 = function() {
    $scope.option1votes += 1;
    $scope.putData();
  }

  $scope.selectedOption2 = function() {
    $scope.option2votes += 1;
    $scope.putData();
  }


  $scope.addItem = function(){
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }



});
