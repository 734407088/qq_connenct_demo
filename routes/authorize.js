module.exports = function(router) {
    router.get('/', login)
    router.get('/home/:access_token', home)
    router.get('/proxy', proxy)
    router.get('/home', home)
}

const axios = require('axios')

async function proxy(ctx) {
    await ctx.render('proxy')
}

async function login(ctx) {
    await ctx.render('login')
}

async function home(ctx){
    let token = ctx.params.access_token
    let resp = await axios.get('https://graph.qq.com/oauth2.0/me',{params:{access_token: token}})
    let {client_id,openid}= eval(resp.data)
    resp = await axios.get(
        'https://graph.qq.com/user/get_user_info',
        {
            params:{
                access_token: token,
                oauth_consumer_key: client_id,
                openid: openid
            }
        }
    )

    await ctx.render('home', {name:resp.data.nickname})

    function callback(params) {
        return params
    }
}
