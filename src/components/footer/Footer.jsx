import React from "react";

const Footer = () => {
  return (
    
      <footer className="footer-section">
        <div className="footer-div">
          <div className="container">
            <section className="section-one">
              <div className="footer-logo">
                <p>e/stadium</p>
              </div>
              <div className="footer-info">
                <p>La plataforma de esports latina más poderosa del mundo.</p>
              </div>
            </section>

            <section className="section-two">
              <div className="footer-widget-heading">
                <div className="footer-sections">
                  <h3>About us </h3>
                </div>
              </div>
              <ul className="list">
                <li>
                  <a href="#" className="item">
                    Quienes somos
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    Juegos
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    Torneos
                  </a>
                </li>
              </ul>
            </section>

            <section className="section-three">
              <div className="footer-widget-heading">
                <div className="footer-sections">
                  <h3>Contact us</h3>
                </div>
                <p className="phone">+576047828082</p>
              </div>
            </section>
            <section className="section-four">
              <div className="footer-widget-heading">
                <div className="footer-sections">
                  <h3>Follow us </h3>
                </div>
                <div className="icons">
                  <a href="">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL1JREFUSEvtlIEJwjAQRV836AY6ghtUJ9EROoJOoCO4ghvoBDqCbuAGlQ8JHGo9UhJUaKBw0Ob/+4+7VhQ+VWF9fs5gCmyBGaBa5wTM+0ikJJDgGaifxLIZ7IHlm06zGRyBJhgcgBVw94YkBVFnxDbA2hPX+68bCMMkdGo7Fi49cYpi/RLKS2C59xH5iCuHwcKkSU6wC0uli3GCVN+Aa1BrgUuORfvPKbLJxwTu4o+IXESDPvB+FYNE7aXiBg+0MykZNmDKCAAAAABJRU5ErkJggg=="
                      className="social-icons"
                    />
                  </a>
                  <a href="">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg=="
                      className="social-icons"
                    />
                  </a>
                  <a href="">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg=="
                      className="social-icons"
                    />
                  </a>
                  <a href="">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP5JREFUSEvtlc8NAUEUh7+tgBJw4IgK0IESnCUOEgVQgEQkzkoQHdABNwcHOqAB5MnbZHYysXbGxmXnNPt23u97/2Y3IucV5ayPC1ADHsDlF3AbsARGKjwHJqEQE9AATpZgBbiGQNIA1dBS2SVaAUONeAGMQ6IXX1eT69rkc6i4C9AFnip8Bw66bwEly14GmoD4yLmjq5x2BrG4aO3VWfY7oKMAsU+BDSAQc4l9Zhp8AHI/RNgWj3V7GtD72QeQ1pot0I8P+QJMkQGwNqiSoYx3UAZtYwBE6GYMQaIyvhnYfuYQFABn74oSJT4Vrgv6dYnSbmnm93/56WeO8pPDC6yAShkkBxiqAAAAAElFTkSuQmCC"
                      className="social-icons"
                    />
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="copyrigth">
            <p>Copyright &copy; 2022 Estadium Todos los derechos reservados </p>
          </div>
        </div>
      </footer>
  
  );
};

export {Footer};
