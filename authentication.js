function signupfunction(){
    var username = document.getElementById('SignUpUsername').value;
    var password = document.getElementById('SignUpPassword').value;
    var email = document.getElementById('SignUpEmail').value;
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var existinguser = users.find(x => x.username === username);
    var buttonsignup  = document.getElementById('signupstyle');
  

    if (email.trim() === ''){
   alert('Please input a valid email.');
   return;
    }
    if (email.toLowerCase().endsWith('@gmail.com')){
       
    } else {
        alert('Email should end with "@gmail.com".' );
        return;
    }
    if (username.trim() === ''){
        alert('Please input a valid username.' );
        return;
    }
    if (password.trim() === ''){
        alert('Please input a valid password.' );
        return;
    }
   
    if (existinguser){
        alert("User already Exist.");
    } else {
       
        var newUser = {username, password, email };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Sign up succesful!");
        window.location.href = 'login.html';
        
        var userData = {
            username: username,
            email: email,
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
    }


}

function loginfunction(){
    var username = document.getElementById('LogInUsername').value;
    var password = document.getElementById('LogInPassword').value;
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(e => e.username === username);
    

    if (username.trim() === ''){
        alert('Please input a valid username.');
        return;
    }
    if (password.trim() === ''){
        alert('Please input a password.');
        return;
    }
if (!user){
    alert('User does not exist.');
} else {

    var userData = {
        username: user.username,
        email: user.email,
    };
    localStorage.setItem('currentUser', JSON.stringify(userData));
    if (user.password === password){
        window.location.href = 'index.html';
    } else {
        alert('incorrect password.');
    }
}
}
function getLoggedInUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logout(){
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
window.onload = function() {
    var currentUser = getLoggedInUser();
    var currentPage = window.localStorage.pathname;
    if (!currentUser && currentPage !== '/signup.html'){
        window.location.href = 'login.html';
    }
};

let cartItems = [];

function addProductToCart(id, img, name, price, stock, quantity){
    if (localStorage.getItem('carts')){
        var existingCartItems = JSON.parse(localStorage.getItem('carts'));
        cartItems = [...existingCartItems];
    }

    var user = getLoggedInUser();
    cartItems.push({
        id: id,
        userId: user.id,
        thumbnail: img,
        title: name,
        price: price,
        stock: stock,
        quantity: quantity,


    });
    localStorage.setItem('carts', JSON.stringify(cartItems));
}
