var count = 0;
var CounterMoney = 0;
// SELECTION RED & WHITE IN RADIO BUTTON//
function selectfun(n) {
  var num = n;
  for (var i = 0; i < 4; i++) {
    if (num === i) {
      if (num === 0) {
        document.getElementById("A").style.background = "red";
      }
      if (num === 1) {
        document.getElementById("B").style.background = "red";
      }
      if (num === 2) {
        document.getElementById("C").style.background = "red";
      }
      if (num === 3) {
        document.getElementById("D").style.background = "red";
      }
    } else {
      if (num != 0) {
        document.getElementById("A").style.background = "white";
      }
      if (num != 1) {
        document.getElementById("B").style.background = "white";
      }
      if (num != 2) {
        document.getElementById("C").style.background = "white";
      }
      if (num != 3) {
        document.getElementById("D").style.background = "white";
      }
    }
  }
}
//FIRST QUESTION & ANSWER//
function firstQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The International Literacy Day is observed on";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Literacy" id="Sep" onclick="selectfun(0)" /> Sep 8';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Literacy" id="Nov" onclick="selectfun(1)" /> Nov 28';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Literacy" id="May" onclick="selectfun(2)" /> May 2';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Literacy" id="September" onclick="selectfun(3)" /> Sep 22';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoA("Sep","Nov","May","September","Literacy")>Lock Kardo</button>';
}
// function lockKardoFirst() {
//   var num = 4;
//   Sep8 = document.getElementById("Sep");
//   Nov28 = document.getElementById("Nov");
//   May2 = document.getElementById("May");
//   Sep22 = document.getElementById("September");
//   toDisableOtherOption("Literacy");
//   if (Sep8.checked) {
//     num = 0;
//   } else if (Nov28.checked) {
//     num = 1;
//   } else if (May2.checked) {
//     num = 2;
//   } else if (Sep22.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Literacy");
//   }
//   if (num == 0) {
//     OptionA("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 1) {
//       OptionB("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//SECOND QUESTION & ANSWER//
function secondQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The language of Lakshadweep. a Union Territory of India, is";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Language" id="Tamil" onclick="selectfun(0)" /> Tamil';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Language" id="Hindi" onclick="selectfun(1)" /> Hindi';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Language" id="Malayalam" onclick="selectfun(2)" /> Malayalam';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Language" id="Telugu" onclick="selectfun(3)" /> Telugu';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoC("Tamil","Hindi","Malayalam","Telugu","Language")>Lock Kardo</button>';
}
// function lockKardoSecond() {
//   var num = 4;
//   Tamil = document.getElementById("Tamil");
//   Hindi = document.getElementById("Hindi");
//   Malayalam = document.getElementById("Malayalam");
//   Telugu = document.getElementById("Telugu");
//   toDisableOtherOption("Language");
//   if (Tamil.checked) {
//     num = 0;
//   } else if (Hindi.checked) {
//     num = 1;
//   } else if (Malayalam.checked) {
//     num = 2;
//   } else if (Telugu.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Language");
//   }
//   if (num == 2) {
//     OptionC("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//THIRD QUESTION & ANSWER//
function thirdQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Bahubali festival is related to ";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Festival" id="Islam" onclick="selectfun(0)" /> Islam';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Festival" id="Hinduism" onclick="selectfun(1)" /> Hinduism';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Festival" id="Buddhism" onclick="selectfun(2)" /> Buddhism';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Festival" id="Jainism" onclick="selectfun(3)" /> Jainism';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Islam","Hinduism","Buddhism","Jainism","Festival")>Lock Kardo</button>';
}

// function lockKardoThird() {
//   var num = 4;
//   Islam = document.getElementById("Islam");
//   Hinduism = document.getElementById("Hinduism");
//   Buddhism = document.getElementById("Buddhism");
//   Jainism = document.getElementById("Jainism");
//   toDisableOtherOption("Festival");
//   if (Islam.checked) {
//     num = 0;
//   } else if (Hinduism.checked) {
//     num = 1;
//   } else if (Buddhism.checked) {
//     num = 2;
//   } else if (Jainism.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Festival");
//   }
//   if (num == 3) {
//     OptionD("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//FOURTH QUESTION & ANSWER//
function fourthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "September 27 is celebrated every year as";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Celebrated" id="Teacher" onclick="selectfun(0)" /> Teachers Day';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Celebrated" id="National" onclick="selectfun(1)" /> National Integration Day';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Celebrated" id="World" onclick="selectfun(2)" /> World Tourism Day';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Celebrated" id="International" onclick="selectfun(3)" /> International Literacy Day';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoC("Teacher","National","World","International","Celebrated")>Lock Kardo</button>';
}

