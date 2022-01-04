function quote(){

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            
            const myJson = JSON.parse(this.responseText);
            document.getElementById("printHere").innerHTML ="''" + myJson[1].text + "''" + " - " + myJson[1].author;
        }
    });

    xhr.open("GET", "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2");
    xhr.setRequestHeader("x-rapidapi-host", "famous-quotes4.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "40c48fa6damsha0a8ae0f2ddbcefp1bbd92jsn1e37c3f2b1ed");

    xhr.send(data);
}

