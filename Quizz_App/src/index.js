import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageQuiz from './components/Admin/Content/ManageQuiz';
import ManageQuestion from './components/Admin/Content/ManageQuestion';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path='users' element={<User></User>}></Route>
      </Route>
      <Route path="admins" element={<Admin />}>
        <Route index element={<DashBoard></DashBoard>}></Route>
        <Route path='manage-users' element={<ManageUser></ManageUser>}></Route>
        <Route path='manage-quizs' element={<ManageQuiz></ManageQuiz>}></Route>
        <Route path='manage-questions' element={<ManageQuestion></ManageQuestion>}></Route>

      </Route>

    </Routes>

  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
