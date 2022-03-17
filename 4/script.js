let total = '';
for (let i = 0; i < 8; i++) {
    for (let j = 8; j > 0; j--) {
        if (i == j - 1 || j == 8 || j == 1 || i == 0 || i == 7) {
            total += '🎱';
        } else {
            total += '🏐';
        }
    }
    console.log(total);
    total = '';
}


