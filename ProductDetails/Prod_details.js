import {Navbar} from "../Navbar/Navbar.js"
import {Footer} from "../Footer/footer.js";

let header = document.getElementById("header");
header.innerHTML = Navbar();

let footer = document.getElementById("footer");
footer.innerHTML = Footer();

let bag_item = localStorage.getItem("no_of_item");
console.log(bag_item)
let bag_items = document.getElementById("bag_items");
bag_items.innerHTML = bag_item;


let items = JSON.parse(localStorage.getItem("pdetails"));
console.log(items)
let item = items[0];

let display_img_div = document.getElementById("display_img_div");
let img_1_div = document.getElementById("img_1_div");
let img_2_div = document.getElementById("img_2_div");
let video_div = document.getElementById("video_div");

let display_img = document.createElement("img");
display_img.src = item.Displayimages;
display_img_div.append(display_img);

let img_1 = document.createElement("img");
img_1.src = item.image1;
img_1_div.append(img_1)

let img_2 = document.createElement("img");
img_2.src = item.image2;
img_2_div.append(img_2);



let video = document.createElement("img");
video.src = item.video;
video_div.append(video)


let prd_details_div = document.getElementById("prd_details_div");

let titel_div = document.createElement("div");
titel_div.id = "titel_div";
let rating = document.createElement("p");
rating.innerHTML = "Ratings " +item.Rating + " (" + Math.floor(Math.random() * 120) + ")"
rating.id ="rating";

let title = document.createElement("p");
title.innerHTML = item.Title;
title.id = "title"

let subTitel = document.createElement("p");
subTitel.innerHTML = item.subTitle;
subTitel.id = "subTitle"

titel_div.append(rating,title,subTitel);

let price_div = document.createElement("div");
price_div.id = "price_div"

let price = document.createElement("p");
price.innerHTML ="$"+ item.price;
price.id = "price"

let price_info = document.createElement("p");
price_info.innerHTML = "Price varies with currency exchange rates and may be different than in store."

price_div.append(price,price_info);

let des = document.createElement("p");
des.innerHTML = item.Prod_des;
des.id = "des";

let size_div = document.createElement("div");
size_div.id = "sizediv"
let size_p = document.createElement("p");
size_p.innerHTML= "Fit: True to size";
size_p.id = "sizep"

let sizes = document.createElement("select");
sizes.id = "sizes"
let option1 = document.createElement("option");
option1.innerHTML = "S";
let option2 = document.createElement("option");
option2.innerHTML = "M";
let option3 = document.createElement("option");
option3.innerHTML = "L";
let option4 = document.createElement("option");
option4.innerHTML = "XL";
let option5 = document.createElement("option");
option5.innerHTML = "XXL";

let option0= document.createElement("option");
option0.innerHTML = "Size"

sizes.append(option0,option1,option2,option3,option4,option5);
size_div.append(size_p,sizes)

let people_viewing = document.createElement("p");
people_viewing.innerHTML = Math.floor(Math.random() * 500) + " People are viewing";
people_viewing.id = "people_viewing";

let add_to_cart_btn = document.createElement("button");
add_to_cart_btn.innerHTML = "Add to cart" ;
add_to_cart_btn.id = "add_to_cart_btn"

prd_details_div.append(titel_div,price_div,des,size_div, people_viewing,add_to_cart_btn);

// let pbagbutton = document.getElementById("pbagbutton");


// console.log(size_vale)



// let size =[ {
//     sizes: size_vale,
// }
// ];
// console.log(size)

add_to_cart_btn.addEventListener("click",getsize);

function getsize(){
    var size_vale = sizes.value;
    localStorage.setItem("size",size_vale)
}


add_to_cart_btn.onclick = function()
{
    if(localStorage.getItem("cart")===null)
    {
        localStorage.setItem("cart",JSON.stringify([]));
    }
    let cart =JSON.parse(localStorage.getItem("cart"));
    
                    
    cart.push(item);
    // cart.push(items.size_vale);

    localStorage.setItem("cart",JSON.stringify (cart));
       
    let bag_item = localStorage.getItem("no_of_item");
    console.log(bag_item)
    let bag_items = document.getElementById("bag_items");
    bag_items.innerHTML = bag_item;

    window.location.href = "../Cart/Cart.html";

}

let Back_to_result = document.getElementById("Back_to_result");

Back_to_result.addEventListener("click",function(){
    window.location.href = "../Products/Products.html";
})

let brand_logo = document.getElementById("brand_logo");
brand_logo.addEventListener("click",function(){
    window.location.href = "../Index.html"
})