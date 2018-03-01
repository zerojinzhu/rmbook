
function openNew(){
  /*获取页面高度和宽度*/
    var wHeight = document.body.scrollHeight;
    var wWidth = document.body.scrollWidth;

    // 得到可视区域的长度和高度
    var sHeight = document.documentElement.clientHeight;
    var sWidth = document.documentElement.clientWidth;

    /*创建遮罩层*/
    var oMask = document.createElement("div");
    oMask.id = "mask";
    oMask.style.width = wWidth + "px";
    oMask.style.height = wHeight + "px";
    document.body.appendChild(oMask);


    //创建登陆框
    var oLogin = document.createElement("div");
    oLogin.id = "login";
    oLogin.innerHTML = '<div class="login-con"><div class="close" id="close"></div><div class="login-logo"></div><div class="login-main"><form class="login-form"><p><label class="login-label">账&nbsp号:</label><input type="text" class="login-input-account" id="username" name="account" placeholder="用户名"></p><p><label>密&nbsp码:</label><input type="password" name="password" placeholder="请输入你的密码" class="login-input-password"></p><p><input type="submit" class="login-submit" id="submit" name="" value="登录"><a href="#"  class="login-sign">注册</a></p></form></div></div>';
    document.body.appendChild(oLogin);

    //获取login的高和宽
    var dWidth = oLogin.offsetWidth;
    var dHeight = oLogin.offsetHeight;

    //设置登陆框位置
    oLogin.style.left = sWidth/2 - dWidth/2 + "px";
    oLogin.style.top = sHeight/2 - dHeight/2 + "px";

    //创建关闭按钮
    var oClose = document.getElementById("close");

    //关闭事件
    oClose.onclick = oMask.onclick = function closeSubmitBox(){
        document.body.removeChild(oMask);
        document.body.removeChild(oLogin);
    };
     var oIcon = document.getElementById("icon");
    var oUsername = document.getElementById("username");
    document.getElementById("submit").onclick = function(){
        oIcon.innerHTML = "<span class='username'>" + oUsername.value + "</span>";
        closeSubmitBox();
        return false;    
    };
};

function search(){
      /*获取页面高度和宽度*/
    var wHeight = document.body.scrollHeight;
    var wWidth = document.body.scrollWidth;

    // 得到可视区域的长度和高度
    var sHeight = document.documentElement.clientHeight;
    var sWidth = document.documentElement.clientWidth;

    /*创建遮罩层*/
    var oMask = document.createElement("div");
    oMask.id = "mask";
    oMask.style.width = wWidth + "px";
    oMask.style.height = wHeight + "px";
    document.body.appendChild(oMask);

    //创建loading
    var oBan = document.createElement("div");
    oBan.className = "topic-slider"
    oBan.innerHTML = '<div class="loading"><span>Loading</span></div><ul><li class="a1"></li><li class="a2"></li><li class="a3"></li></ul>';
    document.body.appendChild(oBan);

    //获取loading的高和宽
    var bWidth = oBan.offsetWidth;
    var bHeight = oBan.offsetHeight;

    //设置loading位置
    oBan.style.top = sHeight/2 - bHeight/2 + "px";
}

window.onload=function(){
    var oBtn = document.getElementById("btnlogin");
    oBtn.onclick = function(){
        openNew();
        return false;
    };
    var oSearch = document.getElementById("searchbtn");
    oSearch.onclick = function(){
        search();
        return false;
    }
   
};


