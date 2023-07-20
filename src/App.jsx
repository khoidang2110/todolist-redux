import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from "react-bootstrap/Button";
import Footer from "./Components/Footer";
import FormContainer from "./Components/FormContainer";
import HomeScreen from "./Screen/HomeScreen";
function App() {
  return (
    <FormContainer>
      <HomeScreen />
      <Footer />
    </FormContainer>
  );
}

export default App;
