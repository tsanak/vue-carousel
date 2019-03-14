# Vue carousel
## Simple vue component that outputs an infinite carousel
### built with [Vue.js](https://vuejs.org/ "Vue's Homepage") and [Bulma](https://bulma.io/ "Bulma's Homepage")
# Preview
## Simple
![vue carousel](https://i.imgur.com/SPB4hcL.gif "Vue carousel in action")
## With auto sliding and progressbar
![vue carousel auto slide](https://i.imgur.com/shuNL8Z.gif "Vue carousel with auto slide")
# Props
1. **images** (required): Accepts array of objects.
2. **starting-image** (optional) [DEFAULT: 0]: Accepts the index of the image that the carousel starts from 
3. **auto-slide-interval** (optional): time in milliseconds to auto slide to the next image e.g. 1000, which is 1 second
4. **show-progress-bar** (optional) [DEFAULT: false]: boolean to show or hide the progressbar on top of the images. Needs to be used with **auto-slide-interval** prop.
```javascript 
    //Example of images
    let images = [
        { 
            id: '1',
            big: 'path to full image',
            thumb: 'path to thumbnail'
        },
        { 
            id: '2',
            big: 'path to full image',
            thumb: 'path to thumbnail'
        }
    ]
```

## Example usage
## Method 1
You can see an example in both index.html and component.html
### Steps
1. include vue.js
2. include the carousel.js
3. create the images array
4. reference the carousel in your html 

## Method 2
Using the component with vue cli as a single file component

> This method does **not** use Bulma
### Note 
To reference the Carousel with another name 
- change the name of the file (Carousel.vue) to whatever you want e.g. **MyCarousel.vue**
- change the `name` attribute inside the file to the previously given name e.g. **MyCarousel**
### Steps
1. Download Carousel.vue
2. Copy the file to your project
3. create the images array
4. ```javascript
    // import the Carousel.vue 
    import Carousel from 'path/to/Carousel.vue'
    <script>
        export default {
            name: 'OtherComponent',
            // Include the Carousel here
            components: {
                Carousel
            }
            ...
        }
    </script>
    ```
5. reference it in your template as shown in the examples below

```html
<!-- Example -->
<carousel
    :starting-image="2"
    :images="images"
></carousel>
```
```html
<!-- Example with auto slide-->
<carousel
    :starting-image="2"
    :images="images"
    :auto-slide-interval="1500"
></carousel>
```
```html
<!-- Example with auto slide and progressbar on top of the images-->
<carousel
    :starting-image="2"
    :images="images"
    :auto-slide-interval="1500"
    :show-progress-bar="true"
></carousel>
```

You can also find a post I've written explaining the process on [dev.to](https://dev.to/tsanak/building-an-image-carousel-with-vuejs--cjp "Vue carousel post")

## :memo: Features
If you want a new feature to be implemented you can create an issue with the label Feature.

## Contributing
Pull requests are more than welcome! :smiley: