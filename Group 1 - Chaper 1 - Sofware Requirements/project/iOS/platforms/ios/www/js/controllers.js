/* global media */
var mediaRecorder;
var app = angular.module('starter.controllers', []);
app.controller('txtTimeController', function($scope) {
  $scope.txtTimeValue= "00 : 00";
});

app.controller('btnRecordController', function($scope) {
  $scope.stateRecord = 0;
  $scope.btnImageSource = "img/imgRecord.svg";
  $scope.onRecordClicked= function()
  {
    if($scope.stateRecord === 0)
    {
      $scope.stateRecord = 1;
      $scope.btnImageSource = "img/imgStop.png";
      
      var src = "myrecording.wav";
      mediaRecorder = new Media(src,
      // success callback
      function() {
          console.log("recordAudio():Audio Success");
      },
      // error callback
      function(err) {
          console.log("recordAudio():Audio Error: "+ err.code);
      },
      //Status
      function(status){
          $scope.txtTimeValue= "00 : 00";
      });
      // Record audio
      mediaRecorder.startRecord();
    }
    else
    {
      $scope.stateRecord = 0;
      $scope.btnImageSource = "img/imgRecord.svg";
      
      mediaRecorder.stopRecord();
    }
  };
});
app.controller('btnHistoryController', function($scope) {
  $scope.onHistoryClicked= function()
  {

  };
 });
