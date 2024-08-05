let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "<h1>Our Products</h1>";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `<h2>${product.name}</h2>
                                <p>${product.description}</p>
                                <p>$${product.price}</p>`;
        container.appendChild(productDiv);
    });
}

// Implement an event listener to trigger the display of products when the page loads.

document.addEventListener("DOMContentLoaded", displayProducts);



  