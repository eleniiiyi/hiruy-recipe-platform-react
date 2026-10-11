import Header from "../components/Header.jsx";

function Home({ onNavigate }) {
  const articleClass =
    "rounded-lg border border-card-border bg-card p-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:animate-bounce-once";
  const linkClass = "cursor-pointer font-semibold text-primary";
  const imgClass = "inline w-full rounded align-baseline";

  return (
    <>
      <Header title="Hiruy Recipe Platform" onNavigate={onNavigate} />

      <main className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-6 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
        <p>
          Welcome to Hiruy Recipe Platform, where you can find recipe for
          different meals.
        </p>

        <article className={articleClass}>
          <a className={linkClass} onClick={() => onNavigate("detail")}>Vegetable Soup</a>
          <img
            className={imgClass}
            src="https://www.inspiredtaste.net/wp-content/uploads/2025/11/How-to-Make-Vegetable-Soup-2.jpg"
            alt="A Vegetable Soup with fresh peas on top"
          />
          <p className="text-left">
            A vegetable soup is a common dish typically prepared using a mix
            of vegetables and other ingredients.
          </p>
        </article>

        <article className={articleClass}>
          <a className={linkClass} onClick={() => onNavigate("detail")}>Grilled Chicken Sandwich</a>
          <img
            className={imgClass}
            src="https://easychickenrecipes.com/wp-content/uploads/2023/06/grilled-chicken-sandwich-1-of-6-edited.jpg"
            alt="A Grilled Chicken Sandwich with taosted bread and vegetables"
          />
          <p className="text-left">
            A grilled chicken sandwich features juicy, marinated chicken
            cooked and served on toasted bread with fresh vegetables and
            flavorful sauces.
          </p>
        </article>

        <article className={articleClass}>
          <a className={linkClass} onClick={() => onNavigate("detail")}>Doro Wat</a>
          <img
            className={imgClass}
            src="https://eggs.ca/wp-content/uploads/2024/06/EFC-doro-wat-hero-1280x720-1.jpg"
            alt="Ethiopian Doro Wat"
          />
          <p className="text-left">
            Doro Wat is a traditional Ethiopian stew made primarily with
            chicken and other ingredients.
          </p>
        </article>
      </main>
    </>
  );
}

export default Home;