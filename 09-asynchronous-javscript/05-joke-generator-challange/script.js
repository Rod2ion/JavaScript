const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'Https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function (){
        if (this.readyState === 4 ) {
            if (this.status === 200) {
                // console.log(JSON. parse(this.responseText).value);
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            }else{
                
            }
        }
    };

    xhr.send()
};

jokeBtn.addEventListener('click', generateJoke);
