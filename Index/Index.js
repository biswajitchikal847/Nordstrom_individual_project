import { firstSliderImg, images, secondSliderImg, fivethSliderImg, SeventhSliderImg, EighthtSliderImg } from "../Data/Indexdata.js"
import {productdata} from "../Data/Products_data.js";
import {Footer} from "../Footer/footer.js";
import {Navbar} from "../Navbar/Navbar.js";

let header = document.getElementById("header");
header.innerHTML = Navbar();

let footer = document.getElementById("footer");
footer.innerHTML = Footer();

let do_sign_in = document.getElementById("do_sign_in");
do_sign_in.onclick = function(){
    window.location.href = "../createAccount/login.html"
}
// console.log(firstSliderImg)
// console.log(images[0])

let sliderIndex = 1;
let fst_slid_show = document.getElementById("fst_slid_show")
let first_slid_images = document.createElement("img");
setInterval(() => {
    first_slid_images.src = firstSliderImg[sliderIndex];
    sliderIndex++;
    if (sliderIndex == firstSliderImg.length) {
        sliderIndex = 0;
    }
}, 3000);
fst_slid_show.append(first_slid_images)

// First Img div

let fst_img_div = document.getElementById("fst_img_div");
let fst_img = document.createElement("img");
fst_img.src = images[0];
// console.log(fst_img, "fst")
fst_img_div.append(fst_img);

// sec img div

let sec_img_div = document.getElementById("sec_img_div");
let sec_img = document.createElement("img");
sec_img.src = images[1];
// console.log(sec_img, "sec")
sec_img_div.append(sec_img);

// Third img & slid div



let trd_slid = document.getElementById("trd_slid");
let trd_slid_img = document.createElement("img");
let i = 1;
setInterval(() => {
    trd_slid_img.src = secondSliderImg[i];
    i++;
    if (i == secondSliderImg.length) {
        i = 0;
    }
}, 2000);
trd_slid.append(trd_slid_img);

//   Fifth slider

let fivth_slid_div1 = document.getElementById("fivth_slid_div1");
let fivth_slid_div1_img = document.createElement("img");
let j = 1;
setInterval(() => {
    fivth_slid_div1_img.src = fivethSliderImg[j];
    j++;
    if (j == 4) {
        j = 0;
    }
}, 4000);
fivth_slid_div1.append(fivth_slid_div1_img);


//   2nd 
let fivth_slid_div2 = document.getElementById("fivth_slid_div2");
let fivth_slid_div2_img = document.createElement("img");
let k = 5;
setInterval(() => {
    fivth_slid_div2_img.src = fivethSliderImg[k];
    k++;
    if (k == 9) {
        k = 4;
    }
}, 800);
fivth_slid_div2.append(fivth_slid_div2_img);

//  3rd

let fivth_slid_div3 = document.getElementById("fivth_slid_div3");
let fivth_slid_div3_img = document.createElement("img");
let l = 10;
setInterval(() => {
    fivth_slid_div3_img.src = fivethSliderImg[l];
    l++;
    if (l == 13) {
        l = 9;
    }
}, 4000);
fivth_slid_div3.append(fivth_slid_div3_img);

//  Seventh slid & image

   //1st

   let svnt_slid_div1 = document.getElementById("svnt_slid_div1");
let svnt_slid_div1_img = document.createElement("img");
let n= 1;
setInterval(() => {
    svnt_slid_div1_img.src = SeventhSliderImg[n];
    n++;
    if (n== 5) {
        n= 0;
    }
}, 1000);
svnt_slid_div1.append(svnt_slid_div1_img);

    //    2nd

    let svnt_slid_div2 = document.getElementById("svnt_slid_div2");
let svnt_slid_div2_img = document.createElement("img");
let m= 6;
setInterval(() => {
    svnt_slid_div2_img.src = SeventhSliderImg[m];
    m++;
    if (m== 10) {
        m= 5;
    }
}, 3000);
let svnt_slid_div2_subdiv = document.createElement("div");
svnt_slid_div2_subdiv.id = "svnt_slid_div2_subdiv";
let svnt_slid_div2_subdiv_h3 = document.createElement("h3");
svnt_slid_div2_subdiv_h3.innerHTML = "FOR MAKEUP MAVENS"
let svnt_slid_div2_subdiv_link = document.createElement("a");
svnt_slid_div2_subdiv_link.innerHTML = "Shop Now";
svnt_slid_div2_subdiv.append(svnt_slid_div2_subdiv_h3,svnt_slid_div2_subdiv_link)
svnt_slid_div2.append(svnt_slid_div2_img,svnt_slid_div2_subdiv);

//  8th slider

let eight = 1;
let eighth_slider_div = document.getElementById("eighth_slider_div")
let eighth_slider_div_images = document.createElement("img");
setInterval(() => {
    eighth_slider_div_images.src = EighthtSliderImg[eight];
    eight++;
    if (eight == EighthtSliderImg.length) {
        eight = 0;
    }
}, 3500);
eighth_slider_div.append(eighth_slider_div_images)

let bag_item = localStorage.getItem("no_of_item");
// console.log(bag_item)
let bag_items = document.getElementById("bag_items");
bag_items.innerHTML = bag_item;

//  show products

let product_main_div = document.getElementById("product_main_div");


    function showProducts(productData){
        for(let i = 0; i < 5; i++){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = productdata[i].Displayimages;

        let Titel = document.createElement("p");
        Titel.innerHTML = productdata[i].Title
        Titel.id = "Title"

        let subtitle = document.createElement("p");
        subtitle.innerHTML = productdata[i].subTitle
        subtitle.id = "subtitle"

        let price = document.createElement("P");
        price.innerHTML = "$ "+ productdata[i].price
        price.id ="price"

        let rating = document.createElement("p");
        rating.innerHTML = "Rating "+ productdata[i].Rating
        rating.id = "rating"

        image.onmouseover = function (){
          image.src = productdata[i].image1;
        }

        image.onmouseout = function (){
          image.src = productdata[i].Displayimages;
        }

        div.append(image,Titel,subtitle,price,rating);
        div.onclick = function()
              {
                  if(localStorage.getItem("pdetails")===null)
                  {
                      localStorage.setItem("pdetails",JSON.stringify([]));
                  }
                  
                  let pdetails = JSON.parse(localStorage.getItem("pdetails"));
                  
                  pdetails.pop()
                  pdetails.push(productdata[i]);

                  localStorage.setItem("pdetails",JSON.stringify (pdetails));
                  
                  window.location.href = "../ProductDetails/Prod_details.html";

              }
              product_main_div.append(div)
    }
    }


showProducts(productdata);


