import Landing from './pages/Landing';
import SingleCategory from './pages/SingleCategory';
import {Routes , Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Landing />}></Route>
    <Route path='categories:categoryId' element={<SingleCategory />} />
    </Routes>
  );
}

export default App;