function checkProb(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        // Генерація випадкового числа від 100 до 1000 включно
        let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = ((evenCount / count) * 100).toFixed(2);
    let oddPercent = ((oddCount / count) * 100).toFixed(2);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercent}% / ${oddPercent}%`);
}

// Приклад виклику функції
checkProb(50);