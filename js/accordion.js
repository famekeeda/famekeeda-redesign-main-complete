function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.arrow-icon');
  
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Reset to down arrow
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.src = '/assets/service-pages_assets/instagram/down-arrow.svg'; // Change to up arrow
    }
  
    element.classList.toggle('active');
  }
  
  function togglefaqAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.plus-icon');
  
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.src = '/assets/service-pages_assets/instagram/plus-icon.svg';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.src = '/assets/service-pages_assets/instagram/minus-icon.svg';
    }
  
    element.classList.toggle('active');
  }
  