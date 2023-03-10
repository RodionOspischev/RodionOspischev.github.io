var questions = [
  {
    type: "choose",
    question: "<h3>Виберіть рядок, де правильно вказано кожну частину мови пронумерованих слів, які виділені вреченні: <br>Ти не (1)можеш віднайти (2)жодного друга, не (3)нашукавши разом із ними і двох-трьох (4)ворогів</h3>",
    answers: [
      "1-дієслово, 2-іменник, 3-прислівник, 4-іменник",
      "1-дієслово, 2-займенник, 3-дієприслівник, 4-іменник",
      "1-прислівник, 2-дієслово, 3-прикметник, 4-дієприкментник"
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Виберіть рядок, де правильно вказано кожну частину мови пронумерованих слів, які виділені вреченні: <br>(1)Приготувавши крем, (2)змастіть ним (3)випечені коржі, і - вуаля! - торт (зготовлено)</h3>",
    answers: [
      "1-дієприслівник, 2-дієслово (особова форма), 3- дієприкметник, 4- безособова форма дієслова",
      "1-дієприслівник, 2-дієслово (особова форма), 3- дієприкметник, 4- дієслово (особова форма)",
      "1- прислівник, 2 - дієслово, 3 - прикметник, 4 - безособова форма дієслова"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Граматично НЕПРАВИЛЬНИМ є словосполучення</h3>",
    answers: [
      "пробачте мене",
      "дякувати Богові",
      "ужити негайних заходів"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Граматично правильним є словосполучення</h3>",
    answers: [
      "сміятися над клоуном",
      "опанувати англійською мовою",
      "нехтувати становищем"
    ],
    correct: [3]
  },
  {
    type: "choose",
    question: "<h3>До дієслів належать усі слова рядка</h3>",
    answers: [
      "друкувати, надрукований, друкування, друкарський",
      "фарбований, пофарбувавши, фарбувати, пофарбую",
      "посолити, засолений, соління, солоний"
    ],
    correct: [2]
  }
];

$("document").ready(function () {
  $("#jQuizler").jQuizler(questions);
});