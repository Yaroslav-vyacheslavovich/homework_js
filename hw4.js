// Homework 4

//Задание 1

// var object = {
//     hundreds: 0,
//     tens: 0,
//     units: 0,
// };
// var x = +prompt("Введите число от 1 до 999");

// object.output = numberToObject;

// function numberToObject() {
//     if (x > 999 || isNaN(x)) {
//         console.log("Вы указали неверное число");
//         console.log("Сотни:" + this.hundreds + "\nДесятки:" + this.tens + "\nЕдиницы:" + this.units);
//     }
//     else {
//         this.hundreds = Math.floor(x / 100);
//         this.tens = Math.floor((x - (this.hundreds * 100)) / 10);
//         this.units = x - (this.hundreds * 100 + this.tens * 10);
//         console.log("Сотни:" + this.hundreds + "\nДесятки:" + this.tens + "\nЕдиницы:" + this.units);
//     }
// }
// object.output();

// Задание 2

// var works = {
//     a00: 'Вы живёте в тихой и уютной деревеньке на окраине страны.\n' +
//         'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
//         'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
//     a0: 2,
//     a1: '1 - Поспать до обеда\n',
//     a2: '2 - Пойти прогуляться\n',
//     b00: 'Вы решили поспать до обеда.\n' +
//         'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
//         'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
//     b0: 2,
//     b1: '1 - Пойти прогуляться\n',
//     b2: '2 - Пойти пообедать\n',
//     c00: 'Вы решили пойти прогуляться.\n' +
//         'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
//         'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
//         'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
//         'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
//         'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
//         'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
//     c0: 2,
//     c1: '1 - Подождать обед в столовой\n',
//     c2: '2 - Поколоть дров перед обедом\n',
//     d00: 'Здесь пишем текст повествования.\n' +
//         'Потом пишем несколько действий, например, два\n',
//     d0: 2, // кол-во ответов
//     d1: '1 - 1-й ответ\n',
//     d2: '2 - 2-й ответ\n',
// };

// var event, ok;

// var answers = []; // тут создаем массив

// do {//Выводим первый вопрос
//     ok = false;
//     event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
//     answers[0] = works.a00; // заполняем массив
//     if (event == -1) {
//         break;
//     }
//     else {
//         ok = isAnswer(works.a0, event);
//     }
// } while (!ok);
// switch (event) {
//     case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
//         do {
//             ok = false;
//             event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
//             answers[1] = works.a1; // заполняем массив
//             answers[2] = works.b00; // заполняем массив
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.b0, event);
//             }
//         } while (!ok);
//         switch (event) {
//             case 1:
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     answers[3] = works.b1; // заполняем массив
//                     answers[4] = works.d00; // заполняем массив
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         if (event == 1) {
//                             answers[5] = works.d1; // заполняем массив
//                         }
//                         else {
//                             answers[5] = works.d2; // заполняем массив
//                         }

//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break; // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно   
//             case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     answers[3] = works.b2; // заполняем массив
//                     answers[4] = works.d00; // заполняем массив
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         if (event == 1) {
//                             answers[5] = works.d1; // заполняем массив
//                         }
//                         else {
//                             answers[5] = works.d2; // заполняем массив
//                         }
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case -1: // Второе действие
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
//         do {
//             ok = false;
//             event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
//             answers[1] = works.a2; // заполняем массив
//             answers[2] = works.c00; // заполняем массив
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.c0, event);
//             }
//         } while (!ok);
//         switch (event) {
//             case 1: // Второе действие
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     answers[3] = works.c1; // заполняем массив
//                     answers[4] = works.d00; // заполняем массив
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         if (event == 1) {
//                             answers[5] = works.d1; // заполняем массив
//                         }
//                         else {
//                             answers[5] = works.d2; // заполняем массив
//                         }
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case 2: // Второе действие
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     answers[3] = works.c2; // заполняем массив
//                     answers[4] = works.d00; // заполняем массив

//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         if (event == 1) {
//                             answers[5] = works.d1; // заполняем массив
//                         }
//                         else {
//                             answers[5] = works.d2; // заполняем массив
//                         }
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case -1: // Второе действие
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case -1: // Первое действие
//         break;
//     default:
//         alert('Ошибка');
// }
// // запрос из массива на понравившийся вопрос и ответ на него
// do {
//     ok = false;
//     event = +prompt("Введите понравившийся вопрос:\n-1 - Выход из игры");
//     switch (event) {
//         case 1:
//             alert(answers[0] + "\n" + answers[1]);
//             ok = isAnswer(1, event);
//             break;
//         case 2:
//             alert(answers[2] + "\n" + answers[3]);
//             ok = isAnswer(2, event);
//             break;
//         case 3:
//             alert(answers[4] + "\n" + answers[5]);
//             ok = isAnswer(3, event);
//             break;
//         case -1:
//             break;
//         default:
//             ok = isAnswer(3, event);
//     }
// }
// while (!ok);

// alert('Спасибо за игру');
// //------------------------------------------
// function isAnswer(q, event) {
//     if (isNaN(event) || !isFinite(event)) {
//         alert('Вы ввели недопустимый символ');
//         return false;
//     }
//     else if (event < 1 || event > q) {
//         alert('Ваше число выходит из допустимого диапазона');
//         return false;
//     }
//     return true;
// }


// Задание 3

// var money = 0;
// var x = 0;
// var allmoney = 0;
// var mas = [
//     {
//         question: "На каком инструменте, как считается, играл древнерусский певец и сказитель Боян?",
//         answer1: "На гуслях",
//         answer2: "На виолончели",
//         answer3: "На баяне",
//         answer4: "На гитаре",
//         rightanswer: 1,
//         counts: 1,
//         score: 10000,
//         alert: questionAlert,
//     },
//     {
//         question: "В какой из этих стран один из официальных языков - французский?",
//         answer1: "Кения",
//         answer2: "Эквадор",
//         answer3: "Республика Гаити",
//         answer4: "Венесуэла",
//         rightanswer: 3,
//         counts: 1,
//         score: 20000,
//         alert: questionAlert,
//     },
//     {
//         question: "В каком из этих фильмов не снимался Александр Абдулов?",
//         answer1: "Карнавал",
//         answer2: "Московские каникулы",
//         answer3: "Чародеи",
//         answer4: "Убить дракона",
//         rightanswer: 2,
//         counts: 1,
//         score: 40000,
//         alert: questionAlert,
//     }
// ];

// for (var i = 0; i < mas.length; i++) {
//     allmoney += mas[i].score;

// }

// function questionAlert() {
//     var right = +prompt(this.question + "\n1-" + this.answer1 + "\n2-" + this.answer2 + "\n3-" + this.answer3 + "\n4-" + this.answer4);
//     if (right == this.rightanswer) {
//         money += this.score;
//         alert("Вы молодец!\nВаш выигрыш:" + money);
//         ++x;
//         if (money == allmoney) {
//             alert("Вы выиграли все деньги. Уходите!")
//         }
//         else {
//             mas[x].alert();
//         }
//     }
//     else if (this.counts > 0) {
//         alert("Не угадали\nПопробуйте еще раз")
//         --this.counts;
//         this.alert();
//     }
//     else {
//         alert("Вы проиграли");
//     }
// }
// mas[0].alert();