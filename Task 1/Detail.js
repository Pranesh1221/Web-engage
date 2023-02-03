const user = JSON.parse(localStorage.getItem("user"));
const data = document.getElementById("detail-data");
const email = document.createElement("h1");
email.innerHTML = `Email : ${user.email}`;
const mobile_Number = document.createElement("h1");
mobile_Number.innerHTML = `Contact Number : +${user.countryCode} - ${user.mobile}`;
data.append(email, mobile_Number);
