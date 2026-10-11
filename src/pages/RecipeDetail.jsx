import Header from "../components/Header.jsx";

function RecipeDetail({ onNavigate }) {
  const cell = "border-b border-[#ddd] px-4 py-2 text-left";

  return (
    <>
      <Header title="Vegetable Soup" onNavigate={onNavigate} />

      <main className="grid grid-cols-[1fr_2fr] items-start gap-6 p-6">
        <img
          className="col-start-1 w-full rounded-lg"
          src="https://www.inspiredtaste.net/wp-content/uploads/2025/11/How-to-Make-Vegetable-Soup-2.jpg"
          alt="Vegetable Soup"
        />
        <h2 className="col-start-2 m-0 self-end">Ingredients</h2>
        <ul className="col-start-2 m-0">
          <li>3 tablespoons of olive oil</li>
          <li>1 onion</li>
          <li>2 carrots</li>
          <li>1 celery</li>
          <li>2 tablespoons of tomato paste</li>
          <li>4 cloves of garlic</li>
          <li>Frozen peas</li>
          <li>Spinach</li>
          <li>Ground black pepper</li>
        </ul>

        <h2 className="col-start-2 m-0 self-end">Preparation Steps</h2>
        <ol className="col-start-2 m-0">
          <li>Gather all ingredients</li>
          <li>
            Mix onions, carrots, and celery. Adding tomato paste at this stage
            helps to deepen the flavor and give your soup a richer color.
          </li>
          <li>
            Stir in aromatics like garlic, salt, and pepper, and cook for a
            minute.
          </li>
          <li>Simmer for about 20 minutes</li>
          <li>
            Ingredients that cook quickly, like frozen peas or spinach, should
            be added at the end to prevent them from becoming mushy and
            maintain their bright color and texture.
          </li>
          <li>
            Add splash of apple cider vinegar or fresh lemon juice at the end
            can brighten up the flavors and make the soup taste less
            one-dimensional.
          </li>
          <li>Taste your soup and adjust the seasonings and serve.</li>
        </ol>

        <table className="mt-4 border-collapse">
          <tbody>
            <tr>
              <th className={`${cell} text-primary`}>Info table</th>
            </tr>
            <tr>
              <td className={cell}>Category</td>
              <td className={cell}>Breakfast</td>
            </tr>
            <tr>
              <td className={cell}>Servings</td>
              <td className={cell}>2</td>
            </tr>
            <tr>
              <td className={cell}>Prep Time</td>
              <td className={cell}>30 minutes</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default RecipeDetail;