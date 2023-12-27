import { Provider } from 'react-redux'  
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';import Admin from './pages/Admin';
import ProductIphone from './pages/Home/ProductIphone';
import ProductOppo from './pages/Home/ProductOppo';
import ProductSamsung from './pages/Home/ProductSamsung';
import store from './store';
import Login from './pages/Login';
import Register from './pages/Register';
import ShoppingCart from './pages/Home/ShoppingCart';
import ProductCategorys from './pages/Home/ProductCategorys';
import CateFeature from './pages/Home/Cate-Feature';
;

function App() {
  return (
    <div>
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="admin/*" element={<Admin/>} />
              <Route path="/*" element={<CateFeature/>} />
              <Route path="/*" element={<ProductCategorys/>} />
              <Route path="/productiphones/*" element={<ProductIphone/>} />
              <Route path="/productoppos/*" element={<ProductOppo/>} />
              <Route path="/productsamsungs/*" element={<ProductSamsung/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
