import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import { pages } from './util/pages';

// OTHER IDEAS:
//  0. Fetch leaderboard w/ custom API
//  1. set timeout -> set interval
//  2. external css and css variables
//  3. custom hooks
//  4. slider

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              {pages.map(page => (
                <Route
                  path={page.path}
                  element={<page.component/>}
                  key={page.name}
                />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App