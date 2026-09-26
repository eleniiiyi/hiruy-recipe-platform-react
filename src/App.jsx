import { useState } from "react";
import Home from "./pages/Home.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [view, setView] = useState("home"); // "home" | "detail" | "add"

  function handleNavigate(target) {
    setView(target);
  }

  return (
    <>
      {view === "home" && <Home onNavigate={handleNavigate} />}
      {view === "detail" && <RecipeDetail onNavigate={handleNavigate} />}
      {view === "add" && <AddRecipe onNavigate={handleNavigate} />}
      <Footer />
    </>
  );
}

export default App;