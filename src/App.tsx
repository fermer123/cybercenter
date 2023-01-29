import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import ItemId from './components/pages/ItemId/ItemId';
import Items from './components/pages/Items/Items';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/items/:id' element={<ItemId />} />
      </Routes>
    </div>
  );
};

export default App;
