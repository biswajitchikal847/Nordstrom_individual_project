import {Navbar} from "../Navbar/Navbar.js";
import {Footer} from "../Footer/footer.js";


let header = document.getElementById("header");
header.innerHTML = Navbar();

let footer = document.getElementById("footer");
footer.innerHTML = Footer();

let bag_item = localStorage.getItem("no_of_item");
console.log(bag_item)
let bag_items = document.getElementById("bag_items");
bag_items.innerHTML = bag_item;

let signup = document.getElementById("signup")
let login_form = document.getElementById("login_form")
let register = document.getElementById("register");
let login = document.getElementById("login");

let go_to_log_in = document.getElementById("go_to_log_in");
go_to_log_in.onclick = function(){
    login_form.style.display = "block";
    signup.style.display = "none"
}

async function Register(){
       
    //1 get all input value
    //2 store it in an object
    //3 send data to server(fetch)
    let signup_data = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        username : document.getElementById("username").value,
        mobile : document.getElementById("mobile").value,
        description : document.getElementById("description").value
    };

    signup_data = JSON.stringify(signup_data);
    console.log(signup_data)
    let register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
   let res = await fetch(register_api, {
        method: "POST",
        body: signup_data,
        headers: {
            "Content-Type": "application/json",
        },
    });

    var data1 = await res.json();
    // if()
    console.log(data1)
    checkUser(data1)

}

register.onclick = Register

function checkUser(d){
        if(d.error == false){
            // alert("Registration Sucessfull");
         
                signup.style.display ="none";
                login_form.style.display = "block"
            

        }else{
            alert(d.message)
        }
}




async function Login(){
    let login_data = {
        username : document.getElementById("login_username").value,
        password : document.getElementById("login_password").value
    };

    login_data = JSON.stringify(login_data);

    let login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

   let res = await fetch(login_api, {
        method : "POST",
        body: login_data,
        headers:{
            "Content-Type" : "application/json",
        },
    });

    let data = await res.json();
    console.log(data)
    allowLogin(data)
    let username = document.getElementById("login_username").value;

    Getprofile(username,data.token)

}

login.onclick = Login

function allowLogin(d){
         if(d.error == false){
              alert("login sucessfull");
              
               window.location.href= "../index.html"
            

         }else{
             alert(d.message)
         }
}

async function Getprofile(username, token){
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`
    let res = await fetch(api,{
        headers:{
        "Content-Type" : "application/json",

        "Authorization": `Bearer ${token}`,
        },
    });

    var data2 = await res.json()
    // console.log(data)
    get_userName(data2)
   

}

function get_userName(d){
     return d.username
}

// let get_user_name = localStorage.setItem("userName",get_userName(data2))

let brand_logo = document.getElementById("brand_logo");
brand_logo.addEventListener("click",function(){
    window.location.href = "../Index.html"
})

