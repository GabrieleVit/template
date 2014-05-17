var app = angular.module("talkOn", ["firebase", 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.when('', '/#');
	//$urlRouterProvider.otherwise('/');
	

	$stateProvider
		.state('login', {
			url: '/login',
			controller: 'LoginController',
			templateUrl: 'templates/login.html'
		})
        .state('lobby', {
            url: '/lobby',
            templateUrl: 'templates/lobby.html'
        })
		.state('search', {
            url: '/search',
            templateUrl: 'templates/search.html'
        })
		.state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
		.state('chatroom', {
            url: '/chatroom',
            templateUrl: 'templates/chatroom.html'
        })
		.state('main', {
            url: '/',
			controller: 'MainController',
            templateUrl: 'templates/main.html'
        }); 

	
});
