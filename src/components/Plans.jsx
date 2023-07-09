import { web, js, smoke, ecom } from "../assets/images/icons";
import Plan from "./Plan";

const Plans = () => {
  return (
    <section className="section-plans">
      <h2 className="heading-secondary">My Plans</h2>
      <div className="plans-container">
        <Plan img={web} title="Web Development" actionText="I want to start" />
        <Plan img={js} title="Javascript" actionText="I want to learn" />
        <Plan img={smoke} title="Smoking Habit" actionText="I want to end" />
        <Plan img={ecom} title="E-commerce" actionText="I want to develop" />
      </div>
    </section>
  );
};

export default Plans;
