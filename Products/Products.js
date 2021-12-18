import {productdata} from "../Data/Products_data.js";
import {Navbar} from "../Navbar/Navbar.js";
// import {Footer} from "../Footer/footer.js";


let header = document.getElementById("header");
header.innerHTML = Navbar();

// let footer = document.getElementById("footer");
// footer.innerHTML = Footer();

let bag_item = localStorage.getItem("no_of_item");
// console.log(bag_item)
let bag_items = document.getElementById("bag_items");
bag_items.innerHTML = bag_item;
// console.log(productdata)

let items = document.getElementById("items");
function showProducts(productdata){
  items.innerHTML = "";
productdata.forEach((productItems)=>{
          // console.log(productItems);
          let div = document.createElement("div");

          let image = document.createElement("img");
          image.src = productItems.Displayimages;

          let Titel = document.createElement("p");
          Titel.innerHTML = productItems.Title
          Titel.id = "Title"

          let subtitle = document.createElement("p");
          subtitle.innerHTML = productItems.subTitle
          subtitle.id = "subtitle"

          let price = document.createElement("P");
          price.innerHTML = "$ "+ productItems.price
          price.id ="price"

          let rating = document.createElement("p");
          rating.innerHTML = "Rating "+ productItems.Rating
          rating.id = "rating"

          image.onmouseover = function (){
            image.src = productItems.image1;
          }

          image.onmouseout = function (){
            image.src = productItems.Displayimages;
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
                    pdetails.push(productItems);

                    localStorage.setItem("pdetails",JSON.stringify (pdetails));
                    
                    window.location.href = "../ProductDetails/Prod_details.html";

                }
          items.append(div)

          
});
}
showProducts(productdata)

// console.log(productdata)
function sortLH(){
  let arr = productdata.sort(function(a,b){
   return a.price - b.price

  });
  showProducts(arr)
  // sortLH()
  
}

// console.log(sortLH())
  console.log(productdata)
  function sortHL(){
  let arr = productdata.sort(function(a,b){
   return b.price - a.price

  });
  showProducts(arr)
}

// let sort_value = document.getElementById("sort_value").value;
// console.log(sort_value)

// // let HL = document.getElementById("HL").value;
// // let LH = document.getElementById("LH").value;

// LH.onclick = sortLH
// HL.onclick = sortHL


// Filter

var mcounter = 0;

function mens(){
  
  if(mcounter==0){
    mcounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="men"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    mcounter=0;
    
}
}
mcounter=0;

// console.log(mens())

let men = document.getElementById("men");
men.onclick= mens


//       Women

let wcounter=0
function womens(){
  
  if(wcounter==0){
    wcounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="women"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    wcounter=0;
    
}
}
wcounter=0;

let women = document.getElementById("women");
women.onclick = womens



//  catagory

//  shirts

let scounter=0
function shirt(){
  
  if(scounter==0){
    scounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="shirts"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    scounter=0;
    
}
}
scounter=0;

let shirts = document.getElementById("shirts");
shirts.onclick = shirt


// pants

let pcounter=0
function pant(){
  
  if(pcounter==0){
    pcounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="pants"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    pcounter=0;
    
}
}
pcounter=0;

let pants = document.getElementById("pants");
pants.onclick = pant

// tshirt

let tcounter=0
function tshirt(){
  
  if(tcounter==0){
    tcounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="tshirt"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    tcounter=0;
    
}
}
tcounter=0;

let T_shirts = document.getElementById("T-shirts");
T_shirts.onclick = tshirt

//  shoes
let shoecounter=0
function shoe(){
  
  if(shoecounter==0){
    shoecounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="shoe"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    shoecounter=0;
    
}
}
shoecounter=0;

let Shoes = document.getElementById("Shoes");
Shoes.onclick = shoe

// beauty

let bcounter=0
function beauty(){
  
  if(bcounter==0){
    bcounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="beauty"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    bcounter=0;
    
}
}
bcounter=0;

let Beauties = document.getElementById("Beauties");
Beauties.onclick = beauty

// kids

let kidscounter=0
function kid(){
  
  if(kidscounter==0){
    kidscounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="kids"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    kidscounter=0;
    
}
}
kidscounter=0;

let Kids = document.getElementById("Kids");
Kids.onclick = kid