// function lockKardoFourth() {
//   var num = 4;
//   Teacher = document.getElementById("Teacher");
//   National = document.getElementById("National");
//   World = document.getElementById("World");
//   International = document.getElementById("International");
//   toDisableOtherOption("Celebrated");
//   if (Teacher.checked) {
//     num = 0;
//   } else if (National.checked) {
//     num = 1;
//   } else if (World.checked) {
//     num = 2;
//   } else if (International.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Celebrated");
//   }
//   if (num == 2) {
//     OptionC("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//FIFTH QUESTION & ANSWER//
function fifthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The death anniversary of which of the following leaders is observed as Martyrs' Day?";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Anniversary" id="Indira" onclick="selectfun(0)" /> Smt. Indira Gandhi';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Anniversary" id="Nehru" onclick="selectfun(1)" /> PI. Jawaharlal Nehru';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Anniversary" id="Gandhi" onclick="selectfun(2)" /> Mahatma Gandhi';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Anniversary" id="Bahadur" onclick="selectfun(3)" /> Lal Bahadur Shastri';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoC("Indira","Nehru","Gandhi","Bahadur","Anniversary")>Lock Kardo</button>';
}

// function lockKardoFifth() {
//   var num = 4;
//   Indira = document.getElementById("Indira");
//   Nehru = document.getElementById("Nehru");
//   Gandhi = document.getElementById("Gandhi");
//   Bahadur = document.getElementById("Bahadur");
//   toDisableOtherOption("Anniversary");
//   if (Indira.checked) {
//     num = 0;
//   } else if (Nehru.checked) {
//     num = 1;
//   } else if (Gandhi.checked) {
//     num = 2;
//   } else if (Bahadur.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Anniversary");
//   }
//   if (num == 2) {
//     OptionC("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//SIXTH QUESTION & ANSWER
function sixthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Who is the author of the epic 'Meghdoot'";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Meghdoot" id="Vishakadatta" onclick="selectfun(0)" /> Vishakadatta';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Meghdoot" id="Valmiki" onclick="selectfun(1)" /> Valmiki';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Meghdoot" id="Banabhatta" onclick="selectfun(2)" /> Banabhatta';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Meghdoot" id="Kalidas" onclick="selectfun(3)" /> Kalidas';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Vishakadatta","Valmiki","Banabhatta","Kalidas","Meghdoot")>Lock Kardo</button>';
}

// function lockKardoSixth() {
//   var num = 4;
//   Vishakadatta = document.getElementById("Vishakadatta");
//   Valmiki = document.getElementById("Valmiki");
//   Banabhatta = document.getElementById("Banabhatta");
//   Kalidas = document.getElementById("Kalidas");
//   toDisableOtherOption("Meghdoot");
//   if (Vishakadatta.checked) {
//     num = 0;
//   } else if (Valmiki.checked) {
//     num = 1;
//   } else if (Banabhatta.checked) {
//     num = 2;
//   } else if (Kalidas.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Meghdoot");
//   }
//   if (num == 3) {
//     OptionD("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//SEVENTH QUESTION & ANSWER
function seventhQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "'Good Friday' is observed to commemorate the event of";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Friday" id="Jesus" onclick="selectfun(0)" /> birth of Jesus Christ';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Friday" id="Peter" onclick="selectfun(1)" /> birth of St. Peter';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Friday" id="crucification" onclick="selectfun(2)" /> crucification of Jesus Christ';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Friday" id="rebirth" onclick="selectfun(3)" /> rebirth of Jesus Christ';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoC("Jesus","Peter","crucification","rebirth","Friday")>Lock Kardo</button>';
}

