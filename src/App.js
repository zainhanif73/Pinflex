import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./MainPage/Main";
import MovieDetail from "./Movie/Main";

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
        <Route
          path="movie/:id/:id"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="movie/:id"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="movie"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App;
