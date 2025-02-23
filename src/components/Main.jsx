import ComicsList from "./ComicsList";
import LoadBtn from "./LoadBtn";
import MainMenu from "./MainMenu";
export default function Main() {
  return (
    <main>
      <section>
        <div className="container">
          <MainMenu />
          <ComicsList />
          <LoadBtn />
        </div>
      </section>
      <section>
        <div className="container">
          <ul>
            <li>
              <img src="./buy.png" alt="" />
              <a href=""> DIGITAL COMICS</a>
            </li>
            <li>
              <img src="./buy2.png" alt="" />
              <a href="">DC MERCHANDISE</a>
            </li>
            <li>
              <img src="./buy3.png" alt="" />
              <a href="">SUBSCRIPTION</a>
            </li>
            <li>
              <img src="./buy4.png" alt="" />
              <a href="">COMICS SHOP LOCATION</a>
            </li>
            <li>
              <img src="./buy4.png" alt="" />
              <a href="">DC POWER VISA</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