// function lockKardoSeventh() {
//   var num = 4;
//   Jesus = document.getElementById("Jesus");
//   Peter = document.getElementById("Peter");
//   crucification = document.getElementById("crucification");
//   rebirth = document.getElementById("rebirth");
//   toDisableOtherOption("Friday");
//   if (Jesus.checked) {
//     num = 0;
//   } else if (Peter.checked) {
//     num = 1;
//   } else if (crucification.checked) {
//     num = 2;
//   } else if (rebirth.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Friday");
//   }
//   if (num == 2) {
//     OptionC("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//

//EIGHT QUESTION & ANSWER
function eightQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Pongal is a popular festival of which state? ";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Pongal" id="Karnataka" onclick="selectfun(0)" /> Karnataka';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Pongal" id="Kerala" onclick="selectfun(1)" /> Kerala';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Pongal" id="Tamilnadu" onclick="selectfun(2)" /> Tamil Nadu ';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Pongal" id="Andhrapradesh" onclick="selectfun(3)" /> Andhra Pradesh';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoC("Karnataka","Kerala","Tamilnadu","Andhrapradesh","Pongal")>Lock Kardo</button>';
}

// function lockKardoEight() {
//   var num = 4;
//   Karnataka = document.getElementById("Karnataka");
//   Kerala = document.getElementById("Kerala");
//   Tamilnadu = document.getElementById("Tamilnadu");
//   Andhrapradesh = document.getElementById("Andhrapradesh");
//   toDisableOtherOption("Pongal");
//   if (Karnataka.checked) {
//     num = 0;
//   } else if (Kerala.checked) {
//     num = 1;
//   } else if (Tamilnadu.checked) {
//     num = 2;
//   } else if (Andhrapradesh.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Pongal");
//   }
//   if (num == 2) {
//     OptionC("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionC("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//NINTH QUESTION & ANSWER
function ninthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Ghototkach in Mahabharat was the son of";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Mahabharat" id="Duryodhana" onclick="selectfun(0)" /> Duryodhana';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Mahabharat" id="Arjuna" onclick="selectfun(1)" /> Arjuna';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Mahabharat" id="Yudhishthir" onclick="selectfun(2)" /> Yudhishthir';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Mahabharat" id="Bhima" onclick="selectfun(3)" /> Bhima';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Duryodhana","Arjuna","Yudhishthir","Bhima","Mahabharat")>Lock Kardo</button>';
}
// function lockKardoNinth() {
//   var num = 4;
//   Duryodhana = document.getElementById("Duryodhana");
//   Arjuna = document.getElementById("Arjuna");
//   Yudhishthir = document.getElementById("Yudhishthir");
//   Bhima = document.getElementById("Bhima");
//   toDisableOtherOption("Mahabharat");
//   if (Duryodhana.checked) {
//     num = 0;
//   } else if (Arjuna.checked) {
//     num = 1;
//   } else if (Yudhishthir.checked) {
//     num = 2;
//   } else if (Bhima.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Mahabharat");
//   }
//   if (num == 3) {
//     OptionD("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 1) {
//       OptionB("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionD("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
//----------------------------------------------------------------//
//TENTH QUESTION & ANSWER
function tenthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Which of the following Muslim festivals is based on the 'Holy Quran' ?";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Muslim" id="Zuha" onclick="selectfun(0)" /> Id -ul-Zuha';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Muslim" id="Fitr" onclick="selectfun(1)" /> Id -ul-Fitr';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Muslim" id="Bakri" onclick="selectfun(2)" /> Bakri-id';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Muslim" id="Moharram" onclick="selectfun(3)" /> Moharram';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoA("Zuha","Fitr","Bakri","Moharram","Muslim")>Lock Kardo</button>';
}
// function lockKardoTenth() {
//   var num = 4;
//   Zuha = document.getElementById("Zuha");
//   Fitr = document.getElementById("Fitr");
//   Bakri = document.getElementById("Bakri");
//   Moharram = document.getElementById("Moharram");
//   toDisableOtherOption("Muslim");
//   if (Zuha.checked) {
//     num = 0;
//   } else if (Fitr.checked) {
//     num = 1;
//   } else if (Bakri.checked) {
//     num = 2;
//   } else if (Moharram.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Muslim");
//   }
//   if (num == 0) {
//     OptionA("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 1) {
//       OptionB("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionA("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }
// //----------------------------------------------------------------//
//ELEVENTH QUESTION & ANSWER
function eleventhQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The first month of the Indian national calendar is";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Firstmonth" id="Magha" onclick="selectfun(0)" /> Magha';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Firstmonth" id="Chaitra" onclick="selectfun(1)" /> Chaitra';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Firstmonth" id="Ashadha" onclick="selectfun(2)" /> Ashadha';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Firstmonth" id="Vaishakha" onclick="selectfun(3)" /> Vaishakha';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoB("Magha","Chaitra","Ashadha","Vaishakha","Firstmonth")>Lock Kardo</button>';
}

