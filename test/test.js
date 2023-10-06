const fs = require('fs');//import for the auth token using
const prompt = require('prompt-sync')();
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

    let body = "client_id=Your_client_id&client_secret=Your_client_secret&grant_type=client_credentials&scope=public";//paste here your client id and client secret

    function token_return(url) {//writing the auth token
        return fetch(url, {
            method: "POST",
            headers,
            body: body,
        }).then(response => response.json())
        .then(data => {
            fs.writeFileSync('./tokenData.json', JSON.stringify(data["access_token"]));
        });
    }

    return token_return(url)//reading the auth token
        .then(() => {
            let rawdata = fs.readFileSync('./tokenData.json');
            let tokendata = JSON.parse(rawdata);
            return tokendata;
        });
}






//------------------------------------------------------------------------------

rl.question('Type a username:', (name) => {//user can type a username for reqyesting data
    user_data(name)
    rl.close();

  });

function user_data(user){
const urlendpoint = new URL(`https://osu.ppy.sh/api/v2/users/${user}/osu`);//url with params for the data request
const params = {
    "key": "non",
};

Object.keys(params)
    .forEach(key => urlendpoint.searchParams.append(key, params[key]));//forms of urlendpoint

token_req()//use the previus function for taking the auth token
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
    console.log("country: " + data["country_code"]);
    console.log("rank: " + data["rank_highest"]["rank"]);
    console.log("discord(if there): "+ data["discord"]);
});
})
.catch(error => {
     console.error("Error:", error);
});
}
