import Header from "../../../Components/Header/Header";
import "./Banner.css";

function Banner() {
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Movie name</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            `In  future world where humanity has colonized distant planets,
          "Beyond the Horizon" takes audiences on a thrilling journey through
          the cosmos. Captain Alex Mercer, a seasoned astronaut, leads an
          intrepid crew on the spaceship Pioneer  search a habitable
          exoplanet that could be the key to humanitys survival. As the crew
          navigates through uncharted space, they encounter mysterious
          anomalies, alien civilizations, and the unforgiving challenges of the
          cosmos. Tensions rise personal conflicts intertwine with the
          missions overarching goal. Along the way, they uncover ancient
          secrets that could reshape the destiny of both Earth and the far
          reaches of the universe.`,
            200
          )}
        </h1>
        <div className="bottom-fade" />
      </div>
    </div>
  );
}

export default Banner;
