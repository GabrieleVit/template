
app.controller('LoginController', function ($scope, $firebase) {
	/*
	var peopleRef = new Firebase("https://<my-firebase>.firebaseio.com/people");
	// Automatically syncs everywhere in realtime
	$scope.people = $firebase(peopleRef);
	*/
});

app.controller('MainController', function ($scope, ChatService) {
	$scope.messages = ChatService;
	$scope.addMessage = function() {
		if ($scope.message) {
			$scope.messages.$add({from: $scope.user, content: $scope.message, time: new Date() });
			$scope.message = "";
		}		
	};
});

