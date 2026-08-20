// IELTS Tenses Explanation - Application Engine
document.addEventListener("DOMContentLoaded", () => {
  let tenses = typeof tensesData !== "undefined" ? tensesData : [];
  let currentTenseId = tenses.length > 0 ? tenses[0].id : "";
  let activeTagFilter = "all";
  let searchQuery = "";

  // DOM Elements
  const tenseNavList = document.getElementById("tenseNavList");
  const contentArea = document.getElementById("contentArea");
  const searchInput = document.getElementById("searchInput");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const printLessonBtn = document.getElementById("printLessonBtn");

  // Init
  init();

  function init() {
    renderSidebar();
    renderContent();
    attachEvents();
  }

  // Sidebar
  function renderSidebar() {
    tenseNavList.innerHTML = "";
    
    // Grouping
    const groups = [
      { name: "Present Tenses", ids: ["present-simple", "present-continuous", "present-perfect", "present-perfect-continuous"] },
      { name: "Past Tenses", ids: ["past-simple", "past-continuous", "past-perfect", "past-perfect-continuous"] },
      { name: "Future Forms", ids: ["future-simple", "be-going-to", "future-continuous", "future-perfect"] },
      { name: "Advanced Structures", ids: ["advanced-structures"] }
    ];

    groups.forEach(grp => {
      const titleEl = document.createElement("div");
      titleEl.className = "nav-section-title";
      titleEl.textContent = grp.name;
      tenseNavList.appendChild(titleEl);

      grp.ids.forEach(id => {
        const item = tenses.find(t => t.id === id);
        if (!item) return;

        const totalEx = item.usages.reduce((acc, u) => acc + u.examples.length, 0);

        const btn = document.createElement("button");
        btn.className = `nav-item-btn ${item.id === currentTenseId ? "active" : ""}`;
        btn.innerHTML = `
          <span>${item.name}</span>
          <span class="nav-item-badge">${totalEx} Ex</span>
        `;

        btn.addEventListener("click", () => {
          currentTenseId = item.id;
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          renderSidebar();
          renderContent();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        tenseNavList.appendChild(btn);
      });
    });
  }

  // Render Lesson Content
  function renderContent() {
    const current = tenses.find(t => t.id === currentTenseId);
    if (!current) {
      contentArea.innerHTML = "<p>Lesson content not found.</p>";
      return;
    }

    // Formulas HTML
    let formulaCards = "";
    if (current.formula) {
      for (const [key, val] of Object.entries(current.formula)) {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        formulaCards += `
          <div class="formula-card">
            <div class="formula-label"><span>📐</span> ${formattedKey}</div>
            <div class="formula-text">${val}</div>
          </div>
        `;
      }
    }

    // Guidance HTML
    const guidanceHTML = `
      <div class="guidance-box">
        <div class="tip-card">
          <h4><span>💡</span> IELTS Examiner Insight (Band 7+)</h4>
          <p>${current.examinerTips}</p>
        </div>
        <div class="warning-card">
          <h4><span>⚠️</span> Common Candidate Traps (Avoid in Exam)</h4>
          <ul>
            ${current.commonMistakes.map(m => `<li>${m}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    // Filter Bar HTML
    const filterBarHTML = `
      <div class="filter-bar">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-right: 0.25rem;">Filter Examples:</span>
        <button class="filter-pill ${activeTagFilter === 'all' ? 'active' : ''}" data-filter="all">All Modules</button>
        <button class="filter-pill ${activeTagFilter === 'Task 1' ? 'active' : ''}" data-filter="Task 1">Writing Task 1</button>
        <button class="filter-pill ${activeTagFilter === 'Task 2' ? 'active' : ''}" data-filter="Task 2">Writing Task 2</button>
        <button class="filter-pill ${activeTagFilter === 'Speaking' ? 'active' : ''}" data-filter="Speaking">Speaking</button>
        <button class="filter-pill ${activeTagFilter === 'Reading' ? 'active' : ''}" data-filter="Reading">Academic Reading</button>
      </div>
    `;

    // Usages & Examples HTML
    let usagesHTML = "";
    current.usages.forEach((usage, uIdx) => {
      // Filter examples
      const filteredExamples = usage.examples.filter(ex => {
        const matchesTag = activeTagFilter === "all" || ex.tag.toLowerCase().includes(activeTagFilter.toLowerCase());
        const matchesSearch = !searchQuery || ex.sentence.toLowerCase().includes(searchQuery.toLowerCase()) || ex.tag.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
      });

      if (searchQuery && filteredExamples.length === 0 && !usage.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return; // Skip empty usage blocks when searching
      }

      usagesHTML += `
        <div class="usage-card">
          <div class="usage-header">
            <h3 class="usage-title">${highlightText(usage.title, searchQuery)}</h3>
            <p class="usage-desc">${highlightText(usage.description, searchQuery)}</p>
          </div>
          <div class="examples-grid">
            ${filteredExamples.length > 0 ? filteredExamples.map((ex, eIdx) => `
              <div class="example-item">
                <div class="example-left">
                  <span class="example-num">${eIdx + 1}</span>
                  <p class="example-text">${highlightText(ex.sentence, searchQuery)}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="example-tag">${ex.tag}</span>
                  <button class="copy-btn" title="Copy sentence" data-text="${ex.sentence.replace(/"/g, '&quot;')}">📋</button>
                </div>
              </div>
            `).join("") : `<p style="color: var(--text-muted); font-size: 0.9rem; padding: 0.5rem;">No examples match the selected filter.</p>`}
          </div>
        </div>
      `;
    });

    contentArea.innerHTML = `
      <section class="lesson-hero">
        <div class="lesson-header">
          <h2 class="lesson-title">${current.name}</h2>
          <span class="lesson-level-badge">${current.level}</span>
        </div>
        <p class="lesson-overview">${current.overview}</p>
        <div class="formula-grid">
          ${formulaCards}
        </div>
        ${guidanceHTML}
      </section>

      <section class="usages-wrapper">
        ${filterBarHTML}
        ${usagesHTML}
      </section>
    `;

    // Reattach dynamic event listeners inside content
    attachContentEvents();
  }

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    return text.replace(regex, `<mark class="search-match">$1</mark>`);
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function attachContentEvents() {
    // Filter Pills
    document.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        activeTagFilter = e.target.getAttribute("data-filter");
        renderContent();
      });
    });

    // Copy Buttons
    document.querySelectorAll(".copy-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const text = btn.getAttribute("data-text");
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            btn.textContent = "✅";
            setTimeout(() => { btn.textContent = "📋"; }, 1500);
          });
        }
      });
    });
  }

  function attachEvents() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderContent();
      });
    }

    // Theme toggle
    if (themeToggleBtn) {
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
    }

    // Print
    if (printLessonBtn) {
      printLessonBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }
});
