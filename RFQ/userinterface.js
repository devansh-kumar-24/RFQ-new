
const print_var = document.getElementById('printed');
print_var.addEventListener('change',()=>{
if (print_var.value=="1"){
    
    document.getElementById('print').scrollIntoView();
}
else{

   document.getElementById('order').scrollIntoView(); 
}
})