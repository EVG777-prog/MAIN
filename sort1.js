// Сортировка текстовой строки чисел с помощью метода пузырьковой сортировки без использоввания метода sort()

// На входе дается одна текстовая строка с числами через " "



const incomeText = prompt('Введите цифры через пробел')
let outputText
let numbers
console.log(incomeText)

// удаляем пробелы в начале и конце
let newText = incomeText.trimRight().trimLeft()

console.log(newText)

// удаляем двойные пробелы
while (newText.includes('  ')) {
    newText = newText.replace('  ', ' ')
}

console.log(newText)

// создаем массив с числами в текстовом формате
numbers = newText.split(' ')

// преобразовываем в массиве текст в числа
numbers = numbers.map(Number)

console.log(numbers);

// сортируем значения в массиве
sortNumbersUp(numbers)

console.log(numbers);

// преобразовываем массив в строку текста с разделением пробелами
outputText = numbers.join(' ')

console.log(outputText);

alert(outputText);

// функция пузырьковой сортировки
function sortNumbersUp (numbers) {
    let changes = true  // переменная для отслеживания изменений
    let a = NaN     // временная переменная для обмена значениями между ячейками массива
    while (changes === true) {
        changes = false
        for (let i = 0; i < (numbers.length - 1); i++) {
            if (numbers[i] > numbers[i + 1]) {
                a = numbers[i]
                numbers[i] = numbers[i + 1]
                numbers[i + 1] = a
                changes = true
            }
        }
    }
}
