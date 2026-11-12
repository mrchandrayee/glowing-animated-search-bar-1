# Glowing Animated Search Bar

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/glowing-animated-search-bar-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 10.27-second screen recording.

## Video observations

The video title is **Glowing animated Search Bar Using HTML CSS**. It shows:
- A dark demo stage.
- A centered black rounded search input with a glowing animated purple/pink/blue border.
- A magnifying-glass search icon on the left.
- A filter/funnel button on the right.
- The input placeholder `Search...`.
- The user types `@coding.stella` during the recording.
- A source panel showing the HTML for `#main`, a visually-hidden label and the `#search-input` field.

## HTML transcribed from the readable source panel

```html
<div id="main">
  <label for="search-input" class="visually-hidden">
    Search
  </label>
  <input
    id="search-input"
    placeholder="Search..."
    type="text"
    name="text"
    class="input"
    aria-label="Search"
    autocomplete="off"
  />
</div>
```

## Implemented

- Animated conic-gradient neon glow around the search bar.
- Soft purple/pink/blue outer bloom.
- Search icon and working form submit interaction.
- Filter/funnel button with a dropdown for People, Posts and Projects.
- Keyboard-accessible input and filter controls.
- Responsive layout.
- Like, Save and Share demo footer.
- Reduced-motion support.
- No external libraries, icon fonts or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
glowing-animated-search-bar/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The visible HTML snippet is transcribed from the video. The complete original CSS/JavaScript was not shown; the animated border and filter behavior are implemented as a functional reconstruction.
