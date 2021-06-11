function timeConversion(s) {
    // Write your code here
    if(s[s.length-2] === "A"){
        if(s[0] == 1 && s[1] == 2){
            return `00:${s[3]}${s[4]}:${s[6]}${s[7]}`;
        } else {
            return `${s[0]}${s[1]}:${s[3]}${s[4]}:${s[6]}${s[7]}`;
        }
    } else if(s[s.length-2] === "P"){
        if(s[0] === 1 && s[1] === 2){
            return `12:${s[3]}${s[4]}:${s[6]}${s[7]}`;
        } else {
            const hour = Number( s[0] + s[1], 10) + 12;
            
            return `${hour}:${s[3]}${s[4]}:${s[6]}${s[7]}`;
        }
    }

}


console.log("07:05:45PM ",timeConversion("07:05:45PM"))
console.log("08:05:45PM ",timeConversion("08:05:45PM"))

console.log("07:05:45AM ",timeConversion("07:05:45AM"))
console.log("08:05:45AM ",timeConversion("08:05:45AM"))

console.log("10:05:45PM ",timeConversion("10:05:45PM"))