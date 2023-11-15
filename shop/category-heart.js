
//'.category-item-heart'
let icons = document.querySelectorAll('.category-item-heart');
let heart = [];
console.log("CODE LOADED")
icons.forEach((element, idx) => {
    heart[idx] = 0;
    element.style.opacity = "35%";
    element.addEventListener('click', e => {
        loved(element, idx);
    })
});


function loved(e, idx) {
    if (heart[idx] == 0) {
        e.style.backgroundImage = "url('Icons/heart-fill.svg')";
        heart[idx] = 1;
        e.style.opacity = "100%";
    }
    else if (heart[idx] == 1) {
        e.style.backgroundImage = "url('Icons/heart.svg')";
        heart[idx] = 0;
        e.style.opacity = "35%";
    }
}