var accountsMerge = function(accounts) {
    var pre = [];
    for(var i = 0; i < accounts.length; i++){
        pre[i] = i;
    }
    var map = {};
    for(var i = 0; i < accounts.length; i++){
        var account = accounts[i];
        var name = account[0];
        for(var j = 1; j < account.length; j++){
            var email = account[j];
            var root = map[email];
            if(root === undefined){
                map[email] = i;
            } else if(root !== i){
                union(root, i, pre);
                map[email] = pre[root];
            }
        }    
    }
    var result = {};
    for(var i = 0; i < pre.length; i++){
        var r = pre[pre[i]];
        if(!result[r]){
            result[r] = [accounts[i]];
        } else {
            result[r].push(accounts[i]);
        }
    }
    var merged = [];
    for(var key in result){
        var acct = result[key];
        var r = [];
        for(var i = 0; i < acct.length; i++){
            for(var j = 1; j < acct[i].length; j++){
                if(r.indexOf(acct[i][j]) < 0){
                    r.push(acct[i][j]);
                }
            }
        }
        var sort = [acct[0][0]].concat(r.sort());
        merged.push(sort);
    }
    return merged;
};

var find = function(x, pre){
    var r = x;
    while(pre[x] !== x){
        x = pre[x];
    }
    while(pre[r] !== x){
        var tmp = pre[r];
        pre[r] = x;
        r = tmp;
    }
    return x;
}

var union = function(x, y, pre){
    var rx = find(x, pre);
    var ry = find(y, pre);
    if(pre[rx] !== pre[ry]){
        for(var i = 0; i < pre.length; i++){
            if(pre[i] === ry){
                pre[i] = rx;
            }
        }
    }
}