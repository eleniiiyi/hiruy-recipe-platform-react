function Header({ title, onNavigate }) {
  const linkClass =
    "cursor-pointer font-semibold text-white hover:animate-bounce-fast hover:text-accent";

  return (
    <header className="flex items-center justify-between p-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-2">
      <h1>{title}</h1>
      <nav className="flex gap-8 max-[480px]:flex-wrap">
        <a className={linkClass} onClick={() => onNavigate("home")}>Home</a>
        <a className={linkClass} onClick={() => onNavigate("add")}>Add a Recipe</a>
      </nav>
    </header>
  );
}

export default Header;