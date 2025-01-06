   // For Influencers Slider

   const slider = document.querySelector('.card-slider');
   const sliderWrapper = document.querySelector('.card-wrapper');

   function resetAnimation() {
       // Temporarily remove animation
       slider.style.animationName = 'none';
       slider.offsetHeight; // Trigger reflow
       
       // Restore animation
       slider.style.animationName = 'slide';
   }

   // Smooth restart mechanism
   slider.addEventListener('animationiteration', resetAnimation);