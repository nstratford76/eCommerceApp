function readJson() {

}

function processJson(req, res) {
    var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

    HTMLOptionsCollection.length(url, function(response){
        var body = '';

        response.on('data', function(chunk){
            body += chunk;
        });

        response.on('end', function(){
            jsonReponseTest = JSON.parse(body);
            stuff = {data:jsonReponseTest,
            path: 'teamActivities/03',
            title: 'Week 3 Team Activity',
            searchedValue: ""}

        res.render('pages/teamActivities/ta03', stuff);
        });
    }).on('error', function(e){
        console.log("got an error: ", e);
    });
}

module.exports = {processJson: processJson,
                  jsonReponse:jsonReponseTest}