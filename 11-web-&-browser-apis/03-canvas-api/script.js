// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.getElementById("canvas");
//     const ctx = canvas.getContext("2d");

//     ctx.fillStyle = "grey";
//     ctx.fillRect(10, 10, 150, 100);


// });

// I use ChatGpt because console show me error


document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const hfd = canvas.getContext("2d");
    const hgh = canvas.getContext("2d");
    const txt = canvas.getContext("2d");

    // Draw rectangle
    ctx.fillStyle = "grey";
    ctx.fillRect(10, 10, 150, 100);

    // Draw circle
    hfd.fillStyle = 'black'
    hfd.arc(300, 300, 100, 0, Math.PI * 2);
    hfd.fill();

    // Draw lines
    hgh.beginPath();
    hgh.strokeStyle = 'orange';
    hgh.moveTo(10,10);
    hgh.lineTo(300,300);
    hgh.stroke();

    // Draw text
    txt.font = '30px Arial';
    txt.lineWidth = 1; // szerokość textu
    txt.strokeStyle = 'green'
    txt.fillStyle = 'blue';
    txt.fillText('Hello World', 300,100,300);
    txt.strokeText('Hello World', 300,500,300);

});