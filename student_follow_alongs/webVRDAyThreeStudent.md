# add image id to index
```html
  <div id="description-of-the-image"></div>
```

# create theLareCommonCode.js
``` javascript
  var vRViewPlayer = function(elementIdName, options) {
    console.log('Creating VR View Player');
    return new VRView.Player(elementIdName, options);
  }
```

# add your image to the image id
``` javascript
  var myPicture = vRViewPlayer('#description-of-the-image', {
    image: 'picture-name.jpg',
    is_stereo: false
  });
```

# add your image to the window when the page is done loading
``` javascript
  window.addEventListener('load', myPicture);
```

# create a hotspot and add it to your picture
``` javascript
  myPicture.on('ready', function(event) {
    myPicture.addHotspot('creating-hotspot-1', {
      pitch: 0,
      yaw: 0,
      radius: 0.10,
      distance: 1
    });
  });
```

# add event on clicks
``` javascript
  myPicture.on('click', function(event) {
    console.log('register all click events');

    if (event.id == 'creating-hotspot-1') {
      alert('i bEen clIKed!');
    }
  });
```

# change picture on click
``` javascript
  myPicture.on('click', function(event) {
    console.log('register all click events');

    if (event.id == 'creating-hotspot-1') {
      myPicture.setContent({
        image: 'some-other-picture.jpg',
        is_stereo: true
      });
    }
  });
```
