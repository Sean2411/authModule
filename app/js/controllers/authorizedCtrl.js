/**
 * Created by lu1 on 2017/5/14.
 */
app.controller('authorizedCtrl', ['$rootScope', '$scope', '$location', 'Main', function($rootScope, $scope, $location, Main) {

    Main.authorized(function(res) {
        $scope.myDetails = res;
        $rootScope.loggedin = false;
    }, function() {
        $rootScope.error = 'Failed to fetch details';
    })
}]);