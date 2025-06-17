# MERN Stack Week 3 React JS Assignment

## 📋 Project Overview

This React.js application includes:
- **Task Manager:** Add, complete, filter, and delete tasks (with local storage persistence).
- **Post List:** Fetches posts from JSONPlaceholder, supports searching and pagination.
- **Dark mode** support using Tailwind CSS.
- Modular, reusable components for easy maintenance.

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Miss-Maggie.git
cd week-3-react-js-assignment-Miss-Maggie/React-assignment-app
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

### 3. Install Tailwind CSS v4

If Tailwind is not already installed, or you want to upgrade to v4, run:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

- This creates/updates `tailwind.config.js` and `postcss.config.js`.
- Ensure your `tailwind.config.js` uses `module.exports` and has the correct content paths.

### 4. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 Deployed App

The application is deployed and accessible at:  
[https://your-vercel-app-url.vercel.app](https: coming soon, waiting for access from the organization)


## 📦 Dependencies

- **React** (v18+)
- **Tailwind CSS** (v4)
- **Vite**
- **JSONPlaceholder** (for posts API)

## 📁 Project Structure

```
week-3-react-js-assignment-Miss-Maggie/
├── React-assignment-ap/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── ... (images, logos, etc.)
│   │   ├── components/
│   │   │   ├── AnimatedCard.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── ResponsiveExample.jsx
│   │   │   └── TaskManager.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   ├── hooks/
│   │   │   └── useLocalStorage.js
│   │   ├── pages/
│   │   │   └── ... (optional: Home.jsx, About.jsx, etc.)
│   │   ├── styles/
│   │   │   └── ... (custom CSS or Tailwind directives)
│   │   ├── utils/
│   │   │   └── ... (helper functions)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
└── README.md
```

- `assets/`: Static files and images.
- `components/`: Reusable UI components, including `AnimatedCard.jsx` and `ResponsiveExample.jsx`.
- `context/`: React context providers, e.g., `ThemeContext.js` for theme management.
- `hooks/`: Custom React hooks.
- `pages/`: Page-level components (if used).
- `styles/`: Global or custom CSS files.
- `utils/`: Utility/helper functions.
- `App.jsx`: Main app component.
- `main.jsx`: Entry point for React.
- `tailwind.config.js`: Tailwind CSS configuration.

## 🧭 Navigation

- Use the **Navbar** to switch between Task Manager and Post List.
- **Task Manager:** Add, complete, filter, and delete tasks.
- **Post List:** Browse, search, and load more posts.
- Toggle dark mode using the theme switch (if available).

## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

This project is for educational purposes.

## Author 
**Miss-Maggie**
