//let requestUrl='https://api.thecatapi.com/v1/breeds?lapi_key=live_J3RlgflYzdMY2mgGPbcH4sM05urjmxrQSOj2gq1dUp6bLjZKERicSiuBotBdlHTt'

fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then (function (data) {
    console.log(data);
  });