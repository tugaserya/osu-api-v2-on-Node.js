const express = require('express');

const app = express();


app.get('/', (req, res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //console.log(fullUrl)
    res.send('Hello, World!');
    get_tokens_JSON(codeparsing(urldefinding(fullUrl)));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


//----------------
function urldefinding(fullUrl){
    const url = require('url');
    const querystring = require('querystring');
    
    let rawUrl = fullUrl;
    
    let parsedUrl = url.parse(rawUrl);
    let parsedQs = querystring.parse(parsedUrl.query);
    return parsedQs
}

function codeparsing(JSONcode){
    return JSONcode["code"]
}




function get_tokens_JSON(code){
    const urlauth = new URL(
        "https://osu.ppy.sh/oauth/token"
    );
    
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
    };
    
    let body = `client_id=25005&client_secret=06rbUkau5uqMJIOoPCmn1NUcuU5QEIrFBnyZLxV5&code=${code}&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A3000`;
    
    fetch(urlauth, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json()).then(data => {
        console.log(data);
        console.log(data["access_token"]);
        console.log("---------------");
        console.log(data["expires_in"]);
        console.log("---------------");
        console.log(data["refresh_token"]);
    });
    
}

