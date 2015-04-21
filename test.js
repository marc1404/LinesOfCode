require('dotenv').load();

var linesOfCode = require('./index');

var options = {
    repository: process.env.REPOSITORY,
    githubToken: process.env.GITHUB_TOKEN,
    debug: true
};

linesOfCode(options, function(err, issues){
    if(err) throw err;

    console.log(issues);
});