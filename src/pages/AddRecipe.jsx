import Header from "../components/Header.jsx";

function AddRecipe({ onNavigate }) {
  return (
    <>
      <Header title="Add a Recipe" onNavigate={onNavigate} />

      <main>
        <form>
          <label htmlFor="recipeName">Recipe Name</label>
          <input type="text" id="recipeName" />

          <label htmlFor="category">Category</label>
          <select id="category">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
            <option>Snack</option>
          </select>

          <label htmlFor="ingredients">Ingredients</label>
          <textarea id="ingredients"></textarea>

          <label htmlFor="preparationSteps">Preparation Steps</label>
          <textarea id="preparationSteps"></textarea>

          <label htmlFor="servings">Servings</label>
          <input type="number" id="servings" />

          <button type="submit">Add recipe</button>
        </form>
      </main>
    </>
  );
}

export default AddRecipe;