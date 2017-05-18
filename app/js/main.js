/**
 * Created by lu1 on 2017/5/15.
 */
app.run(['$rootScope',
    function ($rootScope) {

        // GLOBAL APP SCOPE
        // set below basic information
        $rootScope.app = {
            name: 'Auth Module', // name of your web App
            author: 'Sean Lu', // author's name (for copyright information)
            description: 'Auth Module',
            version: '1.0.0', // current version
            year: ((new Date()).getFullYear()), // automatic current year (for copyright information)
            isMobile: (function () {// true if the browser is a mobile device
                var check = false;
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    check = true;
                }
                return check;
            })(),
            layout: {
                logo: 'assets/images/wing.jpg' // relative path of the project logo
            }
        };
        $rootScope.user = {
            name: 'Sean Lu',
            job: 'Software Engineer'
        };
    }]);