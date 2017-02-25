console.log('Loaded!');

// Change the text of main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New Friend';

// Move the Image

var img = document.getElementById('boom');

img.onclick = function() {
    img.style.marginLeft = '100px';
};