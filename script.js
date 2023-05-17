//generate random password using for loop
document.getElementById('btn').addEventListener('click', function() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz@$";
    var passwordLength = 10;
    let password = "";
    for(let i=0; i<passwordLength; i++){
        let randomChar = Math.floor(Math.random() * chars.length);
        // console.log(Math.random()*chars.length);
        password += chars.charAt(randomChar);
    }
    document.getElementById('password').value = password;
})

//copy to clipboard
document.getElementById('clipboard').addEventListener('click', function(){
    var clipboard = document.getElementById('password');
    clipboard.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
    clipboard.value = "";
})