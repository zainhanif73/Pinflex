import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./MainPage/Main";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div></div>}>
              <Main />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App;
