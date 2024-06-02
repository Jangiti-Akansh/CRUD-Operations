let products = [];

window.onload = function() {
    var prod = JSON.parse(localStorage.getItem('products'));
    if (prod) {
        products = prod;
        displayProducts();
    }
};

function addProduct() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var price = document.getElementById('price').value;
    var category = document.getElementById('category').value;
    var stockquantity = document.getElementById('stockquantity').value;
    var manufacturer = document.getElementById('manufacturer').value;
    var releasedate = document.getElementById('releasedate').value;
    var rating = document.getElementById('rating').value;

    if (!id || !name || !description || !price || !category || !stockquantity || !manufacturer || !releasedate || !rating) {
        alert("Fill in all the fields!");
    } else {
        var product = {
            id,
            name,
            description,
            price,
            category,
            stockquantity,
            manufacturer,
            releasedate,
            rating,
        };
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    }
}

function displayProducts() {
    var pl = document.getElementById('productli');
    pl.innerHTML = '';
    products.forEach(product => {
        var li = document.createElement('li');
        li.innerHTML = `
            ID: ${product.id}<br>
            Name: ${product.name} <br>
            Description: ${product.description} <br>
            Price: ${product.price} <br>
            Category: ${product.category} <br>
            Stock Quantity: ${product.stockquantity} <br>
            Manufacturer: ${product.manufacturer} <br>
            Release Date: ${product.releasedate} <br>
            Rating: ${product.rating}<br>
            <button onclick="deleteProduct('${product.id}')">Delete</button>
            <button onclick="updateOrEditProduct('${product.id}')">Update</button>
            <br>
        `;
        pl.appendChild(li);
    });
}

function updateOrEditProduct(id) {
    var idx = products.findIndex(product => product.id === id);
    if (idx !== -1) {
        var ogproduct = products[idx];
        var newid = prompt("Enter new ID:", ogproduct.id);
        while (!newid) {
            alert("Fill in the field!");
            newid = prompt("Enter new ID:", ogproduct.id);
        }
        var newname = prompt("Enter new name:", ogproduct.name);
        while (!newname) {
            alert("Fill in the field!");
            newname = prompt("Enter new name:", ogproduct.name);
        }
        var newdesc = prompt("Enter new description:", ogproduct.description);
        while (!newdesc) {
            alert("Fill in the field!");
            newdesc = prompt("Enter new description:", ogproduct.description);
        }
        var newprice = prompt("Enter new price:", ogproduct.price);
        while (!newprice) {
            alert("Fill in the field!");
            newprice = prompt("Enter new price:", ogproduct.price);
        }
        var newcate = prompt("Enter new Category:", ogproduct.category);
        while (!newcate) {
            alert("Fill in the field!");
            newcate = prompt("Enter new Category:", ogproduct.category);
        }
        var newstkquan = prompt("Enter new stockquantity:", ogproduct.stockquantity);
        while (!newstkquan) {
            alert("Fill in the field!");
            newstkquan = prompt("Enter new stockquantity:", ogproduct.stockquantity);
        }
        var newmanufac = prompt("Enter new manufacturer:", ogproduct.manufacturer);
        while (!newmanufac) {
            alert("Fill in the field!");
            newmanufac = prompt("Enter new manufacturer:", ogproduct.manufacturer);
        }
        var newreldate = prompt("Enter new Release Date:", ogproduct.releasedate);
        while (!newreldate) {
            alert("Fill in the field!");
            newreldate = prompt("Enter new Release Date:", ogproduct.releasedate);
        }
        var newrating = prompt("Enter new Product Rating:", ogproduct.rating);
        while (!newrating) {
            alert("Fill in the field!");
            newrating = prompt("Enter new Product Rating:", ogproduct.rating);
        }

        var produpd = {
            id: newid,
            name: newname,
            description: newdesc,
            price: newprice,
            category: newcate,
            stockquantity: newstkquan,
            manufacturer: newmanufac,
            releasedate: newreldate,
            rating: newrating,
        };
        products[idx] = produpd;
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
    }
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}
