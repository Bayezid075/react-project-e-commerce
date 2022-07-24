import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <main>
        <Header />{" "}
        <Container>
          <h1> Shop </h1>{" "}
        </Container>
        <Footer />
      </main>
    </div>
  );
}

export default App;
