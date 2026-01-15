import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
};

export default App;
