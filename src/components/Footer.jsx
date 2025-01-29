export default function Footer() {
  return (
    <footer>
      <section className="top-section ">
        <div className="container ">
          {/* COMICS n SHOP */}
          <div className="lists">
            {/*DC Comics */}
            <div>
              <h1>DC COMICS</h1>
              <ul>
                <li>
                  <a href="">Characters</a>
                </li>
                <li>
                  <a href="">Comics</a>
                </li>
                <li>
                  <a href="">Movies</a>
                </li>
                <li>
                  <a href="">TV</a>
                </li>
                <li>
                  <a href="">Games</a>
                </li>
                <li>
                  <a href="">Videos</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
              </ul>
            </div>
            {/* shop */}
            <div>
              <h1>SHOP</h1>
              <ul>
                <li>
                  <a href="">Shop DC</a>
                </li>
                <li>
                  <a href="">Shop DC Collectibles</a>
                </li>
              </ul>
            </div>
          </div>
          {/* DC */}
          <div className="lists">
            <h1>DC</h1>
            <ul>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">Privacy policy (New)</a>
              </li>
              <li>
                <a href="">Ad Choices</a>
              </li>
              <li>
                <a href="">Advertising</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Subscription</a>
              </li>
              <li>
                <a href="">Talent Workshop</a>
              </li>
              <li>
                <a href="">CPSC Certificates</a>
              </li>
              <li>
                <a href="">Ratings</a>
              </li>
              <li>
                <a href="">Shop Help</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* SITES */}
          <div>
            <h1>SITES</h1>
            <ul>
              <li>
                <a href="">DC</a>
              </li>
              <li>
                <a href="">MAD Magazine</a>
              </li>
              <li>
                <a href="">DC Kids</a>
              </li>
              <li>
                <a href="">DC Universe</a>
              </li>
              <li>
                <a href="">DC Power Visa</a>
              </li>
            </ul>
          </div>
          {/* <div className="logo"></div> */}
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
