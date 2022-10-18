
export function formatPhone(number){
    return `+1 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6, 10)}`;
}

export function capitalizeFirstLetter(word){
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

export function validateEmail(email){
    return email.match(/^[a-z0-9._]{3,}@([a-z0-9-]+\.)+?[a-z]{2,3}$/i) ? true : false;
}