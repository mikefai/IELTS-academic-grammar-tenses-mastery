// IELTS Tenses Test - Application Logic
document.addEventListener("DOMContentLoaded", () => {
  // State
  let questions = typeof tensesQuestions !== "undefined" ? tensesQuestions : [];
  let currentIndex = 0;
  let userAnswers = {}; // { questionId: selectedOptionIndex }
  let flaggedQuestions = new Set();
  let mode = "exam"; // 'exam' | 'practice'
  let isSubmitted = false;
  let timerSeconds = 60 * 60; // 60 minutes default
  let timerInterval = null;
  let currentFilter = "all";
  let reviewFilter = "all"; // 'all' | 'incorrect' | 'flagged'

  // DOM Elements
  const timerDisplay = document.getElementById("timerDisplay");
  const timerBox = document.getElementById("timerBox");
  const modeSelect = document.getElementById("modeSelect");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const categoryFilterSelect = document.getElementById("categoryFilterSelect");
  
  const questionCard = document.getElementById("questionCard");
  const questionCategoryTag = document.getElementById("questionCategoryTag");
  const questionTenseTag = document.getElementById("questionTenseTag");
  const flagBtn = document.getElementById("flagBtn");
  const questionNumberLead = document.getElementById("questionNumberLead");
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const explanationContainer = document.getElementById("explanationContainer");
  const explanationContent = document.getElementById("explanationContent");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const clearAnswerBtn = document.getElementById("clearAnswerBtn");
  const submitExamBtn = document.getElementById("submitExamBtn");
  const printExamBtn = document.getElementById("printExamBtn");

  const questionGrid = document.getElementById("questionGrid");
  const answeredCountEl = document.getElementById("answeredCount");
  const totalCountEl = document.getElementById("totalCount");
  const progressBarFill = document.getElementById("progressBarFill");

  const resultsModal = document.getElementById("resultsModal");
  const modalScoreNum = document.getElementById("modalScoreNum");
  const modalBandPill = document.getElementById("modalBandPill");
  const modalFeedback = document.getElementById("modalFeedback");
  const modalBreakdown = document.getElementById("modalBreakdown");
  const reviewAllBtn = document.getElementById("reviewAllBtn");
  const reviewMistakesBtn = document.getElementById("reviewMistakesBtn");
  const retakeBtn = document.getElementById("retakeBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Initialize
  init();

  function init() {
    populateCategoryDropdown();
    loadSavedState();
    startTimer();
    renderQuestion(currentIndex);
    renderGrid();
    updateProgress();
    attachEventListeners();
  }

  // Categories Extraction
  function getCategories() {
    const set = new Set();
    questions.forEach(q => set.add(q.category));
    return Array.from(set);
  }

  function populateCategoryDropdown() {
    const cats = getCategories();
    categoryFilterSelect.innerHTML = '<option value="all">All Tense Sections (100)</option>';
    cats.forEach(cat => {
      const count = questions.filter(q => q.category === cat).length;
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = `${cat} (${count})`;
      categoryFilterSelect.appendChild(opt);
    });
  }

  // Timer
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    updateTimerDisplay();

    timerInterval = setInterval(() => {
      if (mode === "exam" && !isSubmitted) {
        if (timerSeconds > 0) {
          timerSeconds--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          alert("Time is up! Your exam will now be submitted.");
          submitTest();
        }
      } else if (mode === "practice" && !isSubmitted) {
        timerSeconds++;
        updateTimerDisplay();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerDisplay.textContent = formatted;

    if (mode === "exam") {
      if (timerSeconds <= 300 && timerSeconds > 60) {
        timerBox.className = "timer-box warning";
      } else if (timerSeconds <= 60) {
        timerBox.className = "timer-box danger";
      } else {
        timerBox.className = "timer-box";
      }
    } else {
      timerBox.className = "timer-box";
    }
  }

  // Render Current Question
  function renderQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;
    const q = questions[currentIndex];

    questionNumberLead.textContent = `Question ${q.id} of ${questions.length}`;
    questionCategoryTag.textContent = q.category;
    questionTenseTag.textContent = q.tense || "Grammar Focus";
    questionText.textContent = q.question;

    // Flag button state
    if (flaggedQuestions.has(q.id)) {
      flagBtn.classList.add("flagged");
      flagBtn.innerHTML = `<span>🚩</span> Flagged`;
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.innerHTML = `<span>🏳️</span> Flag for Review`;
    }

    // Render Options
    optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";

      const letterSpan = document.createElement("span");
      letterSpan.className = "option-letter";
      letterSpan.textContent = letters[optIdx];

      const textSpan = document.createElement("span");
      textSpan.textContent = optText;

      btn.appendChild(letterSpan);
      btn.appendChild(textSpan);

      const isSelected = userAnswers[q.id] === optIdx;
      if (isSelected) {
        btn.classList.add("selected");
      }

      // Check practice or submitted evaluation states
      if (isSubmitted || (mode === "practice" && userAnswers[q.id] !== undefined)) {
        if (optIdx === q.answer) {
          btn.classList.add("correct-choice");
        } else if (isSelected && optIdx !== q.answer) {
          btn.classList.add("wrong-choice");
        }
      }

      btn.addEventListener("click", () => {
        if (isSubmitted) return;
        selectOption(q.id, optIdx);
      });

      optionsContainer.appendChild(btn);
    });

    // Explanation Box
    if (isSubmitted || (mode === "practice" && userAnswers[q.id] !== undefined)) {
      explanationContainer.style.display = "block";
      explanationContent.innerHTML = `
        <strong>Key Rule / Reason:</strong> ${q.explanation}
      `;
    } else {
      explanationContainer.style.display = "none";
    }

    // Navigation buttons state
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questions.length - 1;

    renderGrid();
    saveState();
  }

  function selectOption(questionId, optionIndex) {
    userAnswers[questionId] = optionIndex;
    renderQuestion(currentIndex);
    renderGrid();
    updateProgress();
  }

  function clearAnswer(questionId) {
    if (userAnswers[questionId] !== undefined) {
      delete userAnswers[questionId];
      renderQuestion(currentIndex);
      renderGrid();
      updateProgress();
    }
  }

  function toggleFlag(questionId) {
    if (flaggedQuestions.has(questionId)) {
      flaggedQuestions.delete(questionId);
    } else {
      flaggedQuestions.add(questionId);
    }
    renderQuestion(currentIndex);
    renderGrid();
  }

  // Question Grid Palette
  function renderGrid() {
    questionGrid.innerHTML = "";
    
    questions.forEach((q, idx) => {
      // Check category filter
      if (currentFilter !== "all" && q.category !== currentFilter) {
        return;
      }

      // Check review filter
      if (isSubmitted) {
        const isCorrect = userAnswers[q.id] === q.answer;
        if (reviewFilter === "incorrect" && isCorrect) return;
        if (reviewFilter === "flagged" && !flaggedQuestions.has(q.id)) return;
      }

      const btn = document.createElement("button");
      btn.className = "grid-btn";
      btn.textContent = q.id;

      if (idx === currentIndex) {
        btn.classList.add("active");
      }

      if (userAnswers[q.id] !== undefined) {
        btn.classList.add("answered");
      }

      if (flaggedQuestions.has(q.id)) {
        btn.classList.add("flagged");
      }

      if (isSubmitted) {
        if (userAnswers[q.id] === q.answer) {
          btn.classList.add("correct-eval");
        } else {
          btn.classList.add("wrong-eval");
        }
      }

      btn.addEventListener("click", () => {
        renderQuestion(idx);
      });

      questionGrid.appendChild(btn);
    });
  }

  function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    answeredCountEl.textContent = answeredCount;
    totalCountEl.textContent = questions.length;
    const pct = (answeredCount / questions.length) * 100;
    progressBarFill.style.width = `${pct}%`;
  }

  // Submit and Calculate Band Score
  function submitTest() {
    const totalAnswered = Object.keys(userAnswers).length;
    if (totalAnswered < questions.length && !confirm(`You have answered ${totalAnswered} of ${questions.length} questions. Are you sure you want to submit the exam now?`)) {
      return;
    }

    isSubmitted = true;
    clearInterval(timerInterval);

    // Calculate score
    let score = 0;
    const catStats = {};

    questions.forEach(q => {
      if (!catStats[q.category]) {
        catStats[q.category] = { correct: 0, total: 0 };
      }
      catStats[q.category].total++;

      if (userAnswers[q.id] === q.answer) {
        score++;
        catStats[q.category].correct++;
      }
    });

    const percent = Math.round((score / questions.length) * 100);
    const bandInfo = calculateIeltsBand(score);

    // Populate Modal
    modalScoreNum.textContent = `${score}/100`;
    modalBandPill.textContent = `Estimated IELTS Band: ${bandInfo.band}`;
    modalFeedback.innerHTML = `
      <p><strong>Performance Level:</strong> ${bandInfo.level}</p>
      <p style="margin-top: 0.35rem;">${bandInfo.description}</p>
    `;

    // Category Breakdown
    modalBreakdown.innerHTML = "";
    Object.keys(catStats).forEach(cat => {
      const st = catStats[cat];
      const catPct = Math.round((st.correct / st.total) * 100);

      const row = document.createElement("div");
      row.className = "cat-row";
      row.innerHTML = `
        <span class="cat-name">${cat}</span>
        <div class="cat-bar-wrap">
          <div class="cat-bar-inner" style="width: ${catPct}%; background-color: ${catPct >= 75 ? 'var(--success)' : catPct >= 55 ? '#0b3c6d' : 'var(--danger)'}"></div>
        </div>
        <span class="cat-score">${st.correct}/${st.total} (${catPct}%)</span>
      `;
      modalBreakdown.appendChild(row);
    });

    resultsModal.classList.add("active");
    submitExamBtn.style.display = "none";
    renderQuestion(currentIndex);
    renderGrid();
  }

  function calculateIeltsBand(score) {
    if (score >= 90) {
      return {
        band: "8.5 - 9.0",
        level: "C2 (Expert / Native-level Command)",
        description: "Exceptional mastery of all simple, continuous, perfect, and passive tense structures with seamless natural precision."
      };
    } else if (score >= 80) {
      return {
        band: "7.5 - 8.0",
        level: "C1 (Very Good User / Operational Command)",
        description: "Strong command of complex tenses, time clauses, and conditional nuances. Rare minor slips under academic pressure."
      };
    } else if (score >= 70) {
      return {
        band: "6.5 - 7.0",
        level: "B2 Upper (Competent / Ready for Academic IELTS)",
        description: "Solid B2 grasp of core tenses and past/future distinctions. Good foundation for IELTS Academic Writing Tasks 1 & 2."
      };
    } else if (score >= 60) {
      return {
        band: "5.5 - 6.0",
        level: "B2 Threshold (Modest Command)",
        description: "Satisfactory overall command, but occasional confusion between continuous/perfect aspects and conditional time markers."
      };
    } else if (score >= 50) {
      return {
        band: "5.0",
        level: "B1 Intermediate (Partial Command)",
        description: "Frequent errors with perfect continuous tenses, inversions, and passive forms. Focused tense review recommended."
      };
    } else {
      return {
        band: "4.0 - 4.5",
        level: "A2 / B1 (Limited User)",
        description: "Significant structural gaps across fundamental English tenses. Intensive remedial grammar study required."
      };
    }
  }

  // Event Listeners
  function attachEventListeners() {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) renderQuestion(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
    });

    flagBtn.addEventListener("click", () => {
      toggleFlag(questions[currentIndex].id);
    });

    clearAnswerBtn.addEventListener("click", () => {
      if (!isSubmitted) clearAnswer(questions[currentIndex].id);
    });

    submitExamBtn.addEventListener("click", submitTest);

    modeSelect.addEventListener("change", (e) => {
      mode = e.target.value;
      if (mode === "practice") {
        timerSeconds = 0;
      } else {
        timerSeconds = 60 * 60;
      }
      renderQuestion(currentIndex);
      startTimer();
    });

    categoryFilterSelect.addEventListener("change", (e) => {
      currentFilter = e.target.value;
      renderGrid();
    });

    // Theme Toggle
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      if (isDark) {
        document.body.removeAttribute("data-theme");
        themeToggleBtn.textContent = "🌙 Dark";
      } else {
        document.body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️ Light";
      }
    });

    // Print Exam / Answer Key
    printExamBtn.addEventListener("click", () => {
      window.print();
    });

    // Modal Actions
    reviewAllBtn.addEventListener("click", () => {
      reviewFilter = "all";
      resultsModal.classList.remove("active");
      renderGrid();
      renderQuestion(0);
    });

    reviewMistakesBtn.addEventListener("click", () => {
      reviewFilter = "incorrect";
      resultsModal.classList.remove("active");
      renderGrid();
      // Jump to first mistake
      const firstMistakeIdx = questions.findIndex(q => userAnswers[q.id] !== q.answer);
      if (firstMistakeIdx !== -1) {
        renderQuestion(firstMistakeIdx);
      }
    });

    closeModalBtn.addEventListener("click", () => {
      resultsModal.classList.remove("active");
    });

    retakeBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset all answers and retake the exam?")) {
        userAnswers = {};
        flaggedQuestions.clear();
        isSubmitted = false;
        timerSeconds = 60 * 60;
        submitExamBtn.style.display = "inline-flex";
        resultsModal.classList.remove("active");
        reviewFilter = "all";
        startTimer();
        renderQuestion(0);
        renderGrid();
        updateProgress();
        localStorage.removeItem("ielts_tenses_state");
      }
    });

    // Keyboard navigation (Left, Right, 1-4, A-D)
    window.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;

      if (e.key === "ArrowLeft") {
        if (currentIndex > 0) renderQuestion(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        if (currentIndex < questions.length - 1) renderQuestion(currentIndex + 1);
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        if (!isSubmitted) selectOption(questions[currentIndex].id, parseInt(e.key) - 1);
      } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
        const charMap = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
        if (!isSubmitted) selectOption(questions[currentIndex].id, charMap[e.key]);
      }
    });
  }

  // LocalStorage Persistence
  function saveState() {
    const payload = {
      userAnswers,
      flagged: Array.from(flaggedQuestions),
      currentIndex,
      mode,
      isSubmitted,
      timerSeconds
    };
    try {
      localStorage.setItem("ielts_tenses_state", JSON.stringify(payload));
    } catch(e) {}
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem("ielts_tenses_state");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.userAnswers) userAnswers = data.userAnswers;
        if (data.flagged) flaggedQuestions = new Set(data.flagged);
        if (data.currentIndex !== undefined) currentIndex = data.currentIndex;
        if (data.mode) {
          mode = data.mode;
          modeSelect.value = mode;
        }
        if (data.isSubmitted) {
          isSubmitted = data.isSubmitted;
          submitExamBtn.style.display = "none";
        }
        if (data.timerSeconds) timerSeconds = data.timerSeconds;
      }
    } catch(e) {}
  }
});
