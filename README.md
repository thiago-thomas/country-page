# Country Page | devChallenges ✅

> Solution for the **Country Page - WorldRanks** challenge from [devChallenges.io](https://devchallenges.io/challenge/country-page).

<div align="center">
  <a href="{https://your-demo-link.your-domain}">Demo</a> •
  <a href="{https://your-url-to-the-solution}">Solution</a> •
  <a href="https://devchallenges.io/challenge/country-page">Challenge</a>
</div>

---

## Overview 🔍

This is a responsive single-page application that lists countries and provides search, sorting and filtering capabilities. The app fetches country data (JSON) from the open dataset maintained at mledoze/countries and displays flags via FlagCDN. It was built as part of the DevChallenges "Country Page - WorldRanks" challenge.

![screenshot](./src/assets/hero-image.jpg)

---

## What I learned 💡

- Building a responsive layout with CSS Grid and Flexbox.
- Managing state with React hooks (useState, useEffect) and optimizing expensive computations with useMemo.
- Working with TypeScript interfaces for API data (`Country` type in `src/types/api.ts`).
- Fetching and handling external JSON data and handling fetch errors (`src/services/api.ts`).
- Small UX considerations: accessible alt text for images, responsive table/grid layout, and simple interactions (checkboxes, region buttons, select).

---

## Useful resources 📚

- DevChallenges: https://devchallenges.io/challenge/country-page
- Countries dataset (used): https://github.com/mledoze/countries (raw JSON used in `src/services/api.ts`)
- Flags: https://flagcdn.com/
- React: https://reactjs.org/
- Vite: https://vitejs.dev/
- TypeScript: https://www.typescriptlang.org/

---

## Built with 🔧

- **React** 19 (Functional components + hooks)
- **TypeScript**
- **Vite** (dev server and build)
- CSS (Custom properties, Grid, Flexbox)
- ESLint & Prettier for linting/formatting

---

## Features ✨

- Search countries by **name** or **capital** (live search)
- Sort by **name**, **capital** or **area**
- Filter by **region** (Americas, Antarctic, Africa, Asia, Europe, Oceania)
- Filter by **UN membership** and **independence** status
- Display country **flag**, **name**, **capital**, **area** and **region**
- Responsive layout that adapts from mobile to desktop

---

## Running the project locally 🚀

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

Notes:
- The app fetches data from: `https://raw.githubusercontent.com/mledoze/countries/master/countries.json` (see `src/services/api.ts`).
- Flags are loaded from FlagCDN using the country's `cca2` code.

---

## Acknowledgements 🙏

- DevChallenges for the challenge brief and inspiration.
- mledoze for the countries dataset.
- FlagCDN for flag images.

---

## Author / Contact ✉️

Please replace the placeholders below with your real contact details.

- **Name**: Your Name
- **Website**: https://your-website.example
- **GitHub**: https://github.com/your-username
- **Email**: your-email@example.com

---

If you'd like, I can also add a live demo link, improve screenshots, or add a short GIF demonstrating the filtering/sorting interactions — tell me which you'd prefer and I’ll add it. ✨
