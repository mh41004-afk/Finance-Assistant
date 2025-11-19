onEvent("9incon", "click", function( ) {
  setScreen("infoscrn");
});
onEvent("savassbtn", "click", function( ) {
  setScreen("SavingAssistant");
});
onEvent("finserbtn", "click", function( ) {
  setScreen("FincalServices");
});
onEvent("invbtn", "click", function( ) {
  setScreen("Investing");
});
onEvent("POIbtn", "click", function() {
  setScreen("PowerOfInterest");
});
onEvent("quizbtn", "click", function() {
  setScreen("Quizscrn1");
});
onEvent("Back1", "click", function( ) {
  setScreen("infoscrn");
});
onEvent("Back2", "click", function( ) {
  setScreen("infoscrn");
});
onEvent("Back3", "click", function( ) {
  setScreen("infoscrn");
});
onEvent("Back4", "click", function( ) {
  setScreen("infoscrn");
});
onEvent("Donebtn", "click", function( ) {
  setScreen("Donescrn");
});
//review system 
onEvent("Star1", "click", function( ) {
  setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  if ("Star1") {
    setText("txtwhy", "We see that you left 1 star. How could we do better?");
    setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star2", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("Star3", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("Star4", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("star5", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setPosition("review", 0, 300, 350, 100);
    setText("skip", "Sumbit");
  }
});
onEvent("Star2", "click", function( ) {
  setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  if ("Star2") {
    setText("txtwhy", "We see that you left 2 star. How could we do better?");
    setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star3", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("Star4", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("star5", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setPosition("review", 0, 300, 350, 100);
    setText("skip", "Sumbit");
  }
});
onEvent("Star3", "click", function( ) {
  setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  if ("Star3") {
    setText("txtwhy", "We see that you left 3 star. How could we do better?");
    setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star4", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setImageURL("star5", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
    setPosition("review", 0, 300, 350, 100);
    setText("skip", "Sumbit");
  }
});
onEvent("Star4", "click", function( ) {
  setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star4", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  if ("Star4") {
    setText("txtwhy", "Thank you for giving our app a 4 star review!");
    setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star4", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("star5", "assets/Screenshot-2025-09-24-1.23.09-PM.png");
  }
});
onEvent("star5", "click", function( ) {
  setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("Star4", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  setImageURL("star5", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  if ("Star5") {
    setText("txtwhy", "Thank you for giving our app a 5 star review!");
    setImageURL("Star1", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star2", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star3", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("Star4", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
    setImageURL("star5", "assets/Screenshot-2025-09-24-10.14.30-AM.png");
  }
});
onEvent("skip", "click", function( ) {
  setScreen("thzscrn");
});
onEvent("401Kbut", "click", function( ) {
  open("https://www.investor.gov/additional-resources/retirement-toolkit/employer-sponsored-plans/traditional-and-roth-401k-plans");
});
onEvent("savassi", "click", function( ) {
  open("https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator");
});
onEvent("powincalcul", "click", function( ) {
  open("https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator");
});
// quiz system below
onEvent("correct1", "click", function( ) {
  setScreen("Quizscrn2");
});
onEvent("correct2", "click", function( ) {
  setScreen("Quizscrn3");
});
onEvent("correct3", "click", function( ) {
  setScreen("Quizscrn4");
});
onEvent("correct4", "click", function( ) {
  setScreen("Quizscrn5");
});
onEvent("correct5", "click", function( ) {
  setScreen("Quizscrn6");
});
onEvent("correct6", "click", function( ) {
  setScreen("Quizscrn7");
});
onEvent("correct7", "click", function( ) {
  setScreen("Quizscrn8");
});
onEvent("correct8", "click", function( ) {
  setScreen("Quizscrn9");
});
onEvent("correct9", "click", function( ) {
  setScreen("Quizscrn10");
});
onEvent("correct10", "click", function( ) {
  setScreen("quizresultscrn");
});
onEvent("incorrect1", "click", function( ) {
  setScreen("Quizscrn2");
  setText("quizreuslt1", "Question 1: ❌You  answered Yes");
});
onEvent("incorrect2", "click", function( ) {
  setScreen("Quizscrn3");
  setText("quizreuslt2", "Question 2: ❌ You answered No");
});
onEvent("incorrect3", "click", function( ) {
  setScreen("Quizscrn4");
  setText("quizreuslt3", "Question 3: ❌ You answered No");
});
onEvent("incorrect4", "click", function( ) {
  setScreen("Quizscrn5");
  setText("quizreuslt4", "Question 4: ❌ You answered Yes");
});
onEvent("incorrect5", "click", function( ) {
  setScreen("Quizscrn6");
  setText("quizreuslt5", "Question 5: ❌ You answered Yes");
});
onEvent("incorrect6", "click", function( ) {
  setScreen("Quizscrn7");
  setText("quizreuslt6", "Question 6: ❌ You answered No");
});
onEvent("incorrect7", "click", function( ) {
  setScreen("Quizscrn8");
  setText("quizreuslt7", "Question 7: ❌ You answered No");
});
onEvent("incorrect8", "click", function( ) {
  setScreen("Quizscrn9");
  setText("quizreuslt8", "Question 8: ❌ You answered No");
});
onEvent("incorrect9", "click", function( ) {
  setScreen("Quizscrn10");
  setText("quizreuslt9", "Question 9: ❌ You answered No");
});
onEvent("incorrect10", "click", function( ) {
  setScreen("quizresultscrn");
  setText("quizreuslt10", "Question 10: ❌ You answered Yes");
});
onEvent("resultarrow", "click", function( ) {
  setScreen("infoscrn");
  setText("quizreuslt1", "Question 1: ✅ You answered No");
  setText("quizreuslt2", "Question 2: ✅ You answered Yes");
  setText("quizreuslt3", "Question 3: ✅ You answered Yes");
  setText("quizreuslt4", "Question 4: ✅ You answered No");
  setText("quizreuslt5", "Question 5: ✅ You answered No");
  setText("quizreuslt6", "Question 6: ✅ You answered Yes");
  setText("quizreuslt1", "Question 7: ✅ You answered Yes");
  setText("quizreuslt1", "Question 8: ✅ You answered Yes");
  setText("quizreuslt1", "Question 9: ✅ You answered Yes");
  setText("quizreuslt1", "Question 10: ✅ You answered No");
});
//The code above is so you can do the quiz again
onEvent("quizbtn", "click", function( ) {
  setScreen("Quizscrn1");
});
