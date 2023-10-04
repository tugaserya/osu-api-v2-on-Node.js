import { Client, LegacyClient } from 'osu-web.js';

/*fetch("https://osu.ppy.sh/api/v2/", {
    headers: {Authorization: `{eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhd...S-fNKPVp-4HW-fi8yq6UvwILxyRcx9XstQZio_Jwk}`}
});

const url = new URL("https://osu.ppy.sh/api/v2/users/1/osu");

const params = {
    "key": "non",
    "follower_count": "",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};

fetch(url, {
    method: "GET",
    headers,
})
.then(response => response.json())
.then(data => {
    console.log(data);
});*/

const api = new Client("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhd...S-fNKPVp-4HW-fi8yq6UvwILxyRcx9XstQZio_Jwk");

const user = await api.users.getSelf({
    urlParams: {
      mode: 'osu'
    }
  }).then(response => response.json())
  .then(data => {
      console.log(data);
  });
  