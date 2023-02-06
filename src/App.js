import Container from "./components/Container";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content></Content>
      <Widgets></Widgets>
    </Container>
  );
}

export default App;
