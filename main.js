
const products = [
    { id: 1, name: "Premium Basmati Rice", price: "₹1500 26Kg", img: "./basmati.jpeg" },
    { id: 2, name: "Organic Brown Rice", price: "₹1200 25Kg", img: "./brownrice.jpeg" },
    { id: 3, name: "Sona Masoori Rice", price: "₹1000 30Kg", img: "./sonamasoori.jpeg" },
    { id: 4, name: "Jasmine Rice", price: "₹1800 25Kg", img: "./jasmine.jpeg"},
    
    { id: 5, name: "Kolam Rice", price: 
    "₹1100 27Kg", img: "./kolam.jpeg" },
    
    { id: 2, name: "Ponni Rice", price: 
    "₹1300 28Kg", img: "./ponni.jpeg" },
    
    { id: 3, name: "Red Matta Rice", price: "₹1400 30Kg", img: "./redmatta.jpeg" },
    
    { id: 4, name: "Black Rice", price: 
    "₹2000 20Kg", img: "./blackrice.jpeg" },
    
    { id: 5, name: "Jeera Samba Rice", price: "₹1600 25Kg", img: "./jeerasamba.jpeg" },
   
    { id: 6, name: "Wild Rice", price: 
    "₹2200 18Kg", img: "./wildrice.jpeg" }
  ];
    
    
    
    


// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! 😊");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));