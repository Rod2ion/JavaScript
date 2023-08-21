const xhr = new XMLHttpRequest();
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');
/*
readyState has 5 possible values:

 -0: request not initialized
 -1: server connection estabished
 -2: request received
 -3: processing request
 -4: request finished and responce is ready

*/
xhr.onreadystatechange = function () {
    // console.log(this.readyState); // Or (this.status) show me 200 (It's a status code)
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);
        data.forEach((repo) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.querySelector('#results').appendChild(li);
        });
    }
};

xhr.send();