

//def50200b4e0a542d3dcc6dc745b0b5497773cf3f12d6fe5b24907a695eed0c7663dfe7e2cd761a03feed3327998f5561803ba2dd63a38fd3b81f895908073474c41627600e96b8102138ceb6c8c98de101163d9e5a52732102b553b81642d1226830e654c34a8a3b8982581ad285a0665d5842781ab3e06ba2d36e6df3182233a87572cb4c053f22f161a6f8f0101e6dbb14d9d61572496c95adfed67ab943d2600ddb4e1c39df09dee09e228c6a234a12437b7fa784bb392d74c0ac7636e01d0d79ce2cb455930fad46ffb5e79e81010a99d79b3010e5257d85b68cbca6d61026a40f372d5d3254f7d67c7fe4ab59001537abc025ba13de40b195dcdf430383c12668e45a6b4f68f687d9d27d8081950e1841847e8b49d50d75c45de615543a91f4d1227828027ead3bbcfda776912fd8d3c70142330fe007aad9174a5b3de6f97cd2396a62fb36dbbe9bd1fcec7a2f0d7aa9de9f335954300001e7a3646d85404da1c836ba3f50f1ec98046dad421bc740692bad92e15dd441b1ab9d4f8
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyNTAwNSIsImp0aSI6IjY1NzQx'+
'N2RlNDgzMzEwN2IxZjM1ODhhZWM3MzY2MzQ2MzFkZDY1ZGQ1ZmNhOGU1YWY0NTY5NjllNWMwZTQ0ZmQ4YTRkNjU4'+
'NWE5Y2JhMzYwIiwiaWF0IjoxNjk2NTI4MzU3LjQ4NTgsIm5iZiI6MTY5NjUyODM1Ny40ODU4MDIsImV4cCI6MTY5'+
'NjYxNDc1Ny40NjUyODMsInN1YiI6IjE0MzU3MDUxIiwic2NvcGVzIjpbImlkZW50aWZ5IiwicHVibGljIl19.OjS'+
'SfyacFSEYS9TRY6J5byjCljKHzclFcuySRbML0MmBwavSI-XEdAtQYKb-1YgsFP4FXaB5ANRiVEH8V1egnFMswbt'+
'jcadZf3nYO_jCFq8Olo8InP5uB-5eUEGv4J7R27EvbeHKz2C1H0sGd3bYZOq3NIqOUQUFONUSg1uiCbmPRnZKgP-'+
'bQhK6reAC474WIX8R6S9_HsuvYKn9Uyw1xMta_T1oUoTR5IipW3QSI0nhJZnOm4OP8kFbjX3IKeT1R0Rt0N5Aad3'+
'BZDx1XT3YrJeIsCEZZgi-tzk7n9eXYpbq_N6Ahi1f4x1w_2uZyTIMa3ynpM4E4dahF8Wxz69b3J1Ko1mhEnj02P0'+
'WKO1p47OJ3GUGO-sXPRdHvJmJWD9-Y-kuy35teBnvDZWWbZ3gWwp0Q-2ujrfROcr5NkEE8G7IAKb-1LjcrI2Rpg9'+
'hOjaAZVzkqz4bXqI1HeB_1yU5JADc_XA7meECBBa7SfNTmpSJqHwEeoC6SvC34leXAZmwAxkdgaCacWe-3LnTRTa'+
'_i2RO_S6uSB67KcJL58M_afExsWF7t_F82-ISGSc0bdSYTw5r4S26CBbuz14BttWeUusIAiAANXOdnZrIOZukCHB'+
'lJO8C0gIWkSHch_RmZDuYjBmDXMozc1jW_HVMrRrxXH_kCiPL_0SVKA5MwHyXY2A'


fetch("https://osu.ppy.sh/api/v2/", {
    headers: {Authorization: `Bearer ${{token}}`}
});

const urlendpoint = new URL("https://osu.ppy.sh/api/v2/users/Nite_Vin/osu");

const params = {
    "key": "non",
};

Object.keys(params)
    .forEach(key => urlendpoint.searchParams.append(key, params[key]));

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
};

fetch(urlendpoint, {
    method: "GET",
    headers,
})
.then(response => response.json())
.then(data => {
    console.log(data);
});