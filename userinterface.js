
// Selecting Sections
const loader = document.getElementById('loader1');
const Shipping_Details = document.getElementById('Shipping_Details');
const Billing_Details = document.getElementById('Billing_Details');
const contact_details = document.getElementById('Contact_Details');
const order = document.getElementById('order');
const print = document.getElementById('print');
const product = document.getElementById('product');
const box_color = document.getElementById('box_color');
const menu = document.getElementById('menu');


// INPUTS 

const Length1 = document.getElementById('length1');
const Length2 = document.getElementById('length2');
const Length3 = document.getElementById('length3');
const Length4 = document.getElementById('length4');
const Length5 = document.getElementById('length5');

const Width1 = document.getElementById('width1');
const Width2 = document.getElementById('width2');
const Width3 = document.getElementById('width3');
const Width4 = document.getElementById('width4');
const Width5 = document.getElementById('width5');

const Height1 = document.getElementById('height1');
const Height2 = document.getElementById('height2');
const Height3 = document.getElementById('height3');
const Height4 = document.getElementById('height4');
const Height5 = document.getElementById('height5');

const Color = document.getElementById('color');
const uploadButton = document.getElementById('uploadButton');

const Quantity = document.getElementById('quantity');
const Budget = document.getElementById('budget');
const Delivery = document.getElementById('delivery');
const Sourcing = document.getElementById('sourcing');
const Company = document.getElementById('company');
const GST = document.getElementById('gst');


// From Variables 
var category = "";

var corrugatedBoxColor = "";

var numberOfSizes = "";
var length1 = "";
var length2 = "";
var length3 = "";
var length4 = "";
var length5 = "";

var width1 = "";
var width2 = "";
var width3 = "";
var width4 = "";
var width5 = "";

var height1 = "";
var height2 = "";
var height3 = "";
var height4 = "";
var height5 = "";

var printed = "";

var numberOfColor = Color.value;
var fileUpload = "";

var quantity=Quantity.addEventListener('input',()=>{quantity=Quantity.value;})
var budget=Budget.addEventListener('input',()=>{budget=Budget.value;})
var delivery =Delivery.addEventListener('input',()=>{delivery=Delivery.value;})
var sourcing =Sourcing.addEventListener('input',()=>{sourcing=Sourcing.value;})
var company= Company.addEventListener('input',()=>{company=Company.value;})
var gst=GST.addEventListener("input",()=>{gst=GST.value;})






// Event Listeners

Length1.addEventListener('input', () => { length1 = Length1.value; })
Length2.addEventListener('input', () => { length2 = Length2.value; })
Length3.addEventListener('input', () => { length3 = Length3.value; })
Length4.addEventListener('input', () => { length4 = Length4.value; })
Length5.addEventListener('input', () => { length5 = Length5.value; })

Width1.addEventListener('input', () => { width1 = Width1.value; })
Width2.addEventListener('input', () => { width2 = Width2.value; })
Width3.addEventListener('input', () => { width3 = Width3.value; })
Width4.addEventListener('input', () => { width4 = Width4.value; })
Width5.addEventListener('input', () => { width5 = Width5.value; })

Length1.addEventListener('input', () => { length1 = Length1.value; })
Length2.addEventListener('input', () => { length2 = Length2.value; })
Length3.addEventListener('input', () => { length3 = Length3.value; })
Length4.addEventListener('input', () => { length4 = Length4.value; })
Length5.addEventListener('input', () => { length5 = Length5.value; })

Color.addEventListener('input', () => { numberOfColor = Color.value; console.log(numberOfColor); });
uploadButton.addEventListener('click', () => {
    fileUpload = 'Yes';
})



//Product Page Button Controls
const print_var = document.getElementById('printed');
print_var.addEventListener('change', () => {
    if (print_var.value == "1") {
        print.style.display = "block";
        product.style.display = "none";
        printed = "yes";
        console.log(printed);
    }
    else {

        order.style.display = "block";
        product.style.display = "none";
        printed = "no";
        console.log(printed);

    }
})