// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('HelloWorld', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
    .controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
      $scope.popupCtrl = {};

      // An alert dialog
      $scope.popupCtrl.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
          title: 'Contributors',
          templateUrl: 'popup-template.html',
          okText: 'Done',
          okType: 'button-royal'
        });
      };
    })
.controller('NamesCtrl', function($scope) {
  $scope.names = [
    { title: 'Elizabeth Rego' },
    {title: 'Stephen Lorello'},
    {title: 'Brian `the dude` Phelan'},
    {title: 'Fake Example Name'}
  ];
});
