/*function of sliding ads*/


var images = ['imgcard/frag.jpg', 'imgcard/ABOUT-US1.jpg', 'imgcard/ww.jpg', 'imgcard/Apple_Macbook_Pro_2021_10_19_17_09_32.jpg', 'imgcard/gh-best-skincare-products-6557978b58b57.png', ];
var imageElement = document.getElementById('image');
var nextBtn = document.getElementById('nad');
let currentimg = 0;
function updateImage(){
    imageElement.src = images[currentimg];
}
function nextads(){
    currentimg++;

    if (currentimg >= images.length){
        currentimg = 0;
    }

    updateImage();
}

function backads() {
    currentimg--;

    if (currentimg < 0) {
        currentimg = images.length - 1;
    }

    updateImage();
}
/*function of slidingads-close*/

// menu function //
function menufunction(){
    var menuContainer = document.getElementById('menucon');

    if (menuContainer.style.visibility === 'visible'){
        menuContainer.style.visibility = 'hidden';
    } else{
        menuContainer.style.visibility = 'visible';
    }
}
//menufunctuin-close/
//featured 1//
function featured1(){
    
}
// featured1//
  
// function of cart function //

function cartFunction(){
   
 var cartIcon = document.querySelector('#cart i');
 if (cartIcon.classList.contains('bx-cart')){
    cartIcon.classList.remove('bx-cart');
    cartIcon.classList.add('bxs-cart');
 } else {
    cartIcon.classList.remove('bxs-cart');
    cartIcon.classList.add('bx-cart');
 }
    var cartContainer = document.getElementById('cartcon');
    if(cartContainer.style.display === 'block'){
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
}

//function of cart function//
// featured1//

    var images1 = ['imgcard/ph-11134207-7qukx-lgnjnjg8t7mub4.jpg', 'imgcard/swat1.jpg', 'imgcard/swat2.jpg', 'imgcard/swat3.jpg', 'imgcard/swat4.jpg', ];
    var imageElement1 = document.getElementById('image1');
    var nextarrow1 = document.getElementById('f1arrow');
    let currentImg1 = 0;

function updateImage1(){
  imageElement1.src = images1[currentImg1];
}
function f1arrow() {
    currentImg1++;
    if (currentImg1 >= images1.length) {
        currentImg1 = 0;
    }
    updateImage1();
}

function f1arrowback(){
    currentImg1--;
    if (currentImg1 < 0){
        currentImg1 = images1.length - 1;
    }
    updateImage1();
}








function featured1(){
    var featured1 = document.getElementById('featured1');
    var overflow = document.getElementById('overflow');

    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
    } else {
        overflow.style.display = 'block';
    }

    if (featured1.style.display === 'none'){
        featured1.style.display = 'block';
    } else {
        featured1.style.display = 'block';
    }
}

function cancelfeatured1(){
    var featured1 = document.getElementById('featured1');
   var overflow = document.getElementById('overflow');
    featured1.style.display = 'none';
    overflow.style.display = 'none';
}

// ffeatured1-close//

// array//
let shoppingCart = [];
//done//

