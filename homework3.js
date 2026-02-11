function pow(a, b) {
    let result = 1;

    if (b === 0) return 1;

    if (b < 0) {
        for (let i = 1; i <= -b; i++) {
            result *= a;
        }
        return 1 / result;
    }

    for (let i = 1; i <= b; i++) {
        result *= a;
    }

    return result;
}

console.log(pow(2, 5));

