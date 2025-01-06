        class InfiniteSlider {
            constructor() {
                this.sliderTrack = document.querySelector('.slider-track');
                this.scrollSpeed = 2; // Increased speed for better flow
                this.currentScroll = 0;
                
                this.init();
                this.handleResize();

                // Handle window resize
                window.addEventListener('resize', () => this.handleResize());
            }

            init() {
                // Clone all initial cards for seamless scrolling
                const initialCards = Array.from(this.sliderTrack.children);
                initialCards.forEach(card => {
                    const clone = card.cloneNode(true);
                    this.sliderTrack.appendChild(clone);
                });

                // Start animation
                this.animate();

                // Handle mouse interactions
                this.sliderTrack.addEventListener('mouseenter', () => this.scrollSpeed = 0);
                this.sliderTrack.addEventListener('mouseleave', () => this.scrollSpeed = 2);
            }

            handleResize() {
                // Update card widths if needed
                this.cardWidth = this.sliderTrack.children[0].offsetWidth;
            }

            animate() {
                const gap = 30; // Match the CSS gap
                const totalWidth = this.cardWidth + gap;

                this.currentScroll -= this.scrollSpeed;
                
                // Reset position when we've scrolled the width of one card
                if (Math.abs(this.currentScroll) >= totalWidth) {
                    // Move the first card to the end
                    const firstCard = this.sliderTrack.children[0];
                    this.sliderTrack.appendChild(firstCard);
                    this.currentScroll += totalWidth;
                }

                this.sliderTrack.style.transform = `translateX(${this.currentScroll}px)`;
                requestAnimationFrame(() => this.animate());
            }
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            new InfiniteSlider();
        });