// ================== Screen Navigation ==================
const screens = {
  "9incon": "infoscrn",
  "savassbtn": "SavingAssistant",
  "finserbtn": "FincalServices",
  "invbtn": "Investing",
  "POIbtn": "PowerOfInterest",
  "quizbtn": "Quizscrn1",
  "Back1": "infoscrn",
  "Back2": "infoscrn",
  "Back3": "infoscrn",
  "Back4": "infoscrn",
  "Donebtn": "Donescrn"
};

for (const btn in screens) {
  onEvent(btn, "click", () => setScreen(screens[btn]));
}

// ================== Review System ==================
const starIDs = ["Star1", "Star2", "Star3", "Star4", "star5"];
const starFull = "Screenshot-2025-09-24-10.14.30-AM.png";
const starEmpty = "Screenshot-2025-09-24-1.23.09-PM.png";

function updateStars(selected) {
  for (let i = 0; i < starIDs.length; i++) {
    setImageURL(starIDs[i], i <= selected ? starFull : starEmpty);
  }
}

function getStarText(star) {
  if (star < 4) {
    return `We see that you left ${star} star${star > 1 ? "s" : ""}. How could we do better?`;
  } else {
    return `Thank you for giving our app a ${star} star review!`;
  }
}

starIDs.forEach((id, index) => {
  onEvent(id, "click", () => {
    updateStars(index);
    setText("txtwhy", getStarText(index + 1));
    if (index < 3) {
      setPosition("review", 0, 300, 350, 100);
      setText("skip", "Submit");
    }
  });
});

onEvent("skip", "click", () => setScreen("thzscrn"));

// ================== External Links ==================
const links = {
  "401Kbut": "https://www.investor.gov/additional-resources/retirement-toolkit/employer-sponsored-plans/traditional-and-roth-401k-plans",
  "savassi": "https://www.investor.gov/financial-tools-calculators/calculators/savings-goal-calculator",
  "powincalcul": "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
};

for (const btn in links) {
  onEvent(btn, "click", () => open(links[btn]));
}

// ================== Quiz System ==================
const correctBtns = ["correct1","correct2","correct3","correct4","correct5","correct6","correct7","correct8","correct9","correct10"];
const screensNext = ["Quizscrn2","Quizscrn3","Quizscrn4","Quizscrn5","Quizscrn6","Quizscrn7","Quizscrn8","Quizscrn9","Quizscrn10","quizresultscrn"];
const incorrectBtns = ["incorrect1","incorrect2","incorrect3","incorrect4","incorrect5","incorrect6","incorrect7","incorrect8","incorrect9","incorrect10"];
const incorrectTexts = [
  "Question 1: ❌You answered Yes",
  "Question 2: ❌ You answered No",
  "Question 3: ❌ You answered No",
  "Question 4: ❌ You answered Yes",
  "Question 5: ❌ You answered Yes",
  "Question 6: ❌ You answered No",
  "Question 7: ❌ You answered No",
  "Question 8: ❌ You answered No",
  "Question 9: ❌ You answered No",
  "Question 10: ❌ You answered Yes"
];

correctBtns.forEach((btn, index) => onEvent(btn, "click", () => setScreen(screensNext[index])));
incorrectBtns.forEach((btn, index) => onEvent(btn, "click", () => {
  setScreen(screensNext[index]);
  setText(`quizreuslt${index+1}`, incorrectTexts[index]);
}));

// Reset quiz results
onEvent("resultarrow", "click", () => {
  setScreen("infoscrn");
  const correctTexts = [
    "Question 1: ✅ You answered No",
    "Question 2: ✅ You answered Yes",
    "Question 3: ✅ You answered Yes",
    "Question 4: ✅ You answered No",
    "Question 5: ✅ You answered No",
    "Question 6: ✅ You answered Yes",
    "Question 7: ✅ You answered Yes",
    "Question 8: ✅ You answered Yes",
    "Question 9: ✅ You answered Yes",
    "Question 10: ✅ You answered No"
  ];
  correctTexts.forEach((txt, i) => setText(`quizreuslt${i+1}`, txt));
});

// Restart quiz
onEvent("quizbtn", "click", () => setScreen("Quizscrn1"));
