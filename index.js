var config = require('./lib/config');
var github = require('./lib/github');
var extractIssues = require('./lib/extractIssues');

module.exports = function(options, cb){
    config.init(options);

    github.getCommits(function(err, commits){
        if(err) return cb(err);

        var issues = extractIssues(commits);

        cb(null, issues);
    });
};