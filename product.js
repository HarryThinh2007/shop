//KHÔNG SỬ DỤNG BUTTON
const searchInput = document.getElementById("searchInput");
const elementContainer = document.getElementById("products");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const elements = elementContainer.getElementsByClassName("card_name");
    const cards = elementContainer.getElementsByClassName("card");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i].innerHTML;
        const name = element.toLowerCase();
        const hasNameMatch = name.includes(searchTerm);
        console.log(hasNameMatch)
        if (hasNameMatch) {
            cards[i].style.display = "block";
        } 
        else {
            cards[i].style.display = "none";
        }
    }
    console.log(elements)
});


//SỬ DỤNG BUTTON
// const searchInput = document.getElementById("searchInput");
// const elementContainer = document.getElementById("products");
// const searchButton = document.getElementById("searchbutton")

// searchButton.addEventListener("click", function(){
//     const searchTerm = searchInput.value.toLowerCase();
//     const elements = elementContainer.getElementsByClassName("card_name");
//     const cards = elementContainer.getElementsByClassName("card");

//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i].innerHTML;
//         const name = element.toLowerCase();
//         const hasNameMatch = name.includes(searchTerm);
//         console.log(hasNameMatch)
//         if (hasNameMatch) {
//             cards[i].style.display = "block";
//         } 
//         else {
//             cards[i].style.display = "none";
//         }
//     }
// })