const passwordG=document.getElementById("password");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol="!@$#%^&*()_+-=/*-.";

const allChar=upperCase+lowerCase+numbers+symbol;

function createpassword(){
    let password="";
    password+=allChar[Math.floor(Math.random()*allChar.length)];
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordG.value=password;
    function copyPassword(){
        passwordG.Select();
        document.Commandid("copy");
    }
console.log("password");
}