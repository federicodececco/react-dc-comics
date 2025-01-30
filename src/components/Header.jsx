import headerMenu from "../data/headerMenu";

export default function Header() {
  return (
    <header className="container" id="ciao">
      <nav className="row">
        <div>
          <img src="./dc-logo.png" alt="" />
        </div>
        <ul className="row">
          {headerMenu.map((elem) => {
            return (
              <li
                id={`headerList${elem.id}`}
                key={elem.id}
                className={elem.state ? "active" : ""}
              >
                <a href={elem.link}> {elem.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
