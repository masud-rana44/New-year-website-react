const Plan = ({ img, title, actionText }) => {
  return (
    <div className="plan">
      <img src={img} alt="icons" className="plan-img" />
      <h3 className="plan-title">{title}</h3>
      <p className="plan-action">{actionText}</p>
    </div>
  );
};

export default Plan;
