// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
    //each of the the three states below represent one page for the app
    // each stat is giving a html for the design of that page
    // and a controller to add functionality to the page
  .state('tab.shortTerm', {
    url: '/shortTerm',
    views: {
      'tab-shortTerm': {
        templateUrl: 'templates/tab-shortTerm.html',
        controller: 'ShortTermCtrl'
      }
    }
  })

  .state('tab.mediumTerm', {
      url: '/mediumTerm',
      views: {
        'tab-mediumTerm': {
          templateUrl: 'templates/tab-mediumTerm.html',
          controller: 'MediumTermCtrl'
        }
      }
    })


  .state('tab.longTerm', {
    url: '/longTerm',
    views: {
      'tab-longTerm': {
        templateUrl: 'templates/tab-longTerm.html',
        controller: 'LongTermCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/shortTerm');

});