// function lockKardoEleventh() {
//   var num = 4;
//   Magha = document.getElementById("Magha");
//   Chaitra = document.getElementById("Chaitra");
//   Ashadha = document.getElementById("Ashadha");
//   Vaishakha = document.getElementById("Vaishakha");
//   toDisableOtherOption("Firstmonth");
//   if (Magha.checked) {
//     num = 0;
//   } else if (Chaitra.checked) {
//     num = 1;
//   } else if (Ashadha.checked) {
//     num = 2;
//   } else if (Vaishakha.checked) {
//     num = 3;
//   } else {
//     document.getElementById("result-screen").innerHTML =
//       "Please select the answer";
//     toEnableOtherOption("Firstmonth");
//   }
//   if (num == 1) {
//     OptionB("sahi");
//     counterAmount();
//     sahiJawabResult();
//   } else {
//     if (num == 0) {
//       OptionA("galat");
//       OptionB("sahi");
//       galatJawabResult();
//     } else if (num == 2) {
//       OptionC("galat");
//       OptionB("sahi");
//       galatJawabResult();
//     } else if (num == 3) {
//       OptionD("galat");
//       OptionB("sahi");
//       galatJawabResult();
//     } else
//       document.getElementById("result-screen").innerHTML =
//         "Please select the answer!";
//   }
// }

//TWELEVETH QUESTION & ANSWER
function twelvthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Which of the following is not a dance from Kerala?";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Dance" id="Kathakali" onclick="selectfun(0)" /> Kathakali';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Dance" id="Mohiniattam" onclick="selectfun(1)" /> Mohiniattam';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Dance" id="Ottanthullal" onclick="selectfun(2)" /> Ottan Thullal ';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Dance" id="Yaksha" onclick="selectfun(3)" /> Yaksha Gana';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Kathakali","Mohiniattam","Ottanthullal","Yaksha","Dance")>Lock Kardo</button>';
}
//THIRTEEN QUESTION & ANSWER
function thirteenQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The festival of Nabanna is celebrated predominatly in";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Nabanna" id="Andhra" onclick="selectfun(0)" /> Andhra Pradesh';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Nabanna" id="Rajasthan" onclick="selectfun(1)" /> Rajasthan';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Nabanna" id="Kanataka" onclick="selectfun(2)" /> Kanataka';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Nabanna" id="Orissa" onclick="selectfun(3)" /> Orissa';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Andhra","Rajasthan","Kanataka","Orissa","Nabanna")>Lock Kardo</button>';
}
//FOURTHEEN QUESTION & ANSWER
function fourtheenQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "The Lalit Kala Academy is devoted to the promotion of";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Lalit" id="DD" onclick="selectfun(0)" /> Dance & Drama';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Lalit" id="Finearts" onclick="selectfun(1)" /> Fine Arts';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Lalit" id="Literature" onclick="selectfun(2)" /> Literature';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Lalit" id="Music" onclick="selectfun(3)" /> Music';
  document.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoB("DD","Finearts","Literature","Music","Lalit")>Lock Kardo</button>';
}
//FIFTEENTH QUESTION & ANSWER
function fifteenthQuestion() {
  document.getElementById("Question-Box").innerHTML =
    "Which one of the following is essentially a solo dance? ";
  document.getElementById("A").innerHTML =
    'A: <input type="radio" name="Solo" id="Kuchipudi" onclick="selectfun(0)" /> Kuchipudi';
  document.getElementById("B").innerHTML =
    'B: <input type="radio" name="Solo" id="Kathak" onclick="selectfun(1)" /> Kathak';

  document.getElementById("C").innerHTML =
    'C: <input type="radio" name="Solo" id="Manipuri" onclick="selectfun(2)" /> Manipuri';
  document.getElementById("D").innerHTML =
    'D: <input type="radio" name="Solo" id="Mohiniattamm" onclick="selectfun(3)" /> Mohiniattam';
  ocument.getElementById("button-lock").innerHTML =
    '<button class="Lock-box" onclick=lockKardoD("Kuchipudi","Kathak","Manipuri","Mohiniattamm","Solo")>Lock Kardo</button>';
}
//CHANGING NEXT QUESTION//

