import Header from "../components/Header.jsx";

function AddRecipe({ onNavigate }) {
  const label = "mb-1 font-semibold";
  const field =
    "rounded border border-[#ccc] bg-white p-[0.6rem] text-base leading-normal focus:border-primary focus:outline-none";

  return (
    <>
      <Header title="Add a Recipe" onNavigate={onNavigate} />

      <main>
        <form className="flex max-w-500px flex-col gap-4 p-6">
          <label className={label} htmlFor="recipeName">Recipe Name</label>
          <input className={field} type="text" id="recipeName" />

          <label className={label} htmlFor="category">Category</label>
          <select className={field} id="category">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Dessert</option>
            <option>Snack</option>
          </select>

          <label className={label} htmlFor="ingredients">Ingredients</label>
          <textarea className={field} id="ingredients"></textarea>

          <label className={label} htmlFor="preparationSteps">Preparation Steps</label>
          <textarea className={field} id="preparationSteps"></textarea>

          <label className={label} htmlFor="servings">Servings</label>
          <input className={field} type="number" id="servings" />

          <button
            className="cursor-pointer self-start rounded bg-primary px-8 py-[0.7rem] text-[13.333px] leading-normal text-white hover:bg-accent hover:text-primary"
            type="submit"
          >
            Add recipe
          </button>
        </form>
      </main>
    </>
  );
}

export default AddRecipe;