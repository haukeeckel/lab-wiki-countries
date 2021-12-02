import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Routes>
        <Route path="/:alpha3Code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
