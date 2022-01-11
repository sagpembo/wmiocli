var debug = false;
function enableDebug(){
    debug = true;
 }

function message(inMessage)
{
    if(debug==true){
        console.log("<WMIOCLI>." + inMessage);
    }
}

module.exports = { enableDebug, message };