function reverseStringSplitReverse(string){
    return string.split("").reverse().join("");
}
function reverseStringSplitReverseStupid(string){
    return string.split("").reverse().join("").split("").reverse().join("").split("").reverse().join("");
}
function reverseStringFor(string){
    let res = "";
    for(let i=1; i<=string.length; i++){
        res += string[string.length - i];
    }
    return res;
}
function reverseStringForBackwards(string){
    let res = "";
    for(let i=string.length-1; i>=0; i--){
        res += string[i];
    }
    return res;
}
function reverseWhileLoop(string){
    let res = "";
    let i = 1;
    while(i <= string.length){
        res += string[string.length-i];
        i++;
    }
    return res;
}
function reverseWhileLoopBackwards(string){
    let res = "";
    let i = string.length-1;
    while(i >= 0){
        res += string[i];
        i--;
    }
    return res;
}
function reverseDoWhile(string){
    let res = "";
    let i = 1;
    do{
        res += string[string.length-i];
        i++;
    }
    while(i <= string.length)
    return res;
}
function reverseDoWhileBackwards(string){
    let res = "";
    let i = string.length-1;
    do{
        res += string[i];
        i--;
    }
    while(i >= 0)
    return res;
}
function reverseStringForJoin(string){
    let res = [];
    for(let i=1; i<=string.length; i++){
        res.push(string[string.length - i]);
    }
    return res.join("");
}
function reverseStringForSubstr(string){
    let res = "";
    for(let i=string.length; i>=0; i--){
        res += string.substring(i-1, i)
    }
    return res;
}
function reverseStringForLoopSmall(string){
    let res=""
    for(let i=string.length-1; i>= 0; res+=string[i--]){}
    return res;
}
function reverseRecursion(string) {
    return (string === '') ? '' : reverseRecursion(string.substring(1)) + string.charAt(0);
}

console.log(reverseStringSplitReverse("ive bin doin ACS"))
console.log(reverseStringSplitReverseStupid("ive bin tinking dat im stupid"))
console.log(reverseStringFor("ive bin tinking il die"))
console.log(reverseStringForBackwards("but then i saw js hw deadline pasd"))
console.log(reverseWhileLoop("oh no - thout I"))
console.log(reverseWhileLoopBackwards("teacher put 00:00 deadline :("))
console.log(reverseDoWhile("now im doing wep js hw"))
console.log(reverseDoWhileBackwards("and i dont tink im stupid anymor"))
console.log(reverseStringForJoin("but eventually il have to come back for ACS"))
console.log(reverseStringForSubstr("and il die"))
console.log(reverseStringForLoopSmall("probably"))
console.log(reverseRecursion("de end"))