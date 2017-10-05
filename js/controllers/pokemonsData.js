(function(){

    var app = angular.module("pokemonGallery", ['ui.bootstrap']);

})();

(function(){
      angular.module('pokemonGallery',[])

      //define controller and inject $http service as dependency.
      .controller('pokemonController',['$http','$scope',function($http,$scope){
          $http.get('https://pokeapi.co/api/v2/pokemon/?limit=151').then(function(response){
                $scope.data = response.data.results;
                 $scope.currentPage = 1;
                 $scope.itemsPerPage = 20;
                 $scope.pageSize=5;
                 $scope.numberOfPages = 10;

                 $scope.getData = function () {
                       return $filter('filter')($scope.data, $scope.search)
                 }

                 $scope.numberOfPages=function(){
                        return Math.ceil($scope.getData().length/$scope.pageSize);
                 }
          });

      }])

  })();


