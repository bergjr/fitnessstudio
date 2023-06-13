import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import MainPage from 'pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/styles.scss'

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <main style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1>Page does not exist.</h1>}/>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
