let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click',() =>{
    
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    if(window.scrollY > 150){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

const searchBar = document.getElementById('searchBar');
fetch('https://dummyjson.com/products').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1="";
    let data2="";
    completedata.products.map(function(e) {
        data1+=`<div class="card">
        <h1 class="title">${e.title}</h1>
        <img src="${e.images[0]}" alt="img" class="images">
        <p>${e.description}</p>
        <p class="category">${e.category}</p>
        <p class="price">${e.price}</p>
        <button class="button">Add to Cart</button>
    </div>`
    data2+=`<datalist id="abc">
    <option>${e.title}<br><p>${e.price}</p></option>
    </datalist>`
    });  
    document.getElementById("cards").innerHTML=data1;
    document.getElementById("abc").innerHTML=data2;
    
}).catch((err)=>{
    console.log(err);
})

 