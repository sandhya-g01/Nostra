// pop-up
let popup = document.getElementById("pop-up")
let topclose = document.getElementById("topclose")
topclose.addEventListener("click", ()=> {
    popup.style.display="none"
})


// menu bar
let menuicon = document.getElementById("menuicon")
let sidebar = document.getElementById("sidebar")
let close = document.getElementById("close")
menuicon.addEventListener("click", ()=> {
    sidebar.style.right=0
})

close.addEventListener("click", ()=> {
    sidebar.style.right="-40%"
})


// search

// const products = document.getElementById("Products")
// const search = document.getElementById("search")
// const productlist = products.querySelectorAll(".grid > div")


//     search.addEventListener("keyup", (event) => {
//         let enteredValue = event.target.value.toUpperCase()

//         for (count = 0; count < productlist.length; count++) {
//             let productname = productlist[count].querySelector("h1").textContent.toUpperCase()
//             if(productname.indexOf(enteredValue)<0)
//             {
//                 productlist[count].style.display="none"
//             }else{
//                 productlist[count].style.display="block"
//             }
//         }
//     })




// checkbox

// const products = document.getElementById("Products");
// const search = document.getElementById("search");
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const productlist = products.querySelectorAll(".grid > div");

// function filterProducts() {
//     const searchValue = search.value.toUpperCase();

//     // Get all selected checkbox values
//     const selectedFilters = Array.from(checkboxes)
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.value.toUpperCase());

//     for (let i = 0; i < productlist.length; i++) {
//         const product = productlist[i];
//         const name = product.querySelector("h1").textContent.toUpperCase();

//         // Match search
//         const matchesSearch = name.includes(searchValue);

//         // Match filters
//         let matchesFilter = false;
//         if (selectedFilters.length === 0) {
//             matchesFilter = true; // no filters selected = match all
//         } else {
//             // Check if any filter word is in the name
//             matchesFilter = selectedFilters.some(filter => name.includes(filter));
//         }

//         // Final decision: must match both
//         if (matchesSearch && matchesFilter) {
//             product.style.display = "block";
//         } else {
//             product.style.display = "none";
//         }
//     }
// }

// // Attach event listeners
// search.addEventListener("keyup", filterProducts);
// checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterProducts));


// search and checkbox

const products = document.getElementById("Products");
const search = document.getElementById("search");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const productlist = products.querySelectorAll(".grid > div"); // product cards only

function filterProducts() {
    const searchValue = search.value.trim().toUpperCase();

    // Get all selected checkbox values
    const selectedFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.trim().toUpperCase());

    for (let i = 0; i < productlist.length; i++) {
        const product = productlist[i];
        const name = product.querySelector("h1").textContent.toUpperCase();

        // 1. Check search match
        const matchesSearch = name.includes(searchValue);

        // 2. Check checkbox filter match
        let matchesFilter = false;

        if (selectedFilters.length === 0) {
            matchesFilter = true; // no filters means match all
        } else {
            // check if any filter value is in the product name
            for (let j = 0; j < selectedFilters.length; j++) {
                if (name.includes(selectedFilters[j])) {
                    matchesFilter = true;
                    break;
                }
            }
        }

        // 3. Final decision
        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

// Attach search input listener
search.addEventListener("keyup", filterProducts);

// Attach listeners to all checkboxes
checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});