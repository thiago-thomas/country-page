import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout as Layout } from './layouts/MainLayout';
import { MainPage } from './pages/MainPage';
import './App.css';
import { CountryPage } from './pages/CountryPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/country/:name" element={<CountryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
