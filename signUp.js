// Get a reference to the database service
var database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function signUp(emai, passwordl){
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
	console.log(errorMessage);
  	// ...
	});
}

function writeUserData(userId,email ,program, gender ,name ,team ,imageUrl, description, date) {
	firebase.database().ref('users/' + program + "/" + gender).set({
  	  full_name: name,
	  email: email,
    	  team_number: team,
    	  profile_picture : imageUrl,
	  free_text: description,
	  date: date
  });
}