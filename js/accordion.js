  

let openAccordion = null;

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.arrow-icon');

    // Close the currently open accordion if it's not the one being clicked
    if (openAccordion && openAccordion !== element) {
        const openContent = openAccordion.nextElementSibling;
        const openIcon = openAccordion.querySelector('.arrow-icon');
        openContent.style.maxHeight = null;
        openContent.style.paddingBottom = null; // Remove extra space
        openContent.style.borderBottom = null; // Remove border
        openIcon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/down-arrow.svg'; // Reset to down arrow
        openAccordion.classList.remove('active');
    }

    // Toggle the clicked accordion
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingBottom = null; // Remove extra space
        content.style.borderBottom = null;
        icon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/down-arrow.svg';
        openAccordion = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingBottom = "16px"
        content.style.borderBottom = "1px solid #323233"; // Add border when active
        icon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/down-arrow.svg'; // Change to up arrow
        openAccordion = element;
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
        openContent.style.paddingBottom = null;
        openContent.style.borderBottom = null;
        openIcon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/plus-icon.svg';
        openFaqAccordion.classList.remove('active');
    }

    // Toggle the clicked FAQ accordion
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.paddingBottom = null;
        content.style.borderBottom = null;
        icon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/plus-icon.svg';
        openFaqAccordion = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingBottom = "16px"
        content.style.borderBottom = "1px solid #323233"; // Add border when active
        icon.src = 'https://cdn.famekeeda.com/assets/service-pages_assets/instagram/minus-icon.svg';
        openFaqAccordion = element;
    }

    element.classList.toggle('active');
}