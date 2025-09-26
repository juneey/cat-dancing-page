import './App.css'
import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 댄싱 고양이 페이지 🐱</h1>
        <p>고양이가 춤추는 마법 같은 순간을 경험해보세요!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
      <footer className="app-footer">
        <p>Made with ❤️ for cat lovers</p>
      </footer>
    </div>
  )
}

export default App