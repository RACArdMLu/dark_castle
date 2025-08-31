var count = op.steps;//总点击次数
var pagename = op.nextpage;
var page_type = op.type;//场景类型：0为自动跳转，1为分支选择，2为结局决定
var click = 0;//当前点击次数

//显示对话函数
function next_text() {
    $("#texts").hide();
    $("#name").hide();
    if(op.texts[click] == "none"){
        $("#dialog, #text-box").hide();
    }
    else{
        $("#dialog, #text-box").show();
    }
        
    if (op.name[click] != "旁白") {
        document.getElementById("name").innerHTML =  op.name[click];
    }
    else {
        document.getElementById("name").innerHTML = "<br>";
    }
    document.getElementById("texts").innerHTML = op.texts[click];
    $("#texts").fadeIn();
    $("#name").fadeIn();
    return;
}
function next_move(){
if (click < count) {
        next_text();
        click++;
        window.localStorage.nowclick = click;
    }
else {//本页面已结束
        window.localStorage.nowclick = 0;
        window.location.href = op.nextpage;
}
}