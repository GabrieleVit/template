
app.factory("ChatService", ["$firebase", function($firebase) {
    var ref = new Firebase("https://flickering-fire-5435.firebaseio.com/chat");
    return $firebase(ref);
}]);