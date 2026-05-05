# CoD Esports Trivia

A daily puzzle web app for Call of Duty esports fans. CoD Esports Trivia lets users test their knowledge of professional CDL players, championship history, team rosters, and competitive Call of Duty events.

## Live Demo

[View the live app](https://cod-trivia.vercel.app)

## Overview

CoD Esports Trivia is a browser-based trivia game built for fans of competitive Call of Duty. The app includes multiple game modes, daily challenges, unlimited play, player/team-based questions, streak tracking, shareable results, and user settings.

The project is fully client-side, using localStorage to save player stats, streaks, and preferences.

## Tech Stack

* React 19
* TypeScript
* Vite
* React Router v7
* CSS
* localStorage
* Vercel Analytics
* Vercel Deployment

## Key Features

* Daily trivia puzzles
* “Guess the Pro” game mode
* “Championship Memory” game mode
* Unlimited mode for replayability
* Win/loss streak tracking
* Player statistics page
* Shareable emoji-grid results
* Hard Mode setting
* No Animations setting
* Light/Dark Mode toggle
* Fully responsive design
* Client-side data and state management

## Game Modes

### Guess the Pro

Users identify a professional Call of Duty player based on their team history. Each incorrect guess reveals another team from the player’s career.

### Championship Memory

Users guess which team won a specific Call of Duty championship event. Team abbreviations are accepted.

### Unlimited Mode

Users can play randomly selected player and event trivia rounds without a daily limit.

## Standout Features

* Designed specifically for CDL-era Call of Duty esports fans
* Daily puzzle format inspired by modern trivia games
* Shareable results using an emoji grid
* Persistent statistics without a backend
* Multiple customization settings
* Clean TypeScript project structure

## Screenshots

*Add your screenshots here*

![Home Page](./public/screenshot-home.png)
![Game Screen](./public/screenshot-game.png)
![Stats Page](./public/screenshot-stats.png)

---

## Installation

Clone the repository:

Use Bash

git clone https://github.com/GiannfrancoC340/COD-Trivia.git
cd COD-Trivia

Install dependencies:

npm install

Start the development server:

npm run dev

Open in your browser:

http://localhost:5173

---

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start dev server         |
| npm run build   | Build for production     |
| npm run preview | Preview production build |
| npm run lint    | Run ESLint               |

---

## Project Structure

```
COD-Trivia/
├── public/                         # Static assets served as-is
├── src/
│   ├── assets/                     # Images and static resources
│   ├── components/                 # Reusable UI components
│   │   ├── Header.tsx              # Top navigation bar with How to Play / About icons
│   │   ├── Modal.tsx               # Generic modal dialog
│   │   └── Toast.tsx               # Temporary win/streak notification popup
│   ├── data/                       # Static game data
│   │   ├── players.ts              # All CDL player records (IGN, real name, teams, wiki URL)
│   │   └── events.ts               # All CDL championship events (winner, accepted answers, YouTube URL)
│   ├── pages/                      # Route-level page components
│   │   ├── Home.tsx                # Landing page with game selection
│   │   ├── Game1.tsx               # Daily "Guess the Pro" game
│   │   ├── Game2.tsx               # Daily "Championship Memory" game
│   │   ├── GameUnlimited.tsx       # Unlimited "Guess the Pro" (random player each round)
│   │   ├── GameUnlimited2.tsx      # Unlimited "Championship Memory" (random event each round)
│   │   ├── Stats.tsx               # Win/loss and streak statistics
│   │   └── Settings.tsx            # Hard Mode, No Animations, Light/Dark Mode toggles
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces (Player, Event, Settings, GameStats)
│   ├── utils/
│   │   ├── dailyPuzzle.ts          # Deterministic daily player/event selection and state persistence
│   │   ├── stats.ts                # Load/update win streaks and statistics in localStorage
│   │   ├── settings.ts             # Load/save user settings in localStorage
│   │   └── share.ts                # Generate emoji grid share text for both games
│   ├── App.css                     # Global styles
│   ├── App.tsx                     # Root component with route definitions
│   ├── index.css                   # Base/reset styles
│   └── main.tsx                    # React app entry point
├── index.html                      # HTML shell with page title
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Data and State Management

This project does not use a backend database. Player data, event data, user settings, game results, and statistics are handled on the client side.
Persistent user data such as streaks, win/loss history, and settings are stored using localStorage.

## Data Coverage

The trivia data focuses on the CDL era of Call of Duty esports, including seasons from Modern Warfare (2019) through current titles.

* Modern Warfare (2019)
* Black Ops Cold War
* Vanguard
* Modern Warfare 2
* Modern Warfare 3
* Black Ops 6
* Black Ops 7 (current)

---

## Challenges and Solutions

**Creating a daily puzzle system**
The app needed to provide a new puzzle each day while keeping consistency across sessions.

**Solution:**
Used client-side logic combined with localStorage to manage daily puzzle state and prevent duplicates.

**Tracking stats without a backend**
The app needed persistent stats without authentication or a database.

**Solution:**
Implemented localStorage to store streaks, wins/losses, and settings directly in the browser.

**Supporting multiple game modes**
Different trivia modes required different logic and validation.

**Solution:**
Structured the app using reusable components and separated logic into utilities, pages, and data layers.

---

## Future Improvements

* Add more player and event data
* Implement leaderboards
* Add authentication and cloud sync
* Improve UI/UX polish
* Add more game modes

---

## What I Learned

* Building scalable React apps with TypeScript
* Structuring frontend applications effectively
* Managing persistent client-side state
* Designing reusable game logic
* Creating responsive UI/UX
* Deploying applications with Vercel
* Turning a personal interest into a production-ready app

---

## Contributors

* Giannfranco Crovetto

---

## License

[Add license here]
