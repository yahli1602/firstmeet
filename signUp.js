// Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDuTf3GbH2iXhh5SwY3rKg_oZJhNGYuqxQ",
        authDomain: "first-meet-2a581.firebaseapp.com",
        databaseURL: "https://first-meet-2a581.firebaseio.com",
        projectId: "first-meet-2a581",
        storageBucket: "first-meet-2a581.appspot.com",
        messagingSenderId: "653673707274",
        appId: "1:653673707274:web:c395b728777d6ba757acf3",
        measurementId: "G-QNVBP8Y2XE"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("user has sign up")
    program = findRadiosChecked("program")
    gender = findRadiosChecked("gender")
    name = document.getElementById("FullName").value
    team = document.getElementById("tmNum").value
    description= document.getElementById("bio").value
    date = document.getElementById("date").value
    if(program && gender && name && name && team && description && date)
    	writeUserData(user.uid, user.email, program, gender, name, team, description, date) 
  } else {
    // No user is signed in.
  }
});

function signUp(emai, passwordl){
	firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
	console.log(errorMessage);
  	// ...
	});
}

function writeUserData(userId,email ,program, gender ,name ,team ,description, date) {
	firebase.database().ref('users/' + program + "/" + gender + "/" + userId).set({
  	  full_name: name,
	  email: email,
    	  team_number: team,
    	  //profile_picture : imageUrl,
	  free_text: description,
	  date: date
  });
}

function findRadiosChecked(name){
	for( const radio of document.getElementsByName(name).entries()){
	if( radio[1].checked ) return radio[1].value;
	}
	return null;
}