//fetch////
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    var products = data.products;
    var mainshopContainer = document.getElementById('mainshopContainer');

    products.forEach(product => {
        var productDiv = document.createElement('div');
        productDiv.className = 'mainshopimgbox';

        // Add click event listener to each product
        productDiv.addEventListener('click', () => {
            handleProductClick(product);
        });

        var shopCategory = document.createElement('div');
        shopCategory.className = 'spanCategory';
        shopCategory.innerHTML = `<span><i class='bx bx-purchase-tag' ></i>${product.category}</span>`

        productDiv.appendChild(shopCategory);

        var mainshopdescription = document.createElement('div');
        mainshopdescription.className = 'mainshopdescription';
        mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
        
        var discountedPrice = document.createElement('div');
        discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`;

        var productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        productDiv.appendChild(discountedPrice);
        productDiv.appendChild(mainshopdescription);
        productDiv.appendChild(productImage);
       
        mainshopContainer.appendChild(productDiv);
    });
})
.catch(error => {
    console.error('Error fetching data: ', error);
});

// Function to handle product click event
function handleProductClick(product) {
    var mainProductContainer = document.getElementById('mainProductContainer');
    var overflow = document.getElementById('overflow');

    // Display the container and overlay
    mainProductContainer.style.display = 'block';
    overflow.style.display = 'block';




    
    // Clear previous image (if any)
    var productImage = mainProductContainer.querySelector('img');
    if (productImage) {
        productImage.remove();
    }

    mainProductContainer.innerHTML = '';
    productImage = product.images;

    let currentImgIndex = 0;

   var imageElement = document.createElement('img');
   imageElement.src = productImage[currentImgIndex];
   imageElement.alt = product.title;
   imageElement.style.height = '300px';
   imageElement.style.marginTop = '80px';
   imageElement.style.marginLeft = '30px';
   imageElement.style.width = '50%';
   imageElement.style.objectFit = 'contain';
  
  
   mainProductContainer.appendChild(imageElement);

   var nextBtn = document.createElement('button');
   nextBtn.textContent = 'Next';
   nextBtn.id = 'nextBtnNew';
   nextBtn.innerHTML = `<i class='bx bx-right-arrow-alt'></i>`;
   nextBtn.addEventListener('click', nextImage);
   mainProductContainer.appendChild(nextBtn);

   // Create and append the back button
   var backButton = document.createElement('button');
   backButton.textContent = 'Back';
   backButton.id = 'backBtnNew';
   backButton.innerHTML = `<i class='bx bx-left-arrow-alt' ></i>`;
   backButton.addEventListener('click', previousImage);
   mainProductContainer.appendChild(backButton);

   // Function to update the current image
   function updateImage() {
       imageElement.src = productImage[currentImgIndex];
   }

   // Function to handle next image button click
   function nextImage() {
       currentImgIndex++;
       if (currentImgIndex >= productImage.length) {
           currentImgIndex = 0;
       }
       updateImage();
   }

   // Function to handle previous image button click
   function previousImage() {
       currentImgIndex--;
       if (currentImgIndex < 0) {
           currentImgIndex = productImage.length - 1;
       }
       updateImage();



   }
   var container = document.createElement('div');
   container.className = 'containerOfThings';
   mainProductContainer.appendChild(container);
   var h1 = document.createElement('h1');
   h1.textContent = product.title;
   h1.className = 'title';
  container.appendChild(h1);
   var ratings = document.createElement('div');
   var brand = document.createElement('div');
   brand.className = 'brand';
   brand.innerHTML = `<h1>${product.brand}<i class='bx bx-check' ></i><h1> `
  container.appendChild(brand);
   var description = document.createElement('p');
   description.className = 'description';
   description.textContent = product.description;
  container.appendChild(description);
   var categoryy = document.createElement('div');
   categoryy.innerHTML = `<h1><i class='bx bx-purchase-tag'></i>${product.category}</h1>`;
   categoryy.className = 'category';
  container.appendChild(categoryy);
   ratings.className = 'ratings';
   ratings.innerHTML = `<span><i class='bx bxs-star' ></i>${product.rating}</span>`;
  container.appendChild(ratings);
   var prices = document.createElement('div');
  prices.innerHTML = `<h1>₱${product.price}</h1>`;
   prices.className = 'prices';
  container.appendChild(prices);
  var stock = document.createElement('div');
  stock.innerHTML = `<h2><i class='bx bx-package' ></i>${product.stock} in stock</h2>`;
  stock.className = 'stock';
  container.appendChild(stock);
var wishlist = document.createElement('div');
wishlist.innerHTML = `<button><i class='bx bx-heart' ></i> Add to wishlist</button>`;
wishlist.className = 'wishlistBtne';
container.appendChild(wishlist);
   var addToCart = document.createElement('button');
   addToCart.onclick = function(){
    cartAddFunction(product);
   }
  
  addToCart.innerHTML = `<h2><i class='bx bx-cart-add' ></i> Add to cart</h2>`;
   addToCart.className = 'cartBtn';
   mainProductContainer.appendChild(addToCart);
   
   

   var xBtn = document.createElement('button');

   xBtn.id = 'eliminate';
   xBtn.textContent = 'Cancel';
   xBtn.addEventListener('click', eliminate);
   
   mainProductContainer.appendChild(xBtn);

   
}
function cartAddFunction(product) {
    var list = document.getElementById('list');
    var addtocart = document.querySelector('.cartBtn');
    let arrayOfProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (addtocart.classList.contains('addedToCart')) {
        // Product is already in cart, so remove it
        var listItemToRemove = document.getElementById(product.id);
        list.removeChild(listItemToRemove);
        addtocart.innerHTML = `<h2>Add to cart</h2>`;
        addtocart.classList.remove('addedToCart');
        
        localStorage.removeItem(product.id);
    } else {
        // Product is not in cart, so add it
        arrayOfProducts.push(product.id);
        console.log(`Product succesfully added ${product.id}`);
        var li = document.createElement('li');
        li.id = product.id; // Set unique ID for the list item
        var productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        li.appendChild(productImage);
        list.appendChild(li);
        addtocart.innerHTML = `<h2>Remove from cart</h2>`;
        addtocart.classList.add('addedToCart');
    
        localStorage.setItem(product.id, JSON.stringify(product)); // Store product data in local storage
    }
}


function eliminate() {
    var mainProductContainer = document.getElementById('mainProductContainer');
    var overflow = document.getElementById('overflow');

    mainProductContainer.style.display = 'none';
    overflow.style.display = 'none';
}


//done

// fetch categories//

fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(categories => {
       
        categories.forEach(category => {
         
            const categoryElement = document.createElement('div');
            categoryElement.id = 'categoryele';
         
         
            var ulcategory = document.createElement('ul');
            
            var licategory = document.createElement('li');
            licategory.textContent = category;
            

            categoryElement.appendChild(ulcategory);

            categoryElement.appendChild(licategory);
            document.getElementById('navside').appendChild(categoryElement);

           
            categoryElement.addEventListener('click', () => {
            
                fetchItems(category);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
    });
//fetch categories//

document.getElementById('recommended').addEventListener('click', function(){
    fetchAllProducts();
    function fetchAllProducts(){
        fetchItems('');
    }
});
//feth product category//
function fetchItems(category){
    const url = category === '' ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${category}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (Array.isArray(data.products)){
                displayItems(data.products);
            } else {
                console.error(`Items array not found in the data for category '${category}' :`, data);
            }
        })
        .catch(error => {
            console.error('Error fetching items:', error);
        });





    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (Array.isArray(data.products)){
            displayItems(data.products);
        } else {
            console.error(`Items array not found in the data for category '${category}' :`, data);
        }
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });

  


}
// display categories items//
function displayItems(products){
    var mainshopContainer = document.getElementById('mainshopContainer');
    if (!mainshopContainer){
        console.error('Main shop container not found');
        return;
    }
    mainshopContainer.innerHTML = '';

     if (products.length === 0 ){
        console.log('No items found');
     } else {
        products.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.className = 'mainshopimgbox';
            var mainshopdescription = document.createElement('div');
            var categories = document.createElement('div');
            categories.className = 'spanCategory';
            categories.innerHTML = `<span><i class='bx bx-purchase-tag' ></i>${product.category}</span>`
            productDiv.appendChild(categories);
            mainshopdescription.className = 'mainshopdescription';
            mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
            var discountedPrice = document.createElement('div');
            productDiv.onclick = () => handleOnClickContainers();
            function handleOnClickContainers(){
                updateContainer();
                var mainProductCotaniner = document.getElementById('mainProductContainer');
                var overflow = document.getElementById('overflow');
                mainProductCotaniner.style.display = 'block';
                overflow.style.display = 'block';
                var imageMain = document.createElement('img');
                imageMain.src = product.thumbnail;
                imageMain.className = product.id;
                imageMain.alt = product.title;
                mainProductCotaniner.appendChild(imageMain);
            }
            discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`
            productDiv.appendChild(discountedPrice);
            var productImage = new Image();
            productImage.src = product.thumbnail;
            productImage.alt = product.title;
            productDiv.appendChild(mainshopdescription);
            productDiv.appendChild(productImage);
            mainshopContainer.appendChild(productDiv);
        });
     }

    
}

