
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Defination from './components/Defination';
import Dict from './components/Dictionary';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path="/dictionary/:search" element={<Defination />} />
                        <Route path="/dictionary" element={<Dict />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<NotFound />} />
                        </Routes>
                        </Header>
                        </BrowserRouter>
    </div>
  );
}

export default App;
