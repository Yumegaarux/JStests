function generatePassword(length, includeLowercase, includeUppercase, includeNum , includeSpecial){
    let allowedChars = '';
    let password = '';

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=,.;[]';

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNum ? numChars : "";
    allowedChars += includeSpecial ? specialChars : "";

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNum = true;
const includeChars = true;
const createPass = document.getElementById("createPass");
const h2 = document.getElementById("password");
let password = '';


createPass.onclick = function(){
    password = generatePassword(passLength, includeLowercase , includeUppercase , includeNum , includeChars);
    h2.textContent = password;
}
