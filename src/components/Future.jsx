import Description from "./Description";
import { fb, twitter, youtube } from "../assets/images/icons";

const Future = () => {
  return (
    <div className="future-col">
      <h3 className="future-heading">Future</h3>
      <Description
        text="There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words"
        extraClass="mb-md"
      />

      <p className="future-contact mb-sm">
        <a href="mainto:info@gmail.com">Email : info@gmail.com</a>
      </p>
      <p className="future-contact mb-lg">
        <a href="tel:01500 00 00 00">Phone : 01500 00 00 00</a>
      </p>
      <ul className="social-links">
        <li>
          <a href="#" className="social-link">
            <img src={fb} alt="fb icon" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <img src={twitter} alt="twitter icon" />
          </a>
        </li>
        <li>
          <a href="#" className="social-link">
            <img src={youtube} alt="youtube icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Future;
