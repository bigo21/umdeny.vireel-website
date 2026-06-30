import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import FormationBourseBvmac from './pages/formation-bourse-bvmac/index.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formation-bourse-bvmac" element={<FormationBourseBvmac />} />
    </Routes>
  );
}
