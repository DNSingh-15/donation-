let menuOpen = false;
const token = "6f0d993b-40f3-4f7e-9db3-842727842b6c";

function openMenu() {
    const navbarLinks = document.getElementById("links");
    const link = document.querySelector(".link");
    const humberger = document.querySelector(".humberger");
    const subLinks = document.querySelectorAll(".subLink");
    if (menuOpen) {
        navbarLinks.style.display = "";
        navbarLinks.style.flexDirection = "";
        navbarLinks.style.height = "";
        humberger.style.marginTop = "";
        link.style.marginTop = "";
        subLinks.forEach(element => {
            element.style.display = "";
        });
        menuOpen = false;
    }
    else {
        humberger.style.marginTop = "10px";
        link.style.marginTop = "50px";
        navbarLinks.style.display = "flex";
        navbarLinks.style.flexDirection = "column";
        navbarLinks.style.height = "auto";
        subLinks.forEach(element => {
            element.style.display = "inline-block";
        });
        menuOpen = true;
    }
}

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const payment_mode = document.getElementById("mode").value;
    const body = `Donater's name : ${name}<br>
    Donater's email : ${email}<br>
    Donation amount : ${amount}<br>
    paid through : ${payment_mode}`;
    // console.log(body);
    Email.send({
        SecureToken : token,
        To : email,
        From : "demoforaprogrammer@gmail.com",
        Subject : "Thank you for donating to multicare funds",
        Body : `you are helping millions of peoples<br>${body}`
    }).then(
      message => {
          if(message == "OK"){
              alert("Email has been sent");
          }
          else{
              alert("There is an error while sending email");
          }
      }
    );
    
}

const form = document.getElementById("donationForm");

form.addEventListener("submit", (e) => {
    setTimeout(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("mode").value = "";
    }, 5000);
})
