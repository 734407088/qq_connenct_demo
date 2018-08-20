function toHome(access_token){
    location.href="http://localhost:3000/home/" + access_token + "#access_token=" + access_token
}

//region Iframe弹窗方式
$(function () {
    QC.Login({
        btnId:'login_btn_modal',
        showModal:true,
        size:'A_L'
    })
})
//endregion

//region 打开页面的方式
$(function () {
    QC.Login({
        btnId:'login_btn',
        size:'B_M'
    })
})
//endregion

// region 自己动手嵌入iframe方式
$(function () {
    // 打开按钮
    var $iframe = $('#login')
    var modal = $('#modal')[0]

    $("#custom_button").on('click', function () {
        if ($iframe.prop('src') === "") {
            var url = "https://graph.qq.com/oauth2.0/authorize"
            var params = "?"
            params += "response_type=token&"  // 获取回access_token
            params += "client_id=101490224&" // 应用的appid
            // 登录成功后跳转的代理页面，需要业务实现
            params += "redirect_uri=http://localhost:3000/proxy"
            $iframe.prop("src", url + params)
        }
        modal.style.left = ((window.innerWidth / 2) - 350) + "px"
        modal.style.visibility = 'visible'
    })

    $("#close_btn").on('click', function () {
        modal.style.visibility = 'hidden'
    })
})
// endregion