function next() {
  count = count + 1;
  document.getElementById("result-screen").innerHTML = "";
  //   count + '<br> <button onclick="next()">NEXT</button>';
  ResetColor();
  switch (count) {
    //1st Question//
    case 1:
      firstQuestion();
      break;
    //2nd Question//
    case 2:
      secondQuestion();
      break;
    //3rd Question//
    case 3:
      thirdQuestion();
      break;
    //4th Question//
    case 4:
      fourthQuestion();
      break;
    //5th Question//
    case 5:
      fifthQuestion();
      break;
    //6th Question //
    case 6:
      sixthQuestion();
      break;
    //7th Question //
    case 7:
      seventhQuestion();
      break;
    //8th Question//
    case 8:
      eightQuestion();
      break;
    //9th Question
    case 9:
      ninthQuestion();
      break;
    //10th Question
    case 10:
      tenthQuestion();
      break;
    //11th Question
    case 11:
      eleventhQuestion();
      break;
    //12th Question
    case 12:
      twelvthQuestion();
      break;
    //13th Question
    case 13:
      thirteenQuestion();
      break;
    //14th Question
    case 14:
      fourtheenQuestion();
      break;
    //15th Question
    case 15:
      fifteenthQuestion();
      break;
  }
}
// LOCK KARDO FUNCTION//
function lockKardo() {
  var num = 4;
  Mumbai = document.getElementById("Mumbai");
  Bangalore = document.getElementById("Bangalore");
  Chennai = document.getElementById("Chennai");
  Delhi = document.getElementById("Delhi");
  toDisableOtherOption("capital");
  if (Mumbai.checked) {
    num = 2;
  } else if (Bangalore.checked) {
    num = 3;
  } else if (Chennai.checked) {
    num = 1;
  } else if (Delhi.checked) {
    num = 0;
  } else {
    document.getElementById("result-screen").innerHTML =
      "Please select the answer";
    toEnableOtherOption("capital");
  }
  if (num == 0) {
    OptionA("sahi");
    counterAmount();
    sahiJawabResult();
  } else {
    if (num == 1) {
      OptionB("galat");
      OptionA("sahi");
      galatJawabResult();
    } else if (num == 2) {
      OptionC("galat");
      OptionA("sahi");
      galatJawabResult();
    } else if (num == 3) {
      OptionD("galat");
      OptionA("sahi");
      galatJawabResult();
    } else
      document.getElementById("result-screen").innerHTML =
        "Please select the answer!";
  }
}

// Option A BackGround Color
function OptionA(Jawab) {
  var answer = Jawab;
  if (Jawab == "sahi") {
    document.getElementById("A").style.background = "green";
  } else {
    document.getElementById("A").style.background = "red";
  }
}
// Option B BackGround Color
function OptionB(Jawab) {
  var answer = Jawab;
  if (Jawab == "sahi") {
    document.getElementById("B").style.background = "green";
  } else {
    document.getElementById("B").style.background = "red";
  }
}
// Option C BackGround Color
function OptionC(Jawab) {
  var answer = Jawab;
  if (Jawab == "sahi") {
    document.getElementById("C").style.background = "green";
  } else {
    document.getElementById("C").style.background = "red";
  }
}
// Option D BackGround Color
function OptionD(Jawab) {
  var answer = Jawab;
  if (Jawab == "sahi") {
    document.getElementById("D").style.background = "green";
  } else {
    document.getElementById("D").style.background = "red";
  }
}

