/*const url = new URL(
    "https://osu.ppy.sh/oauth/token"
);

const headers = {  
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
};

let body = "client_id=25005&client_secret=06rbUkau5uqMJIOoPCmn1NUcuU5QEIrFBnyZLxV5&grant_type=client_credentials&scope=public";

fetch(url, {
    method: "POST",
    headers,
    body: body,
}).then(response => response.json())
.then(data => {
    console.log(data["access_token"]);
})*/

//https://osu.ppy.sh/oauth/authorize?client_id=25005&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=public&state=randomval


const url = new URL("https://osu.ppy.sh/oauth/authorize")

const params = {
    "client_id": "25005",
    "redirect_uri": "http://localhost:3000",
    "response_type": "code",
    "scope": "public",
    "state": "randomval",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));
    console.log(String(url))

fetch(url, {
    method: "GET",
}).then(response => response.json()).then(data => {
    console.log(data);
});
