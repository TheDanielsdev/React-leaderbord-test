# Leaderboard Application

This repository contains the implementations of a dynamic leaderboard using **React** for the web. The leaderboard displays a list of participants and their scores, updating every 2 seconds with random score changes and sorting in descending order.

## Table of Contents
- [React Application](#react-application)
- [Design Decisions](#design-decisions)

## React Application

### Setup Instructions
1. Clone the repository:
   
   git clone <react-repo-url>
   cd react-leaderboard

2. Install dependencies:
   
   npm install

3. Run the app:

   npm start

### Features
1. Built with React and TypeScript.

2. Uses Tailwind CSS for responsive, modern styling.

3. Updates scores every 2 seconds with random changes (-5 to +10).

4. Sorts participants by score in descending order.


### Design Decisions

1. Styling: Vanilla CSS was chosen for styling and responsive design. The gradient background and shadow effects create a modern-like, engaging UI.

2. State Management: useState and useEffect handle dynamic updates efficiently without external libraries.

3. Update Logic: Random score changes between -5 and +10 ensure dynamic updates. 

4. Sorting is performed after each update to maintain the leaderboard order.

5. Performance: The interval is cleared on component unmount to prevent memory leaks.



