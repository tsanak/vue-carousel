Vue.component('carousel', {
    template: `
        <div class="card-carousel" @mouseover="stopTimer" @mouseleave="restartTimer">
            <div class="progressbar" v-if="autoSlideInterval && showProgressBar">
                <div :style="{width: progressBar + '%' }"></div>
            </div>
            <div class="card-img">
                <img :src="currentImage" alt="">
                <div class="actions">
                    <span @click="prevImage" class="prev">
                        <i class="fas fa-chevron-left"></i>
                    </span>
                    <span @click="nextImage" class="next">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </div>
            </div>
            <div class="thumbnails">
                <div 
                    v-for="(image, index) in  images"
                    :key="image.id"
                    :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                    @click="activateImage(index)"
                >
                    <img :src="image.thumb">
                </div>
            </div>
        </div>
    `,
    computed: {
        // currentImage gets called whenever activeImage changes
        // and is the reason why we don't have to worry about the 
        // big image getting updated
        currentImage() {
            this.timeLeft = this.autoSlideInterval;
            return this.images[this.activeImage].big;
        },
        progressBar() {
            //Calculate the width of the progressbar
            return 100 - (this.timeLeft/this.autoSlideInterval) * 100;
        }
    },
    data() {
        return {
            //Index of the active image
            activeImage: 0,
            //Hold the timeout, so we can clear it when it is needed
            autoSlideTimeout: null,
            //If the timer is stopped e.g. when hovering over the carousel
            stopSlider: false,
            //Hold the time left until changing to the next image
            timeLeft: 0,
            //Hold the interval so we can clear it when needed
            timerInterval: null,
            //Every 10ms decrease the timeLeft
            countdownInterval: 10
        }
    },
    methods: {
        // Go forward on the images array 
        // or go at the first image if you can't go forward
        nextImage() {
            var active = this.activeImage + 1;
            if(active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        // Go backwards on the images array 
        // or go at the last image
        prevImage() {
            var active = this.activeImage - 1;
            if(active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);            
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex;
        },
        //Wait until 'interval' and go to the next image;
        startTimer(interval) {
            if(interval && interval > 0 && !this.stopSlider) {
                var self = this;
                clearTimeout(this.autoSlideTimeout);
                this.autoSlideTimeout = setTimeout(function() {
                    self.nextImage();
                    self.startTimer(self.autoSlideInterval);
                }, interval);
            }
        },
        //Stop the timer when hovering over the carousel
        stopTimer() {
            clearTimeout(this.autoSlideTimeout);
            this.stopSlider = true;
            clearInterval(this.timerInterval);
        },
        //Restart the timer(with 'timeLeft') when leaving from the carousel
        restartTimer() {
            this.stopSlider = false;
            clearInterval(this.timerInterval);
            this.startCountdown();
            this.startTimer(this.timeLeft);
        },
        //Start countdown from 'autoSlideInterval' to 0
        startCountdown() {
            if(!this.showProgressBar) return;
            var self = this;
            this.timerInterval = setInterval(function() {
                self.timeLeft -= self.countdownInterval;
                if(self.timeLeft <= 0) {
                    self.timeLeft = self.autoSlideInterval;
                }
            }, this.countdownInterval);
        }
    },
    created() {
        //Check if startingImage prop was given and if the index is inside the images array bounds
        if(this.startingImage 
            && this.startingImage >= 0
            && this.startingImage < this.images.length) {
            this.activeImage = this.startingImage;
        }

        //Check if autoSlideInterval prop was given and if it is a positive number
        if(this.autoSlideInterval
            && this.autoSlideInterval > this.countdownInterval) {
            //Start the timer to go to the next image
            this.startTimer(this.autoSlideInterval);
            this.timeLeft = this.autoSlideInterval;
            //Start countdown to show the progressbar
            this.startCountdown();
        }
    },
    props: ['startingImage', 'images', 'autoSlideInterval', 'showProgressBar']
})