// done//


//fgetch product category//
//done//

//fetch ratings//

//done //done//

// adding buttons to products//


//done//


//function of searchBar//

let products = [];

fetch('https://dummyjson.com/products/search?q=phone')
    .then(response => response.json())
    .then(data => {
        products = data.products;
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

function renderProducts(products) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    var searchInput = document.getElementById('searchinput').value;

   var inv = document.getElementById('invWrapper').style.display = searchInput !== '' ? 'block' : 'none';
    products.forEach(product => {
        const wrapperBox = document.createElement('div');
        wrapperBox.className = 'wrapperBox';

        const wrapperImg = document.createElement('div');
        wrapperImg.className = 'wrapperImg';

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.className = 'descriptionWrapper';

        const h1 = document.createElement('h1');
        h1.textContent = product.title;

        const p = document.createElement('p');
        p.textContent = `Price: ₱${product.price}`;

        descriptionWrapper.appendChild(h1);
        descriptionWrapper.appendChild(p);

        wrapperImg.appendChild(img);
        wrapperImg.appendChild(descriptionWrapper);

        wrapperBox.appendChild(wrapperImg);
        resultsContainer.appendChild(wrapperBox);
    });

    // Show the wrapper only when there are search results
  var productCount = products.length;
  var maxHeight = 400;
  var minHeight = 50;
  var heightIncrement = 150;

  let containerHeight = minHeight + heightIncrement * productCount;
  containerHeight = Math.min(containerHeight, maxHeight);
  resultsContainer.style.height = containerHeight + 'px';
}

function searchProducts() {
    const searchInput = document.getElementById('searchinput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

   

    const searchResults = products.filter(product => {
        return product.title.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput);
    });

    renderProducts(searchResults);
}
var searchInp = document.getElementById('searchinput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Call searchProducts function when Enter key is pressed
        searchProducts();
    }
});

//end//




// function of chatBot//

function chatBtn(){
    var chatBotContainer = document.getElementById('chatBotContainer');

   
    if (chatBotContainer.style.display === 'block'){
        chatBotContainer.style.display = 'none';
    } else {
        chatBotContainer.style.display = 'block';
    }

}


//first option//
let optionClicked = false;
function firstOption(){
    var chatBotContainer = document.getElementById('chatBotContainer');
   

      
    if (!optionClicked){
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = ' What do you need help with?';
        chatBotContainer.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(span);
        optionClicked = true;
    } else {
    
    }

    
  
    
}

// end//


// end//



