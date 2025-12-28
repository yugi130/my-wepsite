let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let create = document.getElementById("create");

let mood = "create";
let gg;

function getTotle() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;

    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = " #f20101a9";
  }
}

let data;
if (localStorage.product != null) {
  data = JSON.parse(localStorage.product);
} else {
  data = [];
}

create.onclick = function () {
  let newp = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value.toLowerCase(),
  };

  if(title.value != ""&&count.value<=100&&price.value!=""&&category.value!=""){
  if (mood === "create") {
    if (newp.count > 1) {
      for (let i = 0; i < newp.count; i++) {
        data.push(newp);
      }
    } else {
      data.push(newp);
    }
  } else {
    data[gg] = newp;
    mood = "create";
    create.innerHTML = "create";
    count.style.display = "block";
  }
   cleardata();
  }
  localStorage.setItem("product", JSON.stringify(data));

  showData();
};

function cleardata() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  count.value = "";
  category.value = "";
  total.innerHTML = "";
}

function showData() {
  getTotle();
  let table = "";
  for (let i = 0; i < data.length; i++) {
    table += `
<tr>
   <td>${i+1}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].taxes}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].category}</td>
    <td><button onclick="bupdate(${i})" id="update">Update</button></td>
    <td><button onclick="deletData(${i})" id="delet">Delet</button></td>
    </tr> 
`;
  }
  document.getElementById("tbody").innerHTML = table;
  let cler = document.getElementById("deletAll");
  if (data.length > 0) {
    cler.innerHTML = `
 <button onclick ="deletAll()" >Delet All(${data.length})</button>
 `;
  } else {
    cler.innerHTML = "";
  }
}
showData();

function deletData(i) {
  data.splice(i, 1);
  localStorage.product = JSON.stringify(data);
  showData();
}

function deletAll() {
  localStorage.clear();
  data.splice(0);
  showData();
}

function bupdate(i) {
  title.value = data[i].title;
  price.value = data[i].price;
  taxes.value = data[i].taxes;
  ads.value = data[i].ads;
  getTotle();
  count.style.display = "none";
  category.value = data[i].category;
  discount.value = data[i].discount;
  create.innerHTML = "Update";
  mood = "update";
  gg = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

let searchMood = "title";
function getsearch(id) {
  let search = document.getElementById("search");
  if (id == "btitle") {
    searchMood = "title";
     
  } else 
    {
    searchMood = "Category";
    
  }
  search.placeholder = "search by "+searchMood;
  search.focus();
  search.value ="";
   showData();
}

function SD(value)
{
    let table = "";
if(searchMood == "title")
    {  
for (i = 0 ; i < data.length;i++)
{
if(data[i].title.includes(value.toLowerCase()))
    {
        table += `
<tr>
   <td>${i}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].taxes}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].category}</td>
    <td><button onclick="bupdate(${i})" id="update">Update</button></td>
    <td><button onclick="deletData(${i})" id="delet">Delet</button></td>
    </tr> 
`;
    }
}
    }
      else{
for (i = 0 ; i < data.length;i++)
{
if(data[i].category.includes(value.toLowerCase()))
    {
        table += `
<tr>
   <td>${i}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].taxes}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].category}</td>
    <td><button onclick="bupdate(${i})" id="update">Update</button></td>
    <td><button onclick="deletData(${i})" id="delet">Delet</button></td>
    </tr> 
`;
    }
}

    }
    document.getElementById("tbody").innerHTML = table;
}
//cleadn data
     
