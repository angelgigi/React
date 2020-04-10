/**
 * Created by angelqiqi on 2016/11/4.
 */

var loginInfo={
    username:"admin",
    pwd:"123"
};

var CheckValue={
    username:null,
    password:null,
    checkusername:null,
    checkpassword:null,
    btnLogin:null,


    InitData:function () {
        this.username=$("#username");
        this.password=$("#password");
        this.checkusername=$("#checkusername");
        this.checkpassword=$("#checkpassword");
        this.btnLogin=$("#btnLogin")
        
    },
    setCookie:function (key,value,iDay) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=key+'='+value+';expires='+oDate;
    },
    login:function () {
        if(this.username != null && this.username.val() != ""  && this.password !=null && this.password.val() !=""){
            if(this.username.val() ==loginInfo.username&&this.password.val() == loginInfo.pwd ){
                this.setCookie("loginname",this.username.val(),1);
              window.location.href="http://localhost:63342/react/2016.11.04/logintop.html";
            }else {
                this.checkpassword.html("用户名或密码错误")
            }
        }else {
            this.checkpassword.html("请输入用户名或密码")
        }
    }
    
};



$(document).ready(function () {
   CheckValue.InitData();
    CheckValue.btnLogin.click(function () {
        CheckValue.login()
    })
    
});

