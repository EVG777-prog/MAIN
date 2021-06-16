// сортировка делением на равные отрезки - "быстрая"

// Получение строчки номеров через пробел

// let stringInput = prompt('Введите числа через пробел:'); // можно ввести с диалогового окна
let stringInput = '4 3 2 1 6 8 5 10 25 21 0 489 165165 4 5554 '; // для примера


// убираем пробелы справа и слева
let newText = stringInput.trimRight().trimLeft();

// убираем дубликаты пробелов
while (newText.includes('  ')){
    newText = newText.replaceAll('  ', ' ');
};

console.log(newText);

let numbers = newText.split(' ');

// преобразовываем в массиве текст в числа
numbers = numbers.map(Number);

// выводим несортированный массив
console.log(numbers);

// сортируем массив
numbers = sortFast(numbers);

// выводим результат
console.log('Итоговый результат: ' + numbers);

// Функция обьединения отсортированных массивов
function compoundArrays (array1, array2) {
    let array3 = [];                                // обьявляем итоговый массив
    let x = array1.length + array2.length;          // получаем общую длинну 2-х массивов
    for (let i=0; i < x; i++) {                     // в цикле добавляем к итоговому массиву
        if (array1[0] > array2[0]) {                // значения, убирая их значения с обрабатываемых массивов
            array3[i] = +array2.splice(0, 1);
        } else if (array1[0] < array2[0] || array1[0] === array2[0]){
            array3[i] = +array1.splice(0, 1);
        } else if (array1[0] === undefined) {       // если 1-й массив закончился,
            array3[i] = +array2.splice(0, 1);       // добавляем знак со второго
        } else if (array2[0] === undefined) {       // если 2-й массив закончился,
            array3[i] = +array1.splice(0, 1);       // добавляем знак с первого
        }
    }
    return array3;                                  // возвращаем итоговый результат
}



// Функция сортировки массива чисел делением на отрезки с использованием рекурсии
function sortFast (nums){
    if (nums.length > 2) {                                      // если количество элементов больше 2-х, то делим пополам
        let x = Math.floor(nums.length / 2, 1);               // переменная для хранения номера элемента, по которому делим на отрезки
        console.log('Середина на знаке ' + x);
        let xy = nums.slice(0, x);                              // Отрезок 1
        let yz = nums.slice(x);                                 // Отрезок 2
        console.log('Отрезок 1-й: ' + xy);
        console.log('Отрезок 2-й: ' + yz);
        xy = sortFast(xy);                                      // сортируем отрезок 1
        yz = sortFast(yz);                                      // сортируем отрезок 2
        console.log('Результат сортировки 1-го отрезка: ' + xy);
        console.log('Результат сортировки 2-го отрезка: ' + yz);
        nums = compoundArrays(xy, yz);                          // обьединяем отсортированные отрезки
        console.log('Обьединяем: ' + nums);
    } else if (nums.length == 2) {                              // сортировка 2-х элементов
        if (nums[0] > nums[1]) {
            let a = nums[0];
            nums[0] = nums[1];
            nums[1] = a;
            console.log('Обмен значениями: ' + nums);
        }
    }
    return nums;                                                // возвращаем итоговый массив
}