import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome';
import HomePage from '../pages/home';
import CreateProduct from '../pages/createProduct';
import EditProduct from '../pages/editProduct';

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/crear" element={<CreateProduct />} />
    <Route path="/editar/:id" element={<EditProduct />} />
  </Routes>
);

export default RoutesApp;
