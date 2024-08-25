import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//hook imports
import { useEffect, useState } from 'react';

//importing components
import { Header } from './components/Header/Header';
import NewProduct from './pages/newProduct/NewProduct';
import Products from './pages/products/Products';
import Main from './pages/main/Main';

function App() {

  const [list, setList] = useState([]);
  const [section, setSection] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    console.log(brand, name, section);

    const products = [];
    for(let i = 0; i < list.length; i++){
      products.push(list[i]);
    }

    if(section !== ''){
      const object = { section, brand, name, price, state };
      products.push(object);
      setList(products);
    }

  }, [section, brand, name, price, state])

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new-product' element={<NewProduct brandHandler={setBrand} nameHandler={setName} 
          sectionHandler={setSection} priceHandler={setPrice} stateHandler={setState} />} />
          <Route path='products' element={<Products productList={list}/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
