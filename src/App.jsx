import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AllReviews } from "./pages/AllReviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/all-reviews" element={<AllReviews />}></Route>
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
