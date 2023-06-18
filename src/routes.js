import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import MainPage from 'pages/MainPage';
import PageNotFound from 'pages/PageNotFound';
import PricingPage from 'pages/PricingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/styles.scss'

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <main style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