//Reset all the option color
function ResetColor() {
  document.getElementById("A").style.background = "white";
  document.getElementById("B").style.background = "white";
  document.getElementById("C").style.background = "white";
  document.getElementById("D").style.background = "white";
}
// Correct Answer in Result Screen Function //
function sahiJawabResult() {
  document.getElementById("result-screen").innerHTML =
    "<b class='sahiJawab'>Sahi Jawab</b> <br> <button class='nextButton'onclick='next()'>NEXT</button>";
}
//Wrong Answer Function//
function galatJawabResult() {
  document.getElementById("result-screen").innerHTML =
    "<b class='galatJawab'>Galat Jawab</b>";
}

//To Disable the radios after selecting the answer
function toDisableOtherOption(nameRadio) {
  var nameRadio = nameRadio;
  var radios = document.getElementsByName(nameRadio);
  for (var i = 0, iLen = radios.length; i < iLen; i++) {
    radios[i].disabled = true;
  }
}

//To Enable the radios option if nothing is selected
function toEnableOtherOption(nameRadio) {
  var nameRadio = nameRadio;
  var radios = document.getElementsByName(nameRadio);
  for (var i = 0, iLen = radios.length; i < iLen; i++) {
    radios[i].disabled = false;
  }
}

// AMOUNT COUNTER INCREASE IF YOU ANSWER RIGHT.
function counterAmount() {
  CounterMoney = CounterMoney + 1;

  switch (CounterMoney) {
    case 1:
      document.getElementById("Thousand10").style.background = "orange";
      document.getElementById("Thousand5").style.background = "green";
      break;

    case 2:
      document.getElementById("Thousand20").style.background = "orange";
      document.getElementById("Thousand10").style.background = "green";
      break;

    case 3:
      document.getElementById("Thousand40").style.background = "orange";
      document.getElementById("Thousand20").style.background = "green";
      break;

    case 4:
      document.getElementById("Thousand80").style.background = "orange";
      document.getElementById("Thousand40").style.background = "green";
      break;

    case 5:
      document.getElementById("Lakh1").style.background = "orange";
      document.getElementById("Thousand80").style.background = "green";
      break;

    case 6:
      document.getElementById("Lakh3").style.background = "orange";
      document.getElementById("Lakh1").style.background = "green";
      break;

    case 7:
      document.getElementById("Lakh6").style.background = "orange";
      document.getElementById("Lakh3").style.background = "green";
      break;

    case 8:
      document.getElementById("Lakh12").style.background = "orange";
      document.getElementById("Lakh6").style.background = "green";
      break;

    case 9:
      document.getElementById("Lakh25").style.background = "orange";
      document.getElementById("Lakh12").style.background = "green";
      break;

    case 10:
      document.getElementById("Lakh50").style.background = "orange";
      document.getElementById("Lakh25").style.background = "green";
      break;

    case 11:
      document.getElementById("crore1").style.background = "orange";
      document.getElementById("Lakh50").style.background = "green";
      break;

    case 12:
      document.getElementById("crores3").style.background = "orange";
      document.getElementById("crore1").style.background = "green";
      break;

    case 13:
      document.getElementById("crores5").style.background = "orange";
      document.getElementById("crores3").style.background = "green";
      break;

    case 14:
      document.getElementById("crores7").style.background = "orange";
      document.getElementById("crores5").style.background = "green";
      break;

    case 15:
      // document.getElementById("Lakh3").style.background = "orange";
      document.getElementById("crores7").style.background = "green";
      break;
  }
}
//---------------------------------------------------------------------//
//--------------------------OPTION A CORRECT Function----------------//
function lockKardoA(optionA, optionB, optionC, optionD, RADIOName) {
  var num = 4;
  A_Option = document.getElementById(optionA);
  B_Option = document.getElementById(optionB);
  C_Option = document.getElementById(optionC);
  D_Option = document.getElementById(optionD);
  toDisableOtherOption(RADIOName);
  if (A_Option.checked) {
    num = 0;
  } else if (B_Option.checked) {
    num = 1;
  } else if (C_Option.checked) {
    num = 2;
  } else if (D_Option.checked) {
    num = 3;
  } else {
    document.getElementById("result-screen").innerHTML =
      "Please select the answer";
    toEnableOtherOption(RADIOName);
  }
  if (num == 0) {
    OptionA("sahi");
    counterAmount();
    sahiJawabResult();
  } else {
    if (num == 1) {
      OptionB("galat");
      OptionA("sahi");
      galatJawabResult();
    } else if (num == 2) {
      OptionC("galat");
      OptionA("sahi");
      galatJawabResult();
    } else if (num == 3) {
      OptionD("galat");
      OptionA("sahi");
      galatJawabResult();
    } else
      document.getElementById("result-screen").innerHTML =
        "Please select the answer!";
  }
}

