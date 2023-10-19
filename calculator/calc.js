
function test(id) {
    document.getElementById("text").innerHTML += document.getElementById(id).innerHTML;
}

function clearing() {
    document.getElementById("text").innerHTML = "";
}

function calculate() {
    let string = document.getElementById("text").innerHTML;

    let request = new XMLHttpRequest();

    request.open('GET', 'http://api.mathjs.org/v4/?expr= ' + encodeURIComponent(string), true);

    request.onload = function () {

        var data = JSON.parse(this.response);


        if (request.status == 200) {
            console.log(data)
            document.getElementById("text").innerHTML = data;
            let history = [];
            history.push(string);
            console.log(history[0]);

        }

        else if (request.status == 400)
        {
            console.error("L");
        }
            

    }

    request.send();

    

}



