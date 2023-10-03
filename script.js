const passwordbox=document.getElementById("Password");
const lenght=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="@#$%^&*()_+{}[]></-=";
const alchars=uppercase+lowercase+number+symbols;
function createRandomPassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(lenght>password.length){
        password+=alchars[Math.floor(Math.random()*alchars.length)];
    }
    passwordbox.value=password;
    
}
function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}