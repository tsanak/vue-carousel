Vue.component('carousel', {
    template: `
        <div class="card-carousel">
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
            return this.images[this.activeImage].big;
        }
    },
    data() {
        return {
            //Index of the active image
            activeImage: 0
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
        }
    },
    created() {
        //Check if startingImage prop was given and if the index is inside the images array bounds
        if(this.startingImage 
            && this.startingImage >= 0
            && this.startingImage < this.images.length) {
            this.activeImage = this.startingImage;
        }
    },
    props: ['startingImage', 'images']
})