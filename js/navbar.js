document.addEventListener('DOMContentLoaded', function () {
    // Get the Services dropdown elements
    const dropBtnServices = document.querySelector('.dropdown:nth-child(3) .dropbtn');
    const dropdownContainerServices = document.querySelector('.dropdown:nth-child(3) .drop-down-container');
    const dropBtnSvgServices = document.querySelector('.dropdown:nth-child(3) .dropbtn-svg');

    // Get the Platforms dropdown elements
    const dropBtnPlatforms = document.querySelector('.dropdown:nth-child(4) .dropbtn');
    const dropdownContainerPlatforms = document.querySelector('.dropdown:nth-child(4) .drop-down-container');
    const dropBtnSvgPlatforms = document.querySelector('.dropdown:nth-child(4) .dropbtn-svg');

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdownContainerServices.classList.remove('show-dropdown');
        dropBtnSvgServices.classList.remove('rotate-svg');
        dropdownContainerPlatforms.classList.remove('show-dropdown');
        dropBtnSvgPlatforms.classList.remove('rotate-svg');
    }

    // Toggle the Services dropdown and rotate icon on button click
    dropBtnServices.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (dropdownContainerServices.classList.contains('show-dropdown')) {
            closeAllDropdowns(); // Close all dropdowns if the Services dropdown is already open
        } else {
            closeAllDropdowns(); // Close all dropdowns before opening the new one
            dropdownContainerServices.classList.add('show-dropdown');
            dropBtnSvgServices.classList.add('rotate-svg');
        }
    });

    // Toggle the Platforms dropdown and rotate icon on button click
    dropBtnPlatforms.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (dropdownContainerPlatforms.classList.contains('show-dropdown')) {
            closeAllDropdowns(); // Close all dropdowns if the Platforms dropdown is already open
        } else {
            closeAllDropdowns(); // Close all dropdowns before opening the new one
            dropdownContainerPlatforms.classList.add('show-dropdown');
            dropBtnSvgPlatforms.classList.add('rotate-svg');
        }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdownContainerServices.contains(event.target) && !dropBtnServices.contains(event.target) &&
            !dropdownContainerPlatforms.contains(event.target) && !dropBtnPlatforms.contains(event.target)) {
            closeAllDropdowns();
        }
    });

    // Toggle the mobile menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active'); // Toggle the active state of the hamburger icon
        nav.classList.toggle('show-nav'); // Toggle visibility of the navigation menu
    });
});