import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screen/HomeScreen";
import { ProductScreen } from "./screen/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-3">
          <Container>
            <Route path={"/"} component={HomeScreen} exact />
            <Route path={"/product/:id"} component={ProductScreen} exact />
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
