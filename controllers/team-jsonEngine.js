const https = require('https');
const fs = require('fs');
let jsonResponseTest;
function readJson() {

}

function processJson(req, res) {
    var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

    https.get(url, function(response) {
        var body = '';
 

        response.on('data', function(chunk){
            body += chunk;
        });

        response.on('end', function(){
           var jsonResponse = JSON.parse(body);
           var stuff = {data:jsonResponse,
                     path: 'teamActivities/03',
                     title: 'Week 3 Team Activity',
                     searchedValue: ""}

        res.render('pages/teamActivities/ta03', stuff);
          var outputFilename = 'my.json';

             fs.writeFile(outputFilename, JSON.stringify(jsonResponse, null, 4), function(err) {
                if(err) {
                  console.log(err);
                } else {
                  console.log("JSON saved to " + outputFilename);
                }
             }); 
        });
    }).on('error', function(e){
        console.log("got an error: ", e);
    });
}

module.exports = {processJson: processJson}