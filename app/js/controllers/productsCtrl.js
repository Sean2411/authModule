/**
 * Created by lu1 on 5/15/17.
 */
app.controller('productsCtrl', ['$rootScope','$scope', '$http', '$routeParams', '$location', 'Main', function ($rootScope, $scope, $http, $routeParams, $location, Main) {
    var url = $location.url();
    Main.authorized(function() {
        $rootScope.loggedin = false;
    }, function() {
        $location.path(url);
    });


    $http.get('../json/products.json').then(function (res) {
        $scope.products = res.data;
        $scope.productDetail = $scope.products[$routeParams.productId - 1];
    }, function (err) {
        console.log(err);
    });

}]);

