import Header from "../components/Header.jsx";

function Home({ onNavigate }) {
  return (
    <>
      <Header title="Hiruy Recipe Platform" onNavigate={onNavigate} />

      <main className="recipe-grid">
        <p>
          Welcome to Hiruy Recipe Platform, where you can find recipe for
          different meals.
        </p>

        <article>
          <a onClick={() => onNavigate("detail")}>Vegetable Soup</a>
          <img
            src="https://www.inspiredtaste.net/wp-content/uploads/2025/11/How-to-Make-Vegetable-Soup-2.jpg"
            alt="A Vegetable Soup with fresh peas on top"
          />
          <p>
            A vegetable soup is a common dish typically prepared using a mix
            of vegetables and other ingredients.
          </p>
        </article>

        <article>
          <a onClick={() => onNavigate("detail")}>Grilled Chicken Sandwich</a>
          <img
            src="https://easychickenrecipes.com/wp-content/uploads/2023/06/grilled-chicken-sandwich-1-of-6-edited.jpg"
            alt="A Grilled Chicken Sandwich with taosted bread and vegetables"
          />
          <p>
            A grilled chicken sandwich features juicy, marinated chicken
            cooked and served on toasted bread with fresh vegetables and
            flavorful sauces.
          </p>
        </article>

        <article>
          <a onClick={() => onNavigate("detail")}>Doro Wat</a>
          <img
            src="https://eggs.ca/wp-content/uploads/2024/06/EFC-doro-wat-hero-1280x720-1.jpg"
            alt="Ethiopian Doro Wat"
          />
          <p>
            Doro Wat is a traditional Ethiopian stew made primarily with
            chicken and other ingredients.
          </p>
        </article>
      </main>
    </>
  );
}

export default Home;