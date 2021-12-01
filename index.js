const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
const max_images = 6;
// Set default image on page

let base_img = document.querySelector(".image");
base_img.src = images[0]

let current_img = 0;
var last_bubble = 0;

// Left side bar

let prev_side_bar = document.querySelector('.previous.side-bar')
prev_side_bar.addEventListener('click', function(e) {
    moveBubble(-1)
})

// Right side bar

let next_side_bar = document.querySelector('.next.side-bar')
next_side_bar.addEventListener('click', function(e) {
    moveBubble(+1)
})

// Bubble selection

let click_bubbles = document.querySelectorAll('.bubble')
click_bubbles[last_bubble].textContent = '●';

for (i=0; i < max_images; i++)
    click_bubbles[i].addEventListener('click', function(e) 
    {
        //console.log("CI = " + current_img + "LastBub=" + last_bubble)

        current_img = e.target.id
        
        base_img.src = images[current_img]

        click_bubbles[last_bubble].textContent = '○';
        e.target.textContent = '●';

        last_bubble = e.target.id;
    })




function getImageNumber(img_num) {
    if (img_num < 0)
        return (max_images - 1)
            else
        return (img_num % max_images)
}

function moveBubble(offset) {
    current_img = getImageNumber(current_img + 1);

    base_img.src = images[current_img]

    click_bubbles[last_bubble].textContent = '○';

    let new_bubble = getImageNumber(last_bubble + offset);
    click_bubbles[new_bubble].textContent = '●';

    last_bubble = new_bubble;
}