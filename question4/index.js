// What is wrong with the following code?

var server_echo;
var json = {
    json: JSON.stringify({
        a: 1,
        b: 2
    }),
    delay: 3
};
fetch('/echo/', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
    })
    .then(function (response) {
        server_echo = response.json().echo
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
server_echo.forEach(
    element => console.log(element)
)

/*
    1. In the post request we are definfing the content-type as JSON data but in the body we are not sending a valid JSON data
    I dont think anything else could be wrong considering the the scenario that all the variable assignment are valid and the data type expected from them are same as well
*/