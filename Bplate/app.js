angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope) {
       $scope.greeting = "Hello World";
       
       $scope.initialize = function(data) {
         var x = 0;
         x = 1 + 1;
         alert(x);
         
         
       };
     // $scope.xxx = xx s
     
});