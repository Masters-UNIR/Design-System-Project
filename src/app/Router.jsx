

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from "../components/Pages/LoginPage";
import Home from "../components/Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="/home" component={< Home />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
