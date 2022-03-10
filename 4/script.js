let total = "";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i == j) {
            total += '🎱'
        } else {
            total += '🏐'
        }
    }
    console.log(total);
    total = "";
}