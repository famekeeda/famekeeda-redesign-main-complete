// function toggleAccordion(element) {
//     const content = element.nextElementSibling;
//     const icon = element.querySelector('.arrow-icon');
  
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//       icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Reset to down arrow
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Change to up arrow
//     }
  
//     element.classList.toggle('active');
//   }
  
//   function togglefaqAccordion(element) {
//     const content = element.nextElementSibling;
//     const icon = element.querySelector('.plus-icon');
  
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//       icon.src = '/assets/service-pages_assets/instagram/plus-icon.svg';
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       icon.src = '/assets/service-pages_assets/instagram/minus-icon.svg';
//     }
  
//     element.classList.toggle('active');
//   }
  

let openAccordion = null;

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.arrow-icon');

    // Close the currently open accordion if it's not the one being clicked
    if (openAccordion && openAccordion !== element) {
        const openContent = openAccordion.nextElementSibling;
        const openIcon = openAccordion.querySelector('.arrow-icon');
        openContent.style.maxHeight = null;
        openIcon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Reset to down arrow
        openAccordion.classList.remove('active');
    }

    // Toggle the clicked accordion
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Reset to down arrow
        openAccordion = null; // No accordion is open now
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Change to up arrow
        openAccordion = element; // Set this accordion as the open one
    }

    element.classList.toggle('active');
}

let openFaqAccordion = null;

function togglefaqAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.plus-icon');

    // Close the currently open FAQ accordion if it's not the one being clicked
    if (openFaqAccordion && openFaqAccordion !== element) {
        const openContent = openFaqAccordion.nextElementSibling;
        const openIcon = openFaqAccordion.querySelector('.plus-icon');
        openContent.style.maxHeight = null;
        openIcon.src = '/assets/service-pages_assets/instagram/plus-icon.svg';
        openFaqAccordion.classList.remove('active');
    }

    // Toggle the clicked FAQ accordion
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.src = '/assets/service-pages_assets/instagram/plus-icon.svg';
        openFaqAccordion = null; // No FAQ accordion is open now
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.src = '/assets/service-pages_assets/instagram/minus-icon.svg';
        openFaqAccordion = element; // Set this FAQ accordion as the open one
    }

    element.classList.toggle('active');
}