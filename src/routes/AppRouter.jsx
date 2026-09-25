import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../features/home/HomePage";
import FootballPage from "../features/football/FootballPage";


function AppRouter() {
  return (
    <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/football" element={<FootballPage />} />
        </Route>
    </Routes>
  )
}

export default AppRouter