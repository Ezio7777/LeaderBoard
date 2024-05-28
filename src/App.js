import Footer from "./components/footer";
import Leaderboard from "./components/leaderboard";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Leaderboard />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
