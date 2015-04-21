module.exports = extractIssues;

function extractIssues(commits){
    var issues = {};

    commits.forEach(function(commit){
        var issueId = matchIssueId(commit.message);

        if(issueId){
            var issue = issues[issueId];

            if(!issue){
                issue = issues[issueId] = {
                    id: issueId,
                    lines: 0
                };
            }

            issue.lines += commit.lines;
        }
    });

    return objectToArray(issues);
}

function matchIssueId(commitMessage){
    var regex = /#(.*?)(\s|$)/;
    var result = commitMessage.match(regex);

    if(result){
        return result[1];
    }

    return null;
}

function objectToArray(obj){
    var arr = [];

    Object.keys(obj).map(function(key){
        arr.push(obj[key]);
    });

    return arr;
}