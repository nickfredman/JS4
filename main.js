var victims = prompt("How many disaster victims do you wish to enter?");

var victim = [];

for (var i = 0; i < victims; i++) {
	victim.push({
		name: prompt("Enter victim number " + (i+1) + "\'s name:"),
		phoneNumber: prompt("Enter the victim\'s phone number:"),
		address: prompt("Enter the victim\'s address:")
	});
}

var volunteers = prompt("How many volunteers do you wish to enter?");

var volunteer = [];

for (var i = 0; i < volunteers; i++) {
	volunteer.push({
		name: prompt("Enter volunteer number " + (i+1) + "\'s name:"),
		phoneNumber: prompt("Enter the volunteer\'s phone number:"),
		address: prompt("Enter the volunteer\'s address:")
	});
}

var victimText = "";
var volunteerText = "";

for(var i = 0; i < victims; i++) {
	victimText += "Victim number " + (i+1) + ":" +
	"\nName: " + victim[i].name +
	"\nPhone Number: " + victim[i].phoneNumber +
	"\nAddress: " + victim[i].address + "\n\n"
};

for(var i = 0; i < volunteers; i++) {
		volunteerText += "Volunteer number " + (i+1) + ":" +
		"\nName: " + volunteer[i].name +
		"\nPhone Number: " + volunteer[i].phoneNumber +
		"\nAddress: " + volunteer[i].address + "\n\n"
	};

alert("There are " + victims + " victims in total. \n" + victimText +
	"\n\nThere are " + volunteers + " volunteers in total. \n" + volunteerText);

