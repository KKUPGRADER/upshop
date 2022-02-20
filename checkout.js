let fname =   $("#fname").val();

let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let num = document.getElementById("number").value;
let msg = document.getElementById("addNote").value;
let addr = document.getElementById("address").value;
let zip = document.getElementById("zip").value;
let cont = document.getElementById("country").value;


function payout(){
    window.open(`https://wa.me/+919079549255?text=Costumer Name = '+fname+' %0aEmail- ${email}%0a`,
        "_blank"
    ); 
}
