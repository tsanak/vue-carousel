# Vue carousel
## Simple vue component that outputs an infinite carousel
### built with [Vue.js](https://vuejs.org/ "Vue's Homepage") and [Bulma](https://bulma.io/ "Bulma's Homepage")
# Preview
![vue carousel](https://i.imgur.com/SPB4hcL.gif "Vue carousel in action")

# Props
1. images (required): Accepts array of objects.
2. starting-image (optional): Accepts the index of the image that the carousel starts from 
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
You can see an example in both index.html and component.html
### Steps
1. include vue.js
2. include the carousel.js
3. create the images array
4. reference the carousel in your html 
```html
<!-- Example -->
<carousel
    :starting-image="2"
    :images="images"
></carousel>
```

You can also find a post I've written explaining the process on [dev.to](https://dev.to/tsanak/building-an-image-carousel-with-vuejs--cjp "Vue carousel post")