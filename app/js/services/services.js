/**
 * Created by lu1 on 2017/5/14.
 */
app.factory('Main', ['$http', '$localStorage', function($http, $localStorage){
    var baseUrl = "http://localhost:3001";
    function changeUser(user) {
        angular.extend(currentUser, user);
    }

    function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

    var currentUser = getUserFromToken();

    return {
        save: function(data, success, error) {
            $http.post(baseUrl + '/signin', data).then(success, error)
        },
        signin: function(data, success, error) {
            $http.post(baseUrl + '/authenticate', data).then(success, error)

        },
        authorized: function(success, error) {
            $http.get(baseUrl + '/authorized').then(success, error)

        },
        signout: function(success) {
            changeUser({});
            delete $localStorage.token;
            success();
        }
    };
}
]);