// designer

let designercounter=0
function design(){
  
  if(designercounter==0){
    designercounter++;
    // console.log("mens")

var arr=[];
for(var i=0;i<productdata.length;i++){
    if(productdata[i].catagory =="designer"){
        arr.push(productdata[i])
    }
}
showProducts(arr)
}else{
    
    showProducts(productdata)
    designercounter=0;
    
}
}
designercounter=0;

let Designer = document.getElementById("Designer");
Designer.onclick = design




//      Prices

//  prices 0 to 25

let up=0;
function upto250(){
    
    if(up==0){
        up++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=1) && (productdata[i].price<=250) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up=0;
        
    }

}

let price0_250 = document.getElementById("from0-250");
price0_250.onclick = upto250;


//   250 to0 500

let up1=0;
function upto500(){
    
    if(up1==0){
        up1++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=251) && (productdata[i].price<=500) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up1=0;
        
    }

}

let price250_500 = document.getElementById("from250-500");
price250_500.onclick = upto500;

//  upto0 500-100

let up2=0;
function upto1000(){
    
    if(up2==0){
        up2++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=501) && (productdata[i].price<=1000) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up2=0;
        
    }

}

let price500_1000 = document.getElementById("from500-1000");
price500_1000.onclick = upto1000;

// 1000-2000
let up3=0;
function upto2000(){
    
    if(up3==0){
        up3++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=1001) && (productdata[i].price<=2000) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up3=0;
        
    }

}

let price1000_2000 = document.getElementById("from1000-2000");
price1000_2000.onclick = upto2000;


// 2000-4000
let up4=0;
function upto4000(){
    
    if(up4==0){
        up4++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=2001) && (productdata[i].price<=4000) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up4=0;
        
    }

}

let price2000_4000 = document.getElementById("from2000-4000");
price2000_4000.onclick = upto4000;

// 4000-600
let up5=0;
function upto6000(){
    
    if(up5==0){
        up5++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].price>=4001) && (productdata[i].price<=6000) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up5=0;
        
    }

}

let price4000_6000 = document.getElementById("from4000-6000");
price4000_6000.onclick = upto6000;

//  Above 6000

let up6=0;
function above6000(){
    
    if(up6==0){
        up6++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if(productdata[i].price>= 6001){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       up6=0;
        
    }

}

let price_above_6000 = document.getElementById("above_6000");
price_above_6000.onclick = above6000;


// Ratings 

//  1-2

let r1=0;
function rating1(){
    
    if(r1==0){
        r1++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].Rating>=1.0) && (productdata[i].Rating<=2.0) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       r1=0;
        
    }

}

let rating_1_2 = document.getElementById("rating_1_2");
rating_1_2.onclick = rating1;

//  2-3

let r2=0;
function rating2(){
    
    if(r2==0){
        r2++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].Rating>=2.1) && (productdata[i].Rating<=3.0) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       r2=0;
        
    }

}

let rating_2_3 = document.getElementById("rating_2_3");
rating_2_3.onclick = rating2;

//  3-4

let r3=0;
function rating3(){
    
    if(r3==0){
        r3++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].Rating>=3.1) && (productdata[i].Rating<=4.0) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       r3=0;
        
    }

}

let rating_3_4 = document.getElementById("rating_3_4");
rating_3_4.onclick = rating3;

//  4-5

let r4=0;
function rating4(){
    
    if(r4==0){
        r4++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if((productdata[i].Rating>=4.1) && (productdata[i].Rating<=4.9) ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       r4=0;
        
    }

}

let rating_4_5 = document.getElementById("rating_4_5");
rating_4_5.onclick = rating4;

//  5

let r5=0;
function rating5(){
    
    if(r5==0){
        r5++;
        // console.log("upto 20")
    // console.log(data.length)
    var arr=[];
    for(var i=0;i<productdata.length;i++){
        if(productdata[i].Rating == 5.0 ){
            arr.push(productdata[i])
        }
    }
    showProducts(arr)
    arr=[]
    }else{
        
        showProducts(productdata)
       r5=0;
        
    }

}

let rating_5 = document.getElementById("rating_5");
rating_5.onclick = rating5;






















let brand_logo = document.getElementById("brand_logo");
brand_logo.addEventListener("click",function(){
    window.location.href = "../index.html"
})