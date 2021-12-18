let item_total = JSON.parse(localStorage.getItem("total_item_price"));

let item_total_value = +item_total[0];

let item_value = document.getElementById("item_value");
let shipping = document.getElementById("shipping");
let External = document.getElementById("External");
let final_total = document.getElementById("final_total");
item_value.innerHTML = "$" + item_total_value;
final_total.innerHTML =  "$" + (item_total_value + 50 + 100);

// Promocode 
var prmo_apply = document.getElementById("prmo_apply")


let coupon_applied_sucess = document.getElementById("coupon_applied_sucess");
let coupon_not_applied = document.getElementById("coupon_not_applied");
let invalid_coupon = document.getElementById("invalid_coupon");
coupon_applied_sucess.style.display = "none"
coupon_not_applied.style.display = "none"
invalid_coupon.style.display = "none"


function checkPromo(){
   
    let promo_input = document.getElementById("promo_input").value;
    //  var promo_button = document.getElementById("promo_button")
    if(promo_input == "newyear"){
        console.log(promo_input)
        
        
        var newtotal = Math.floor((item_total_value + 50 + 100) *(60/100));
        final_total.innerHTML = "₹ "+newtotal;
        prmo_apply.disabled = true;
        prmo_apply.style.cursor = "not-allowed";
        coupon_applied_sucess.style.display = "block"
        coupon_not_applied.style.display = "none"
invalid_coupon.style.display = "none"

       

       

        // console.log(srng);
        // console.log(newtotal)
       
    }else if(promo_input == ""){
        
        coupon_not_applied.style.display = "block"
        coupon_applied_sucess.style.display = "none"

invalid_coupon.style.display = "none"
        
    }else{
        
        
        invalid_coupon.style.display = "block"
        coupon_applied_sucess.style.display = "none"
coupon_not_applied.style.display = "none"
    }
}

// Check address
let address_form = document.getElementById("address_form");
let Payment = document.getElementById("Payment");


function goTopayment(){
   
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let countery = document.getElementById("countery").value;
    let postal_code = document.getElementById("postal_code").value;
    let email = document.getElementById("email").value;

    if(first_name == "" || last_name == "" || address == "" || city == "" || postal_code == "" || email == "" ){
        alert("please fill the address")
    }
    else{
    let Name = first_name+""+last_name+" " ;
    let fulladdress =  address+","+city+" " ;
    let code =postal_code +" " ;
    let countery_name = countery;
    let filled_address = document.getElementById("filled_address");
    filled_address.innerHTML="";

    filled_address.append(Name,fulladdress,code,countery_name)
    
    address_form.style.display = "none";
    Payment.style.display = "block"
    }
}

function editAddress(){
    address_form.style.display = "block";
    Payment.style.display = "none"
}

function gotoSucessPage(){
    let card_number = document.getElementById("card_number").value;
    let expary = document.getElementById("expary").value;
    let security_code = document.getElementById("security_code").value;
    if( card_number == "" || expary == "" || security_code == ""){
        alert("fill the card details");
    }else{
        window.location.href="../Sucess/sucess.html"
    }

}
