function Header({ title, onNavigate }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <a onClick={() => onNavigate("home")}>Home</a>
        <a onClick={() => onNavigate("add")}>Add a Recipe</a>
      </nav>
    </header>
  );
}

export default Header;