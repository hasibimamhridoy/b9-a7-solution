import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  );
}

export default App;
