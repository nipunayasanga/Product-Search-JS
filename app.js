// Function to perform the search based on the user input
const search = () => {
    // Get the value of the search input and convert it to uppercase for case-insensitive matching
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    
    // Get the container element that holds the list of products
    const storeitems = document.getElementById("product-list");
    
    // Get all elements with the class "product" (assumed to be individual product items)
    const product = document.querySelectorAll(".product");
    
    // Get all h2 elements (assumed to be the product names)
    const pname = document.getElementsByTagName("h2");

    // Loop through each product name element
    for (var i = 0; i < pname.length; i++) {
        // Get the first h2 element within each product (assuming there is only one h2 per product)
        let match = product[i].getElementsByTagName('h2')[0];

        // Check if the h2 element is found
        if (match) {
            // Get the text content or inner HTML of the h2 element
            let textvalue = match.textContent || match.innerHTML;

            // Check if the search query is present in the product name
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                // If there is a match, display the product
                product[i].style.display = "";
            } else {
                // If there is no match, hide the product
                product[i].style.display = "none";
            }
        }
    }
}
