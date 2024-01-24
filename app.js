const search = () => {// Function to perform the search based on the user input 
    const searchbox = document.getElementById("search-item").value.toUpperCase();//Get the value of the search input and convert it to uppercase for case-insensitive matching
    const storeitems = document.getElementById("product-list");// Get the container element that holds the list of products
    const product = document.querySelectorAll(".product");// Get all elements with the class "product" (assumed to be individual product items)
    const pname = document.getElementsByTagName("h2");// Get all h2 elements (assumed to be the product names)

    
    for (var i = 0; i < pname.length; i++) {              // Loop through each product name element
        let match = product[i].getElementsByTagName('h2')[0];       // Get the first h2 element within each product (assuming there is only one h2 per product)

        if (match) {                   // Check if the h2 element is found
            let textvalue = match.textContent || match.innerHTML;    // Get the text content or inner HTML of the h2 element
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {  // Check if the search query is present in the product name
                product[i].style.display = "";       // If there is a match, display the product
            } else {
                
                product[i].style.display = "none";          // If there is no match, hide the product
            }
        }
    }
}

const myButton = document.getElementById("clickme");
myButton.addEventListener("click", doSomthing);


function doSomthing(){
    alert("button click");

}
