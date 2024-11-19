
import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import MobilesPage from './stores/pages/MobilesPage';
import ComputersPage from './stores/pages/ComputersPage';
import WatchesPage from './stores/pages/WatchesPage';
import MensPage from './stores/pages/MensPage';
import WomansPage from './stores/pages/WomensPage';
import FurniturePage from './stores/pages/FurniturePage';
import KitchenPage from './stores/pages/KitchenPage';
import BooksPage from './stores/pages/BooksPage';
import FridgesPage from './stores/pages/FridgesPage';
import SpeakersPage from './stores/pages/speakersPage.js';
import AcPage from './stores/pages/AcPage';
import TvPage from './stores/pages/TvPage';


import MobileSingle from './singles/MobileSingle';
import ComputersSingle from './singles/ComputerSingle';
import WatchSingle from './singles/WatchSingle';
import MenSingle from './singles/MensSingle';
import WomanSingle from './singles/WomanSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import KitchenSingle from './singles/KitchenSingle';
import FridgeSingle from './singles/FridgeSIngle';
import SpeakerSingle from './singles/SpeakerSingle';
import AcSingle from './singles/AcSingle';
import TvSingle from './singles/TvSingle';
import BookSingle from './singles/BookSingle';

import LandingPage from './stores/pages/LandingPage';
import UserCart from './stores/userCart';

import NotFoundPage from './stores/pages/NotFoundPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilesPage />} />
        <Route path='/computers' element={<ComputersPage />} />
        <Route path='/watches' element={<WatchesPage />} />
        <Route path='/mensWear' element={<MensPage />} />
        <Route path='/womansWear' element={<WomansPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/fridges' element={<FridgesPage />} />
        <Route path='/speakers' element={<SpeakersPage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/tv' element={<TvPage />} />


        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computers/:id' element={<ComputersSingle />} />
        <Route path='/watches/:id' element={<WatchSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/woman/:id' element={<WomanSingle />} />
        <Route path='/furniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/fridges/:id' element={<FridgeSingle />} />
        <Route path='/speakers/:id' element={<SpeakerSingle />} />
        <Route path='/books/:id' element={<BookSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/tv/:id' element={<TvSingle />} />

        <Route path='/*' element={<NotFoundPage />} />
       
        <Route path='/cart' element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
