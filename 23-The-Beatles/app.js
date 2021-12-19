const sing = () => {
    let lyrics = [];
    for (let i=0; i < 12; i++) {
        if (i == 4) {
            lyrics.push("whisper words of wisdom");
        }
        else if (i == 10) {
            lyrics.push("there will be an answer");
        }
        else {
            lyrics.push("let it be");
        }
    }

    return lyrics.join(", ");
}

console.log(sing());