const steps = {
  "1": {
    question: "What's your birth year?",
    answers: [
      { label: "Over 50", value: "over 50", next: "2.5" },
      { label: "Under 50", value: "under 50", next: "2" }
    ]
  },
  "2": {
    question: "Have you been diagnosed with any active cancer?",
    answers: [
      { label: "Yes", value: "yes", next: "6" },
      { label: "Not sure", value: "not sure", next: "3" },
      { label: "No", value: "no", next: "3" }
    ]
  },
  "2.5": {
    question: "Have you been told you have high PSA levels?",
    answers: [
      { label: "Yes", value: "yes", next: "6" },
      { label: "Not sure", value: "not sure", next: "2" },
      { label: "No", value: "no", next: "2" }
    ]
  },
  "3": {
    question: "Diagnosed with blood disorder increasing clotting risk?",
    answers: [
      { label: "Yes", value: "yes", next: "6" },
      { label: "Not sure", value: "not sure", next: "4" },
      { label: "No", value: "no", next: "4" }
    ]
  },
  "4": {
    question: "Diagnosed with a blood disorder that increases clotting risk? (2)",
    answers: [
      { label: "Yes", value: "yes", next: "6" },
      { label: "Not sure", value: "not sure", next: "5" },
      { label: "No", value: "no", next: "5" }
    ]
  },
  "5": {
    question: "Has your doctor ever advised against testosterone treatment?",
    answers: [
      { label: "Yes", value: "yes", next: "6" },
      { label: "Not sure", value: "not sure", next: "99" },
      { label: "No", value: "no", next: "99" }
    ]
  },
  "6": {
    question: "Are you taking any medications for chest pain or heart problems (e.g. nitroglycerin)?",
    answers: [
      { label: "Yes", value: "yes", next: "10" },
      { label: "No", value: "no", next: "8" }
    ]
  },
  "8": {
    question: "Has a doctor told you that sex may be unsafe for your heart?",
    answers: [
      { label: "Yes", value: "yes", next: "10" },
      { label: "No", value: "no", next: "9" }
    ]
  },
  "9": {
    question: "The RTR Treatment may not be safe for you. Talk to your doctor. Try our Romance Boosted solutions instead.",
    answers: [
      { label: "OK", value: "ok", next: "11" }
    ]
  },
  "10": {
    question: "The TRT Treatment may not be safe for you. Please consult your physician.",
    answers: []
  },
  "11": {
    question: "ED Treatment",
    answers: [
      { label: "OK", value: "ok", next: "99" }
    ]
  },
  "99": {
    question: "Checkout",
    answers: [
      { label: "Submit", value: "submit", next: null }
    ]
  }
};