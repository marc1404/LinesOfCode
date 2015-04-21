var apiRequest = require('./apiRequest');

exports.getCommits = getCommits;
exports.getCommit = getCommit;

function getCommits(sha, cb){
    apiRequest('?sha=' + sha, cb);
}

function getCommit(sha, cb){
    apiRequest('/' + sha, function(err, data){
        if(err) return cb(err);

        cb(null, {
            sha: sha,
            message: data.commit.message,
            lines: data.stats.additions - data.stats.deletions
        });
    });
}