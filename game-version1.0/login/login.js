function login(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username===""||password==""){
        alert("请输入账号或密码")
    }
    else{ if("username_log"+username in localStorage){
        if(password === localStorage.getItem("password_log"+username)){

            alert("欢迎回来，调查员");
            // window.open("../index.html");
            localStorage.setItem("current_username",username);
            window.location.href="../index.html";
            
            
            return true;
            
        }
        else{
            alert("密码错误");
        }

    }
    
    else{
        alert("调查员不存在");
    }
}
}

function log(){
    var username_log = document.getElementById("username_log").value
    var password_log = document.getElementById("password_log").value
    var password_log0 = document.getElementById("password_log0").value
    if(username_log===""||password_log===""||password_log0===""){
        alert("账号或密码不能为空")
    }
   
    else if(password_log0!==password_log){
        alert("密码不一致")
    }
    else{
        if("username_log" + username_log in localStorage){
            alert("调查员已存在")
        }
        else{
        localStorage.setItem("username_log"+username_log,username_log)
        localStorage.setItem("password_log"+username_log,password_log)
        alert("调查员身份创建成功")
        window.location.href="login.html","_self"
        return true
        }
    }

}