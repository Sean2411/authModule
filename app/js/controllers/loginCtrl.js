/**
 * Created by lu1 on 2017/5/14.
 */
app.controller('loginCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main) {
    $rootScope.loggedin = true;
    $scope.signin = function() {
        var formData = {
            email: $scope.email,
            password: $scope.password
        }

        Main.signin(formData, function(res) {
            $localStorage.token = res.data.token;
            $location.path('/authorized');
            $rootScope.loggedin = false;
        }, function() {
            $rootScope.error = 'Failed to signin';
        })
    };

    $scope.signup = function() {
        var formData = {
            email: $scope.email,
            password: $scope.password
        }

        Main.save(formData, function(res) {
            $localStorage.token = res.data.token;
            $location.path('/authorized');
            $rootScope.loggedin = false;
        }, function() {
            $rootScope.error = 'Failed to signup';
        })
    };

    $scope.authorized = function() {
        Main.authorized(function(res) {
            $scope.myDetails = res;
            $rootScope.loggedin = false;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        })
    };

    $scope.signout = function() {
        Main.signout(function() {
            $location.path('/');
            $rootScope.loggedin = true;

        }, function() {
            $rootScope.error = 'Failed to signout';
        });
    };
}]);