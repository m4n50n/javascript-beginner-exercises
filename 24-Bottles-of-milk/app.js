const sing = () => {  
    let lyrics = "";

    for (let i = 99; i > -1; i--) {
        let next = i - 1;
        
        console.log(i + " bottles of milk on the wall, " + i + " bottles of milk. ");

        if (next == 0) {
            console.log("Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
            return true;
        }
        else {
            console.log("Take one down and pass it around, " + next +  " bottles of milk on the wall. " + next + " bottles of milk on the wall, " + next + " bottles of milk. ");
        }        
    }
}

console.log(sing());