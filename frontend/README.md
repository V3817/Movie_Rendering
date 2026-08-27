# 🎬 Movie Browser App

A modern, responsive movie browsing application built with React and Vite. Browse popular movies, search for your favorites, and save them to your personal collection.

## ✨ Features

- 🎥 Browse popular movies from TMDB API
- 🔍 Search for movies by title
- ❤️ Add/remove movies to/from favorites
- 📱 Fully responsive design
- ⚡ Fast and smooth user experience with React
- 🎨 Modern UI with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v7 or later) or yarn
- TMDB API key (get one from [TMDB](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd movie-browser/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- ⚛️ React 18
- 🚀 Vite
- 🔄 React Router
- 🎨 CSS Modules
- 📱 Responsive Design
- 🎬 TMDB API

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/      # React context providers
├── css/           # CSS styles
├── pages/         # Page components
└── services/      # API services
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for the movie data
- [Vite](https://vitejs.dev/) for the amazing development experience
- [React](https://reactjs.org/) for the UI library

