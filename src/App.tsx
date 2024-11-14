
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import SuperHerosPage from "./Components/SuperHerosPage";
import RQSuperHerosPage from "./Components/RQSuperHerosPage";
import Homepage from "./Components/Homepage";
import { QueryClientProvider,QueryClient } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import './App.css'
const App = () => {
  const queryClient=new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHerosPage />} />

            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHerosPage />}
            />

            <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />

            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </>
  );
};

export default App;
