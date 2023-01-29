import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Item from './components/pages/Item/Item';
import Items from './components/pages/Items/Items';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/item/:id' element={<Item />} />
      </Routes>
    </div>
  );
};

export default App;
