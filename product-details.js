// Fonctionnalité de filtre des produits
function filterProducts(gender) {
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        if (gender === 'all' || produit.dataset.gender === gender) {
            produit.style.display = 'block';
        } else {
            produit.style.display = 'none';
        }
    });
}

// Fonctionnalité de recherche (peut être développée)
document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const produits = document.querySelectorAll('.produit');
    produits.forEach(produit => {
        const name = produit.dataset.name.toLowerCase();
        if (name.includes(input)) {
            produit.style.display = 'block';
        } else {
            produit.style.display = 'none';
        }
    });
});

