import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Candidatelist from "./components/Career/Candidate/CandidateList";
import Vacancylist from "./components/Career/Vacancy/VacancyList";
import Sidenavbar from "./layout/Sidenavbar";
import Addjobvacancy from "./components/Career/AddJob";
import AllPackageList from "./components/PackagesManagement/PackageManagementList/AllPackageList";
import AddPackage from "./components/PackagesManagement/AddPackage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route
          path="/allpackagelist"
          element={<Sidenavbar><AllPackageList /></Sidenavbar>}
        />
        <Route
          path="/addpackage"
          element={<Sidenavbar><AddPackage /></Sidenavbar>}
        />
        <Route
          path="/"
          element={<Sidenavbar><Candidatelist /></Sidenavbar>}
        />
        <Route
          path="/Vacancylist"
          element={<Sidenavbar><Vacancylist /></Sidenavbar>}
        />
        <Route
          path="/Addvacancy"
          element={<Sidenavbar><Addjobvacancy /></Sidenavbar>}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;