import {Navbar} from "../Navbar/Navbar.js";
import {Footer} from "../Footer/footer.js";


let header = document.getElementById("header");
header.innerHTML = Navbar();

let footer = document.getElementById("footer");
footer.innerHTML = Footer();


let cart = JSON.parse(localStorage.getItem("cart"));
let size = localStorage.getItem("size");

let bag_item = localStorage.getItem("no_of_item");
console.log(bag_item)
let bag_items = document.getElementById("bag_items");
bag_items.innerHTML = bag_item;

let bag = document.getElementById("bag");
bag.onclick = function(){
  window.location.href = "../Cart/Cart.html"
}

// console.log(cart);
// console.log(size)
var subtotal = 0;
var srng = 0;
var c = 1;
var subTotal_amount = document.getElementById("subTotal_amount");

let cart_items = document.getElementById("cart_items");
function showProducts(){
cart.forEach((items)=>{
    // console.log(items)
      let items_main_div = document.createElement("div");
      items_main_div.id = "items_main_div";



      let image = document.createElement("img");
      image.src = items.Displayimages;

      let details_div = document.createElement("div");
      details_div.id = "details_div";
      let arrives = document.createElement("p");
      var d = new Date().toString();
// var index = d.lastIndexOf(':') +2
 let date = d.substring(0,15)
      arrives.innerHTML = "Arrives before " + date;

      let subTitel = document.createElement("p");
      subTitel.innerHTML = items.subTitle;
      subTitel.id = "subTitel";

      let Title = document.createElement("p");
      Title.innerHTML = items.Title;
      Title.id = "title"

      let prd_size = document.createElement("p");
      prd_size.innerHTML = "Size: " + size;
      prd_size.id = "prd_size"

    //   let price = document.createElement("p");

      let delivery_div = document.createElement("div");
      delivery_div.id = "delivery_div"
      let i = document.createElement("div");
      i.innerHTML = `<i class="fas fa-truck"></i>`;
      let delivery = document.createElement("p");
      delivery.innerHTML = "Delivery";

      delivery_div.append(i,delivery)

      let delivery_des = document.createElement("p");
      delivery_des.innerHTML = "International orders usually arrive within 5–13 business days. We'll give you delivery dates in checkout."
      delivery_des.id = "delivery_des";

      var remove_btn = document.createElement("button");
      remove_btn.innerHTML = "Remove";
      remove_btn.id = "remove_btn";
      
      remove_btn.onclick=function(){
        removetoCart(event,items)
      };

      details_div.append(arrives,subTitel,Title,prd_size,delivery_div,delivery_des,remove_btn);

      let quantity_div = document.createElement("div");
      quantity_div.id = "quantity_div";

      let minus = document.createElement("p");
      minus.innerHTML ="-" ;
      minus.id = "minus";

      let plus = document.createElement("p");
      plus.innerHTML ="+" ;
      plus.id = "plus"

      let qnt_num = document.createElement("p");
      qnt_num.innerHTML = "1";
      qnt_num.id = "qnt_num"

      quantity_div.append(minus,qnt_num,plus);

      let price_div = document.createElement("div");
      price_div.id = "price_div"

      srng += items.price;
      subTotal_amount.innerHTML = srng;

      price_div.innerHTML="$" + items.price;
      let hr = document.createElement("hr")

    //   
    plus.addEventListener("click", increassQuantirty);
        minus.addEventListener("click", decressQuantirty);

        // var price_div = document.createElement("p");

        var q = 1
        function increassQuantirty() {
            if(q >= 5){
                qnt_num.innerHTML = 5;
                price_div.innerHTML =  items.price * +qnt_num.innerHTML;
           
                plus.style.color = "#BDBDBD";

            } else {
                qnt_num.innerHTML = ++q;
                price_div.innerHTML =  items.price * +qnt_num.innerHTML;
                minus.style.color = "black";

                srng += items.price ;
                console.log(srng+" srng");
                
                subTotal_amount.innerHTML = srng;
                console.log(srng)

                // console.log(items.price * +qnt_num.innerHTML);

            }
        }

        // console.log(subtotal+ increassQuantirty());
        
       
        function decressQuantirty() {
            if (q <= 1) {
                qnt_num.innerHTML = 1;
                price_div.innerHTML =  items.price * +qnt_num.innerHTML;
                minus.style.color = "#BDBDBD";
                plus.style.color = "black";
                // price_div.innerHTML = "₹" + items.price * c;
            }
            else{
                qnt_num.innerHTML = --q;
               
                price_div.innerHTML =  items.price * +qnt_num.innerHTML;
                  subtotal = (Number(price_div.innerHTML) + subtotal)
                  console.log(subtotal, "decrease item");
                  plus.style.color = "black";

                  srng -= items.price;
                  console.log(items.price+" item price");

                  subTotal_amount.innerHTML = srng;
                //   total_amount.append(amount);

                }
        }
    // 
    price_div.innerHTML =  items.price * c;

      items_main_div.append(image,details_div,quantity_div,price_div);
      cart_items.append(hr,items_main_div)

});



function removetoCart(e, prod) {
    e.preventDefault();

    var newprods = cart.filter(function (p) {
      if (p != prod) {
        return p;
      }
    });
    localStorage.removeItem("cart");

    localStorage.setItem("cart", JSON.stringify(newprods));
    location.reload();
  }

  let Shopping_bag = document.getElementById("Shopping_bag");
Shopping_bag.innerHTML = "Shopping Bag " +"( " + cart.length + " )"
let no_of_item = localStorage.setItem("no_of_item",cart.length);
}

console.log(cart.length, "cartlen")
// let no_of_item = localStorage.setItem("no_of_item",cart.length);


showProducts();

let checkout_btn = document.getElementById("checkout_btn");
checkout_btn.onclick = function()
{
  if(localStorage.getItem("total_item_price")===null)
  {
      localStorage.setItem("total_item_price",JSON.stringify([]));
  }
  
  let total_item_price = JSON.parse(localStorage.getItem("total_item_price"));
  
  total_item_price.pop()
  total_item_price.push(srng);

  localStorage.setItem("total_item_price",JSON.stringify (total_item_price));
  
    window.location.href = "../Checkout/Checkout.html"
}

let brand_logo = document.getElementById("brand_logo");
brand_logo.addEventListener("click",function(){
    window.location.href = "../Index.html"
})