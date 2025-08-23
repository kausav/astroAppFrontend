import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Bring Harmony to Your Home & Life</h1>
          <p>
            Transform your space with the ancient wisdom of Vastu Shastra and
            Astrology. Expert guidance for a balanced, prosperous life.
          </p>
          <Link to="/queries" class="cta-button">
            Ask Your Question
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
