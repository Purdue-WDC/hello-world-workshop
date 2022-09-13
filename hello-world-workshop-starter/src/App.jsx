import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import { pages } from './util/pages';

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