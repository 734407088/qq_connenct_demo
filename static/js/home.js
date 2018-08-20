$(function () {

    // jssdk初始化时会从url的hash里获取access_token，http://localhost:3000/home/params?#access_token=xxx
    // 或者直接把access_token传入进行初始化{btnId:'login-btn', access_token:'xxx'}
    QC.Login(
        {btnId:'login-btn'},
        function (reqData, opts) {
            //根据返回数据，更换按钮显示状态方法
            //注意:传入此方法则需要自己渲染按钮
            var dom = document.getElementById(opts['btnId']),
                _logoutTemplate=[
                    //头像
                    '<span><img src="{figureurl}" class="{size_key}"/></span>',
                    //昵称
                    '<span>{nickname}</span>',
                    //退出
                    '<span><a href="javascript:QC.Login.signOut();">退出</a></span>'
                ].join("");
            dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
                nickname : QC.String.escHTML(reqData.nickname), //做xss过滤
                figureurl : reqData.figureurl
            }));
        },
        function (opts) {
            console.log('QQ登录 注销成功 !')
        }
    )

    // 通过jssdk调用api
    // 具体参数请参考 => http://wiki.connect.qq.com/api%e5%88%97%e8%a1%a8
    QC.Login.getMe(function (openid, access_token) {
        QC.api('get_user_info',{
            oauth_consumer_key: "101490224", // appid
            access_token: openid,
            openid: access_token
        }).success(function (res) {console.log(res)})
    })
})
