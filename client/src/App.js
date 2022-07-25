import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { HomeScreen } from "./screen/HomeScreen";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
