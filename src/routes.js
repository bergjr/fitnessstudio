import { CloudinaryContext } from 'cloudinary-react';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import ClassesPage from 'pages/ClassesPage';
import ContactUsPage from 'pages/ContactUsPage';
import MainPage from 'pages/MainPage';
import PageNotFound from 'pages/PageNotFound';
import PricingPage from 'pages/PricingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/styles.scss'

function AppRouter() {
  return (
    <CloudinaryContext cloudName="duhboe4r3"> 
      <BrowserRouter>
        <NavBar />
        <main style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CloudinaryContext>
  );
}

export default AppRouter;
