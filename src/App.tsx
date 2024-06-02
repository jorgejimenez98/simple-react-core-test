import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './assets/styles/main.scss'
import { UseCallbackPage, UseEffectPage, UseMemoPage, ReactContextPage } from './components';
import { CounterProvider } from './context/ContextProvider';

function App() {
  return (
    <div className='app-content'>
      <Router>
        <header>
          <nav>
            <ul>
              <li><Link to="/">UseEffect</Link></li>
              <li><Link to="/use-memo">Use Memo</Link></li>
              <li><Link to="/use-callback">Use Callback</Link></li>
              <li><Link to="/context">Context</Link></li>
            </ul>
          </nav>
        </header>

        <main>
            <CounterProvider>
              <Routes>
                <Route path="/" Component={UseEffectPage} />
                <Route path="/use-memo" Component={UseMemoPage} />
                <Route path="/use-callback" Component={UseCallbackPage} />
                  <Route path="/context" Component={ReactContextPage} />
              </Routes>
            </CounterProvider>
        </main>

        <footer>
          Footer Here...
        </footer>
      </Router>

    </div>
  )
}

export default App
