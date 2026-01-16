import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/MainPage";
import DotaPage from "./pages/DotaPage";
import ValorantPage from "./pages/ValorantPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFoundPage from "./pages/NotFoundPage";
import PublicOffer from "./pages/PublicOffer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import "./App.css";
import TrainingRules from "./pages/TrainingRules";
import CoachesGuide from "./pages/CoachesGuide";
import CoachesRules from "./pages/CoachesRules";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/dota2"
          element={
            <Layout>
              <DotaPage />
            </Layout>
          }
        />
        <Route
          path="/valorant"
          element={
            <Layout>
              <ValorantPage />
            </Layout>
          }
        />
        <Route
          path="/not-found"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
        <Route
          path="/public-offer"
          element={
            <Layout>
              <PublicOffer />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="/trainings-rules"
          element={
            <Layout>
              <TrainingRules />
            </Layout>
          }
        />
        <Route
          path="/coaches-guide"
          element={
            <Layout>
              <CoachesGuide />
            </Layout>
          }
        />
        <Route
          path="/coaches-rules"
          element={
            <Layout>
              <CoachesRules />
            </Layout>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
