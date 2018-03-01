
function openDetail(){
    //弹出遮罩层
    var oMask = document.getElementById("mask");
    oMask.style.display = "block";
    oMask.style.opacity = 0.5;

    //弹出书本的详情
    var oDetail = document.getElementById("detailcon");
    oDetail.style.display = "block";
    oDetail.style.width = 894+"px";
    oDetail.style.height = "886px";
    
    var oClose = document.getElementById("close");

    //关闭事件
    oClose.onclick = oMask.onclick = function(){
        oDetail.style.display = "none";
        oMask.style.display = "none";
    };
}
