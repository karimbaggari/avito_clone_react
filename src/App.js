import Landing from './pages/Landing';
import React, { Suspense } from "react";
import SingleCategory from './pages/SingleCategory';
import SingleProduct from './pages/SingleProduct';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading</div>}><Landing /></Suspense>}></Route>
      <Route path='categories:categoryId' element={<Suspense fallback={<div>Loading</div>}><SingleCategory /></Suspense>} />
      <Route path='products:productId' element={<Suspense fallback={<div>Loading</div>}><SingleProduct /></Suspense>} />
    </Routes>
  );
}

export default App;