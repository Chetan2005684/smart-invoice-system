let subtotal = 0;

window.addItem = function () {
    let name = document.getElementById("itemName").value.trim();
    let price = parseFloat(document.getElementById("itemPrice").value);
    let qty = parseInt(document.getElementById("itemQty").value);

    if (!name || isNaN(price) || isNaN(qty)) {
        alert("Enter valid details");
        return;
    }

    let total = price * qty;
    subtotal += total;

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${qty}</td>
        <td>${total}</td>
        <td><button onclick="deleteItem(this, ${total})">Delete</button></td>
    `;

    document.getElementById("invoiceBody").appendChild(row);

    updateTotals();

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "";
};

window.deleteItem = function (btn, amount) {
    btn.parentElement.parentElement.remove();
    subtotal -= amount;
    updateTotals();
};

function updateTotals() {
    document.getElementById("subtotal").innerText = subtotal;

    let tax = subtotal * 0.18;
    document.getElementById("tax").innerText = tax;

    document.getElementById("total").innerText = subtotal + tax;
}

window.generateInvoice = function () {
    alert("Invoice Generated!");
};