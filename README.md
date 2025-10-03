# k72

React + GSAP project

## Demo

Live demo: https://k72.henilp.dev

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  

## About

**k72** is a project built using React along with GSAP (GreenSock Animation Platform) to implement rich animations and interactive UI elements.

## Features

- Smooth animations powered by GSAP  
- Component-based React architecture  
- Responsive layout  
- Simple and extendable setup  

## Tech Stack

- **React**  
- **GSAP**  
- **Vite** (tooling)  
- **JavaScript / JSX**  
- CSS / styling  

## Setup & Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Henil29/k72.git
   cd k72
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

5. (Optional) Preview the production build locally:

   ```bash
   npm run serve
   ```

## Usage

Once the dev server is running, open your browser and go to `http://localhost:3000` (or whichever port Vite assigns) to see the app.

You can add or modify React components and GSAP animations in the `src/` directory. The entry point is `src/main.jsx` (or similar).

## Project Structure

```
k72/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

- `public/` — static HTML, images, favicon etc.  
- `src/` — React source code  
- `components/` — reusable UI & animation components  
- `styles/` — CSS, SCSS or module styles  
- `App.jsx` / `main.jsx` — application root and bootstrapping  

## Contributing

Contributions are welcome! If you find a bug or want to add a feature:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Make your changes and commit them  
4. Push to your fork and open a Pull Request  

Please follow the existing code style and include clear commit messages.

## License

This project is open source — feel free to use, modify, and distribute.  
