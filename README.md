# Skip Hire React Challenge

## Overview

This project is a redesign of the **"Choose Your Skip Size"** page from [wewantwaste.co.uk](https://wewantwaste.co.uk/). The goal was to create a fresh, clean, and user-friendly interface while maintaining all existing functionality. The app is built with React and focuses on maintainability, responsiveness, and improved UI/UX.

---

## Demo

[Live Demo on Vercel](https://re-mwaste-skip-page.vercel.app/)

## Project Approach

For a detailed explanation of my design decisions, development workflow, and overall approach to this challenge, please see the [PROJECT-APPROACH.md](./PROJECT-APPROACH.md) file.


## Features

- **Clean & Modular React Code:**  
  Uses functional components with hooks, separated UI components, and custom hooks for data fetching.

- **Responsive Design:**  
  Fully responsive layout that adapts seamlessly from mobile to desktop using Tailwind CSS grid and flex utilities.

- **Data-Driven UI:**  
  Fetches skip data dynamically from the provided API endpoint and categorizes skips into:
  - Standard Skips
  - Limited Period Skips
  - Roll-on Roll-off Skips (Private Land Only)

- **Enhanced User Experience:**
  - Clear categorization with color-coded cards and badges.
  - Consistent and prominent warnings for restricted skips.
  - Modal popup to explain skip contents and guide users.
  - Disabled or contextual buttons based on skip availability and restrictions.
  - Legend component explaining skip categories.
  
- **Accessibility & Usability:**
  - Keyboard and screen reader friendly.
  - Visual feedback on selection.
  - Clear distinction between skip types and restrictions.

---

## Design Improvements & Rationale

### 1. Categorization of Skips
Skips are grouped into three logical categories instead of a flat list. This improves scannability and helps users understand differences in skip types easily.

### 2. Consistent Warnings & Restrictions
"Not Allowed On The Road" skips are now under a dedicated "Restricted" category with a clear subtitle:  
*"Roll-on Roll-off Skips (Private Land Only)"*.  
Buttons for restricted skips either show appropriate guidance or disable selection to reduce user confusion.

### 3. Skip Cards
Each skip is displayed in a card with:
- A colored border and background based on category.
- Popular skip badge.
- Clear price, hire period, and size.
- Button toggling selection, with feedback via toast notifications.
- Info modal for skip contents and usage guidelines.

### 4. Legend & Help
A fixed legend is provided at the top to explain color codes and categories, improving user understanding.

### 5. Responsiveness
The layout uses Tailwind CSS grid classes that adapt from 1 column on mobile to up to 4 columns on large desktops.

---

## Project Structure

```

src/
├── assets/                  # Static assets like images and SVGs
│   └── react.svg            # React logo asset
├── components/              # Reusable UI components
│   ├── Legend.tsx           # Component showing skip categories legend
│   ├── SkipCard.tsx         # UI card displaying individual skip info
│   ├── SkipContentsModal.tsx# Modal showing detailed skip contents
│   ├── layout/              # Layout-specific components (header/footer)
│   │   ├── SkipHireFooter.tsx
│   │   └── SkipHireHeader.tsx
│   └── ui/                  # Primitive UI components (buttons, badges, etc.)
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── dialog.tsx
├── data/                    # Data fetching and static data files
│   ├── skipData.ts          # Static skip data (if any)
│   └── useSkipData.ts       # Custom hook to fetch skip data dynamically
├── hooks/                   # Custom React hooks
│   └── use-toast.ts         # Hook for toast notifications
├── lib/                     # Utility functions/helpers
│   └── utils.ts
├── pages/                   # Top-level page components
│   └── SkipHire.tsx         # Main Skip Hire page component
├── App.css                  # Global styles for the app
├── App.tsx                  # Root React component
├── index.css                # Global base CSS styles
├── main.tsx                 # App entry point (ReactDOM.render)
├── vite-env.d.ts            # Vite environment type declarations


````

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/vincent-mugendi/REMwaste_skip_page.git
cd frontend
npm install
````

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Endpoint Used

Skip options are fetched from:

```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

---

## How to Use

1. The page loads skip options dynamically.
2. Skips are grouped and visually differentiated by category.
3. Select skips by clicking the **Select This Skip** button. Selected skips highlight with a ring.
4. Click the info icon on a card to view detailed contents and guidelines.
5. Restricted skips show clear warnings and limited interaction.
6. Use the legend at the top to understand skip categories and restrictions.

---

## Future Improvements

* Add postcode input integration to dynamically fetch skips based on user location.
* Implement a wizard or helper tool to recommend skip sizes based on user needs.
* Add permit application flow for restricted skips.
* Include animations to improve feedback.
* Enhance accessibility further with ARIA attributes and keyboard navigation improvements.

---

## License

Vincent Mugendi . All Rights Reserved

---

## Contact

For questions or feedback, please contact Vincent at \[vincentmugendi17@gmail.com] or \[contact@vincentmugendi.com]

---

Thank you for reviewing my solution. I'm eager to hear your thoughts

---

*This project was completed as part of a React front-end coding challenge for REMwaste*
