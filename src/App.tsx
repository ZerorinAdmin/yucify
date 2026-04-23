import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { PhotoCleanerTermsPage } from "./pages/PhotoCleanerTermsPage";
import { PhotoCleanerPrivacyPage } from "./pages/PhotoCleanerPrivacyPage";

function AppShell() {
  const location = useLocation();
  const hideSiteChrome = location.pathname.startsWith("/photo-cleaner/");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!hideSiteChrome && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/photo-cleaner/terms" element={<PhotoCleanerTermsPage />} />
          <Route path="/photo-cleaner/privacy-policy" element={<PhotoCleanerPrivacyPage />} />
        </Routes>
      </main>
      {!hideSiteChrome && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
