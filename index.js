let open = document.querySelector("#open");
let close = document.querySelector("#close");

function myFunction() {
    var x = document.getElementById("nav_links");
    console.log("hh");
    if(x.style.display === "block") {
        x.style.display ="none";
    }
    else {
        x.style.display = "block";
    }
}



// const form = document.getElementById('admission-form');

//         form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             const admissionQuery = {
//                 name: document.getElementById('name').value,
//                 email: document.getElementById('email').value,
//                 message: document.getElementById('message').value
//             };

//             // const existingQueries = JSON.parse(localStorage.getItem('admissionQueries')) || [];
            
//             // existingQueries.push(admissionQuery);
//             // console.log(admissionQuery)
//             localStorage.setItem('admissionQueries', JSON.stringify(existingQueries));
            
//             form.reset();
//             alert('Your message has been sent!');
//         });


function  saveAdmissionQuery(){
    const admissionQuery = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const existingQueries = JSON.parse(localStorage.getItem('admissionQueries')) || [];
    
    existingQueries.push(admissionQuery);
    console.log(admissionQuery)
    localStorage.setItem('admissionQueries', JSON.stringify(existingQueries));
    
    form.reset();
    alert('Your message has been sent!');
    
}