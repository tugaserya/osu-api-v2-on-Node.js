# osu-api-v2-on-Node.js
This is a short example of how to work with osu! API v2 on Node.js
That's not a project or anything like this. But you can use this repository as a quick guide to use osu! API v2.
IMPORTANT: Here I am using the "Client Credentials Grant" method to obtain the authorization token.
You can see another method in the official documentation - [osu!web Documentation](https://osu.ppy.sh/docs/index.html)https://osu.ppy.sh/docs/index.html
1. First, go to your osu account settings! and find the Oauth section, register the application by filling out all the necessary fields (for our case redirect url is not particularly important).
2. Then in the test.js file replace on line 21 replace the specified fields

//here you should replace "your_client_id" and "your_client_secret".
//You can take it from your accaunt settings after registration of your app.
let body = "client_id=your_client_id&client_secret=your_client_secret&grant_type=client_credentials&scope=public";

3. In file tokenData.json delete all text.
4. Run the the Node.js app from terminal
