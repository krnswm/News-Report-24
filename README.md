# 📰 News-Report-24  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  

**News-Report-24** is a lightweight and responsive news reporting app that fetches real-time articles from **[NewsAPI.org](https://newsapi.org/)**. Built with **React (Vite)** and styled using **CSS**, it delivers the latest headlines in a clean, fast, and user-friendly interface.  

---

## ✨ Features  
- 📡 Fetches live news data using **NewsAPI**  
- 🎨 Minimal and responsive UI with plain CSS  
- 🔍 Option to filter or search for news (if enabled)  
- 📱 Mobile-first design for seamless browsing  
- ⚡ Super fast builds & hot reloading with **Vite**  

---

## 📂 Project Structure  

```
/
├── public/            # static assets
├── src/               
│   ├── components/    # Reusable React components
│   ├── pages/         # Page-level views
│   ├── context/       # News context provider
│   ├── styles/        # Global CSS styles
│   └── App.jsx        # Root component
├── .env.example       # Example environment variables
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🛠 Tech Stack  

- **Frontend:** React (with Vite)  
- **Styling:** CSS  
- **API:** [NewsAPI.org](https://newsapi.org/)  
- **Linting:** ESLint  

---

## ⚙️ Installation & Setup  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/krnswm/News-Report-24.git
cd News-Report-24
npm install
```

---

## 🚀 Usage  

Start the development server:  

```bash
npm run dev
```

Build for production:  

```bash
npm run build
```

Preview production build:  

```bash
npm run preview
```

---

## 🔑 Configuration  

1. Register at [NewsAPI.org](https://newsapi.org/register) to get your free API key.  
2. Create a `.env` file in the root directory.  
3. Add your API key like this:  

   ```env
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. Restart the development server after saving.  

---

## 🧹 Linting & Formatting  

Run ESLint to check for issues:  

```bash
npm run lint
```

---

## 🤝 Contributing  

Contributions are welcome!  

1. Fork this repo  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to your branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

---

## 📜 License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---

## 👤 Author  

**Karan Swami**  
- GitHub: [@krnswm](https://github.com/krnswm)  

---

⚡ *News-Report-24 is built to deliver fresh headlines at your fingertips. Stay informed, anytime.*  
