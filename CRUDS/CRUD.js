let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count")    ;
let category = document.getElementById("category");
let create = document.getElementById("create");
 
function getTotle(){

    if(price.value != "" ){
        let result = (+price.value + +taxes.value +  +ads.value)- + discount.value;
        total.innerHTML = result;

        total.style.background="green";
    }else{
        total.innerHTML =  "";
          total.style.background=" #f20101a9";
    }
}
//function craere product 
let data;
if(localStorage.product != null){
    data= JSON.parse(localStorage.product);
}else{
    data= [];
}


 
create.onclick = function() { 
    let newp = {
        title : title.value,
        price: price.value,
        taxes : taxes.value,
        ads:ads.value,
        discount : discount.value,
        total:total.innerHTML,
        count : count.value,
        category: category.value,

    }
  data.push(newp)
  localStorage.setItem('product', JSON.stringify(data) )
}







































//ssve in localstorage
// clear inputs
//read
//coount
//upate
//delet
//serach
//clean datA
