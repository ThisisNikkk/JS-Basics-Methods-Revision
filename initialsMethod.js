let a = "suraj prakash kamboh singh insaan"

const getInitials = (name) => {
    const getName = name.split(" ");
    const initialName = getName.map(word => word[0]).join("")
    console.log(initialName)
}

const getInitials2 = (name) => {
    return name                   
        .split(" ")              
        .map(word => word[0].toUpperCase()) 
        .join('');
}
console.log(getInitials(a))