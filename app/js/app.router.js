/**
 * Created by lu1 on 2017/5/14.
 */
app.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html',
        controller: 'loginCtrl'
    }).
    when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'loginCtrl'
    }).
    when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'loginCtrl'
    }).
    when('/authorized', {
        templateUrl: 'views/user_profile.html',
        controller: 'authorizedCtrl'
    }).
        when('/product/:productId', {
        templateUrl: 'views/product_detail.html',
        controller: 'productsCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/signin');
                }
                return $q.reject(response);
            }
        };
    }]);

}
]);