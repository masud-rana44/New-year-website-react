import img from "../assets/images/person.png";
import Description from "./Description";
import ListItem from "./ListItem";

const Failure = () => {
  return (
    <section className="section-failure">
      <div className="failure-columns">
        <img src={img} alt="Person Image" className="failure-img" />
        <div className="failure-content">
          <h2 className="heading-secondary mb-md">
            My failures of previous year
          </h2>
          <Description
            text="Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock."
            extraClass="mb-sm"
          />
          <ul className="failure-lists">
            <ListItem text={"Contrary to popular belief, is not simply."} />
            <ListItem text={"Contrary to popular belief."} />
            <ListItem text={"Contrary to popular , is not simply."} />
            <ListItem text={"Contrary to popular belief, is not simply."} />
            <ListItem text={"Contrary to popular simply."} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Failure;
