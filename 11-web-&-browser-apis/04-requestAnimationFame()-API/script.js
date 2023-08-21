const image = document.querySelector('img')

let start;
let done = false;

function step(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    const elepsed = timestamp - start;
    if (elepsed > 2000) {
        done = true;
    }

    if(done){
        return;
    }
image.style.transform = `translateX(${elepsed / 20}px) rotate(${elepsed / 20}deg)`;

    requestAnimationFrame(step);
}
requestAnimationFrame(step);