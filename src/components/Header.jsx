import Button from "./Button";
import Description from "./Description";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="heading-primary">
          All Thinks Are Possible If You believe
        </h1>
        <Description
          text="There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words"
          extraClass="mb-lg"
        />
        <Button />
      </div>
    </header>
  );
};

export default Header;
