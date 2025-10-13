import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StoryPage from './pages/StoryPage';
import VisionPage from './pages/VisionPage';
import MissionPage from './pages/MissionPage';
import ValuesPage from './pages/ValuesPage';
import BoardPage from './pages/BoardPage';
import ManagementPage from './pages/ManagementPage';
import CompaniesPage from './pages/CompaniesPage';
import ContactPage from './pages/ContactPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CareerPage from './pages/CareerPage';
import InvestorRelationsPage from './pages/InvestorRelationsPage';
import MediaPage from './pages/MediaPage';
import TechnologyPage from './pages/TechnologyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/hakkimizda"
              element={<AboutPage />}
            />
            <Route
              path="/hikayemiz"
              element={<StoryPage />}
            />
            <Route
              path="/vizyon"
              element={<VisionPage />}
            />
            <Route
              path="/misyon"
              element={<MissionPage />}
            />
            <Route
              path="/degerler"
              element={<ValuesPage />}
            />
            <Route
              path="/yonetim-kurulu"
              element={<BoardPage />}
            />
            <Route
              path="/ust-yonetim"
              element={<ManagementPage />}
            />
            <Route
              path="/grup-sirketleri"
              element={<CompaniesPage />}
            />
            <Route
              path="/surdurulebilirlik"
              element={<SustainabilityPage />}
            />
            <Route
              path="/kariyer"
              element={<CareerPage />}
            />
            <Route
              path="/yatirimci-iliskileri"
              element={<InvestorRelationsPage />}
            />
            <Route
              path="/medya"
              element={<MediaPage />}
            />
            <Route
              path="/teknoloji-inovasyon"
              element={<TechnologyPage />}
            />
            <Route
              path="/iletisim"
              element={<ContactPage />}
            />
            <Route
              path="/gizlilik-politikasi"
              element={<PrivacyPolicyPage />}
            />
            <Route
              path="/kullanim-kosullari"
              element={<TermsOfUsePage />}
            />
            <Route
              path="/cerez-politikasi"
              element={<CookiePolicyPage />}
            />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
