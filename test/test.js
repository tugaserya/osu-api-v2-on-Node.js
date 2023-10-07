const fs = require('fs');//import for the auth token using from tokenData.json
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



function token_req() {//this function is using for the request an the auth token
    const url = new URL(
        "https://osu.ppy.sh/oauth/token"
    );

    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
    };
    //here you should replace "your_client_id" and "your_client_secret".
    //You can take it from your accaunt settings after registration of your app.
    let body = "client_id=your_client_id&client_secret=your_client_secret&grant_type=client_credentials&scope=public";

    function token_return(url) {//writing the auth token into tokenData.json
        return fetch(url, {
            method: "POST",
            headers,
            body: body,
        }).then(response => response.json())
        .then(data => {
            fs.writeFileSync('./tokenData.json', JSON.stringify(data["access_token"]));
        });
    }

    return token_return(url)//reading the auth token from tokenData.json
        .then(() => {
            let rawdata = fs.readFileSync('./tokenData.json');
            let tokendata = JSON.parse(rawdata);
            return tokendata;
        });
}



//------------------------------------------------------------------------------

rl.question('Type a username: ', (name) => {//user can type a username and mode(osu, mania, taiko, Catch the beat) for requesting data
    rl.question('Type a mode of game: ', (mode) => {
            user_data(name,mode);
        rl.close();})
  });

function user_data(user,mode){
const urlendpoint = new URL(`https://osu.ppy.sh/api/v2/users/${user}/${mode}`);//url with params for the data request
const params = {
    "key": "non",
};

Object.keys(params)
    .forEach(key => urlendpoint.searchParams.append(key, params[key]));//formation of urlendpoint

token_req()//use the token_req() function for taking the auth token
    .then(token => {
        const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
};

fetch(urlendpoint, {//request of data through API v2
    method: "GET",
    headers,
})
.then(response => response.json())
.then(data => {
    console.log("country: " + data["country"]["name"]);
    console.log("rank: " + data["rank_highest"]["rank"]);
    console.log("discord(if there): "+ data["discord"]);
    console.log("pp count: "+ data["statistics"]["pp"]);
});
})
.catch(error => {
     console.error("Error: ", error);
});
}