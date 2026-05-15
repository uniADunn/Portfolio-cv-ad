
const nav = document.querySelector('nav');// Select the navigation element
const divLinks = nav.querySelectorAll('div')//get all the divs in the nav element
// Add click event listeners to each div in the navigation
divLinks.forEach(div => {
    div.addEventListener('click', () => {
        // get the link inside the clicked div and navigate to it
        const link = div.querySelector('a');
        // Check if the link exists before trying to navigate
        if(link){
            // Navigate to the link's href
            window.location.href = link.href;
        }
        // If no link is found, log a warning (optional)
        else{
            console.warn('No link found in the clicked div.');
        }
    });
});