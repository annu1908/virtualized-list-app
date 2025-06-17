# Virtualized List App

A React.js project for efficiently rendering a long list with search, sort, dark/light mode toggle, and bulk actions.

---

## ✅ Features

- Virtual scrolling using react-window
- Search by title
- Sort by title or date
- Light / Dark theme toggle
- Select All checkbox
- Multi-select with delete/archive
- Responsive design

---
## Demo
<video src="./demo.mp4"></video>
## 🛠️ Tech Stack

- React.js
- React Hooks
- react-window
- CSS + Inline Styling

---

## Set up instructions

1. Clone the repository

2. Install dependencies
   npm install
   
3. Start the development Server
   npm start

## Folder structure
src/
|
 |------components/
|    |-----List.jsx
|    |-----ListItem.jsx
|    |-----SearchBar.jsx
|    |-----ListItem.css
 |------data
|     |----mockData.js
 |----Styles
      |---App.modules.css
 |----App.js
|-----index.js
💡 Approach & Logic
	•	The app uses react-window’s FixedSizeList for rendering only visible list items to improve performance.
	•	useState and useEffect are used for state management.
	•	Features like bulk actions and theme toggle are handled with simple boolean flags and filters.
	•	Design is kept clean and minimal using custom CSS and class-based themes (dark / light).
-----Author
**Annu Sandhu**     