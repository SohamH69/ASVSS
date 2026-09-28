import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../features/home/HomePage";
import FootballPage from "../features/football/FootballPage";
import HealthcarePage from "../features/healthcare/HealthcarePage";
import SelfReliancePage from "../features/self-reliance/SelfReliancePage";
import DonatePage from "../components/DonateSection";


function AppRouter() {
  return (
    <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/football" element={<FootballPage />} />
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/self-reliance" element={<SelfReliancePage />} />
          <Route path="/donate" element={<DonatePage />}/>
        </Route>
    </Routes>
  )
}

export default AppRouter