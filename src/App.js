import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
