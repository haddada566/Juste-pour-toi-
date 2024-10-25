let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Ajout des produits au panier
document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', function() {
        const product = {
            name: this.parentElement.querySelector('h3').textContent,
            price: parseInt(this.parentElement.dataset.price),
        };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Produit ajouté au panier !');
    });
});

// Affichage des produits dans le panier
if (document.getElementById('cart-items')) {
    const cartItems = document.getElementById('cart-items');
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - ${item.price}€`;
        cartItems.appendChild(div);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = `${total}€`;
}

// Fonction de recherche
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        const title = produit.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            produit.style.display = 'block'; // Afficher si le produit correspond
        } else {
            produit.style.display = 'none'; // Masquer sinon
        }
    });
});

// Fonction de filtrage par genre
document.getElementById('filter-women').addEventListener('click', function() {
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        produit.style.display = produit.dataset.gender === 'women' ? 'block' : 'none';
    });
});

document.getElementById('filter-men').addEventListener('click', function() {
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        produit.style.display = produit.dataset.gender === 'men' ? 'block' : 'none';
    });
});



