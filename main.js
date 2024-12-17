obj = {"Name":"Greeshman" , "Age":"13" , "School":"Bhashyam Blooms"};
a = JSON.stringify(obj);
b = JSON.parse(a);
document.getElementById("output").innerHTML = b.Name + " " + b.Age + " " + b.School;