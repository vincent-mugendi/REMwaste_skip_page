# PROCESS.md

## 🧠 Project Background

This project was a UI/UX redesign and frontend implementation challenge for the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk/). The goal was to reimagine the page with a better user experience while maintaining core functionality such as skip selection, pricing visibility, and hire periods.

---

## 🔍 Phase 1: UI/UX Analysis of the Original Design

I began by thoroughly reviewing the original UI. The strengths and weaknesses were documented to guide the design process. Highlights of the original design included:

- Clear visuals of skip sizes
- Prominent and transparent pricing
- Functional layout and selection buttons

However, key opportunities for improvement emerged:

### Identified UX Issues:

1. **Inconsistent Warnings** for “Not Allowed On The Road” skips (e.g., unclear logic, poor visibility).
2. **Lack of Guidance** on what different skip sizes actually hold—hard for new users to choose.
3. **No Visual Hierarchy** for special skip types like roll-on roll-off skips or limited-period skips.
4. **Confusing Button States** — users could attempt to select restricted skips without context.
5. **Unexplained Hire Period Variations** (e.g., why 16-yard skips only allow 7 days).
6. **No Help or Assistant Feature** to support decision-making for skip sizes.

---

## 🧪 Phase 2: Redesign Objectives

Based on the analysis, I defined a set of clear UX and UI goals:

- Create a visual system for categorizing skips (Standard, Limited Period, and Restricted)
- Make skip restrictions consistent and prominent
- Provide helpful guidance on skip selection (via modals and tooltips)
- Improve accessibility and responsiveness across devices
- Ensure button states communicate availability and restrictions
- Introduce a visual legend to support user understanding

---

## 🛠️ Phase 3: Implementation (React + TailwindCSS)

I built the new interface in **React** using **TypeScript** and **Tailwind CSS**, with a strong focus on modularity, usability, and scalability.

### 🧱 Component Highlights:

- `SkipCard.tsx` – Encapsulates each skip's info, selection logic, and tooltip/modal trigger
- `SkipContentsModal.tsx` – Displays what each skip can hold and when to use it
- `Legend.tsx` – Color-coded category legend fixed to the page
- `useSkipData.ts` – Custom hook to dynamically fetch skip data
- `use-toast.ts` – Simple toast notification system for feedback

### 🖼️ UI Details:

- Skips are categorized into three groups with distinct colors:
  - **Standard Skips**
  - **Limited Period Skips**
  - **Roll-on Roll-off (Private Land Only)**
- Card badges and borders show category at a glance
- “Select This Skip” buttons provide instant feedback or are disabled when not applicable
- Toasts confirm selections
- Modals explain skip capacities
- Fully responsive grid layout

---

## 🚀 Result

The final result is a responsive, user-friendly skip selection page that:

- Clearly communicates restrictions and hire periods
- Makes selection easier and more intuitive
- Helps users feel confident in their choices
- Is built with clean, maintainable, and scalable code

Live Demo: [https://re-mwaste-skip-page.vercel.app/](https://re-mwaste-skip-page.vercel.app/)

---

## 🔮 Future Work

Planned improvements include:

- Add postcode-based dynamic fetching
- Include a "What Size Do I Need?" skip selector wizard
- Integrate real permit logic (based on road placement)
- Enhance accessibility testing (ARIA, keyboard navigation)
- Track user selections for analytics insights