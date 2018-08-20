window.top.toHome(getQueryVariable('access_token'))

function getQueryVariable(variable) {
    // 返回的access_token是放在hash里面的
    let query = window.location.hash.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return(false);
}