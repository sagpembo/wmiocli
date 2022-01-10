const request = require('request');

function get(restEndPoint,user,pass,timeout,callback)
{
    //console.log("in get");
    var options = {
        url: restEndPoint,
        json: true,
        method: 'GET',
        timeout: timeout*1000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        auth: {
            username: user,
            password: pass
        }
    };
    //var resp;
    request(options, (err, res, body) => {
        if(res && res.statusCode != 200)
        {
            return callback(body,99)
            
        }
        
        if (err) {
            return callback(err,99);

        }
        if (body){
            return callback(body,0);
        }
        else{
            var error="unknown";
            return callback(error,98);
            //process.exit(98);
        }
    });
    //console.log(resp);
}

function put(restEndPoint,user,pass,timeout,data,callback){
    sendBody(restEndPoint,user,pass,timeout,data,'PUT',callback);
}
function post(restEndPoint,user,pass,timeout,data,callback){
    sendBody(restEndPoint,user,pass,timeout,data,'POST',callback);
}
function sendBody(restEndPoint,user,pass,timeout,data,type,callback)
{
    //console.log("in get");
    var options = {
        url: restEndPoint,
        json: true,
        method: type,
        timeout: timeout*1000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        auth: {
            username: user,
            password: pass
        },
        body: data
    };
    //console.log("making the call");

    request(options, (err, res, body) => {
       //console.log("in request");
        if(res && res.statusCode != 200){
            return callback(body,99)
        }
        
        if (err) {
            return callback(err,99)
        }
        if (body){
            return callback(body,99)
        }
        else{
            var error="unknown";
            return callback(error,98);
        }
    });
   // console.log(res);
}

module.exports = { get, post, put };