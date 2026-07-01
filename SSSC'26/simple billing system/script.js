// SIMPLE BILLING SYSTEM

// Customer Name
let customerName = prompt("Enter Customer Name:");
// Number of Products
let n = Number(prompt("Enter Number of Products:"));
let totalBill = 0;
let highestPrice = 0;
let highestProduct = "";

// for Products
for(let i = 1; i <= n; i++)
{
    let productName = prompt("Enter Product " + i + " Name:");
    let quantity = Number(prompt("Enter Quantity:"));
    let price = Number(prompt("Enter Price per Item:"));

    let amount = quantity * price;

    totalBill += amount;

    if(price > highestPrice)
    {
        highestPrice = price;
        highestProduct = productName;
    }

    document.write("<h3>Product " + i + "</h3>");
    document.write("Product Name : " + productName + "<br>");
    document.write("Quantity : " + quantity + "<br>");
    document.write("Price : ₹" + price + "<br>");
    document.write("Amount : ₹" + amount + "<br><br>");
}

// Discount
let discount = 0;

if(totalBill >= 5000)
{
    discount = totalBill * 0.20;
}
else if(totalBill >= 3000)
{
    discount = totalBill * 0.15;
}
else if(totalBill >= 1000)
{
    discount = totalBill * 0.10;
}
else
{
    discount = 0;
}

let finalBill = totalBill - discount;

// Payment Method
let payment = prompt("Enter Payment Method (Cash / UPI / Card)");

let message;

switch(payment)
{
    case "Cash":
        message = "Please pay at the cash counter.";
        break;

    case "UPI":
        message = "Payment successful through UPI.";
        break;

    case "Card":
        message = "Card payment successful.";
        break;

    default:
        message = "Invalid Payment Method.";
}

// Final Output
document.write("<hr>");

document.write("<h1>BILL RECEIPT</h1>");

document.write("<h2>Customer Name : " + customerName + "</h2>");

document.write("<b>Total Bill : </b> ₹" + totalBill + "<br>");
document.write("<b>Discount : </b> ₹" + discount + "<br>");
document.write("<b>Final Bill : </b> ₹" + finalBill + "<br><br>");

document.write("<b>Most Expensive Product : </b>" + highestProduct + " (₹" + highestPrice + ")<br><br>");

document.write("<b>Payment Method : </b>" + payment + "<br>");
document.write("<b>Message : </b>" + message);