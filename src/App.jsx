import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Routers from "./routers/Routers/routes";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-1200 w-full mx-auto">
        <Routers/>
      </div>
      <Footer />
    </>
  );
}

export default App;
