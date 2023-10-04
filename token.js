const url = new URL(
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
    console.log(data);
})