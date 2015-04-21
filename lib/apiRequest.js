var request = require('request');
var config = require('./config');

module.exports = function(query, cb){
    var url = 'https://api.github.com/repos/' + config.repository + '/commits';
    var options = {
        url: url + query,
        headers: {
            'User-Agent': config.repository
        },
        auth: {
            username: config.githubToken,
            password: 'x-oauth-basic'
        }
    };

    if(config.debug){
        console.log(options.url);
    }

    request.get(options, function(err, response, body){
        if(err) return cb(err);
        if(response.statusCode !== 200) return cb(response.body);

        cb(null, JSON.parse(body));
    });
};