//---------------------------------------------------------------------//
//--------------------------OPTION B CORRECT Function----------------//
function lockKardoB(optionA, optionB, optionC, optionD, RADIOName) {
  var num = 4;
  A_Option = document.getElementById(optionA);
  B_Option = document.getElementById(optionB);
  C_Option = document.getElementById(optionC);
  D_Option = document.getElementById(optionD);
  toDisableOtherOption(RADIOName);
  if (A_Option.checked) {
    num = 0;
  } else if (B_Option.checked) {
    num = 1;
  } else if (C_Option.checked) {
    num = 2;
  } else if (D_Option.checked) {
    num = 3;
  } else {
    document.getElementById("result-screen").innerHTML =
      "Please select the answer";
    toEnableOtherOption(RADIOName);
  }
  if (num == 1) {
    OptionB("sahi");
    counterAmount();
    sahiJawabResult();
  } else {
    if (num == 0) {
      OptionA("galat");
      OptionB("sahi");
      galatJawabResult();
    } else if (num == 2) {
      OptionC("galat");
      OptionB("sahi");
      galatJawabResult();
    } else if (num == 3) {
      OptionD("galat");
      OptionB("sahi");
      galatJawabResult();
    } else
      document.getElementById("result-screen").innerHTML =
        "Please select the answer!";
  }
}

//---------------------------------------------------------------------//
//--------------------------OPTION C CORRECT Function----------------//
function lockKardoC(optionA, optionB, optionC, optionD, RADIOName) {
  var num = 4;
  A_Option = document.getElementById(optionA);
  B_Option = document.getElementById(optionB);
  C_Option = document.getElementById(optionC);
  D_Option = document.getElementById(optionD);
  toDisableOtherOption(RADIOName);
  if (A_Option.checked) {
    num = 0;
  } else if (B_Option.checked) {
    num = 1;
  } else if (C_Option.checked) {
    num = 2;
  } else if (D_Option.checked) {
    num = 3;
  } else {
    document.getElementById("result-screen").innerHTML =
      "Please select the answer";
    toEnableOtherOption(RADIOName);
  }
  if (num == 2) {
    OptionC("sahi");
    counterAmount();
    sahiJawabResult();
  } else {
    if (num == 0) {
      OptionA("galat");
      OptionC("sahi");
      galatJawabResult();
    } else if (num == 1) {
      OptionB("galat");
      OptionC("sahi");
      galatJawabResult();
    } else if (num == 3) {
      OptionD("galat");
      OptionC("sahi");
      galatJawabResult();
    } else
      document.getElementById("result-screen").innerHTML =
        "Please select the answer!";
  }
}

//---------------------------------------------------------------------//
//--------------------------OPTION D CORRECT Function----------------//
function lockKardoD(optionA, optionB, optionC, optionD, RADIOName) {
  var num = 4;
  A_Option = document.getElementById(optionA);
  B_Option = document.getElementById(optionB);
  C_Option = document.getElementById(optionC);
  D_Option = document.getElementById(optionD);
  toDisableOtherOption(RADIOName);
  if (A_Option.checked) {
    num = 0;
  } else if (B_Option.checked) {
    num = 1;
  } else if (C_Option.checked) {
    num = 2;
  } else if (D_Option.checked) {
    num = 3;
  } else {
    document.getElementById("result-screen").innerHTML =
      "Please select the answer";
    toEnableOtherOption(RADIOName);
  }
  if (num == 3) {
    OptionD("sahi");
    counterAmount();
    sahiJawabResult();
  } else {
    if (num == 0) {
      OptionA("galat");
      OptionD("sahi");
      galatJawabResult();
    } else if (num == 1) {
      OptionB("galat");
      OptionD("sahi");
      galatJawabResult();
    } else if (num == 2) {
      OptionC("galat");
      OptionD("sahi");
      galatJawabResult();
    } else
      document.getElementById("result-screen").innerHTML =
        "Please select the answer!";
  }
}
