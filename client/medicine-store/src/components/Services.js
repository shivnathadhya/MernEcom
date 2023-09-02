import "../css/services.css";
import { Link } from "react-router-dom";

function Services() {
  const path = "/services";
  return (
    <div>
      <div className="main-container section-padding">
        <div className="first-container">
          <div className="ser-header1">
            <h2>All The Service You Will Get</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              It's important to address your health conditions during
              medications for the best substance.
            </p>
          </div>
          <Link className="ser-link1" to={path}>
            Learn More
          </Link>
        </div>
        <div className="second-container">
          <div className="number-part1">1</div>
          <div className="ser-header">
            <h2>Easy to use with us</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi
              nibh.
            </p>
          </div>
          <Link className="ser-link" to={path}>
            Learn More
          </Link>
        </div>
        <div className="rest-container">
          <div className="number-part">2</div>
          <div className="ser-header">
            <h2>Communicate with doctor</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              It's important to address your health conditions during
              medications for the best substance.
            </p>
          </div>
          <Link className="ser-link" to={path}>
            Learn More
          </Link>
        </div>
        <div className="rest-container">
          <div className="number-part">3</div>
          <div className="ser-header">
            <h2>Med and refill reminder</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              Lorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi
              nibh.
            </p>
          </div>
          <Link className="ser-link" to={path}>
            Learn More
          </Link>
        </div>
        <div className="rest-container">
          <div className="number-part">4</div>
          <div className="ser-header">
            <h2>Drug interaction warning</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              It's important to address your health conditions during
              medications for the best substance.
            </p>
          </div>
          <Link className="ser-link" to={path}>
            Learn More
          </Link>
        </div>
        <div className="rest-container">
          <div className="number-part">5</div>
          <div className="ser-header">
            <h2>24/7 App Support</h2>
          </div>
          <div className="ser-paragraph">
            <p>
              ILorem ipsum dolor sit amet. Risus dapibus eget id aliquam sit mi
              nibh.
            </p>
          </div>
          <Link className="ser-link" to={path}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
