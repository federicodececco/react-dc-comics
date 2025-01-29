import footerMenu from "../data/footerMenu";
console.log(footerMenu);
export default function Footer() {
  return (
    <footer>
      <section className="top-section ">
        <div className="container">
          <ul>
            {footerMenu.map((elem) => {
              return (
                <li key={elem.id}>
                  <p>{elem.title}</p>
                  <ul>
                    {elem.links.map((subElem) => {
                      return (
                        <li>
                          <a href="">{subElem}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="bottom-section">
        <div className="container">
          <div className="btn-container">
            <button className="primary-btn">SIGN-UP NOW!</button>
          </div>
          <div>
            <p>FOLLOW US</p>
            <ul>
              <li>
                <a href="">
                  <img src="./footer-facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./footer-twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./footer-youtube.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./footer-pinterest.png" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="./footer-periscope.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
