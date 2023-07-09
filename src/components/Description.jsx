const Description = ({ text, extraClass }) => {
  return <p className={`description ${extraClass}`}>{text}</p>;
};

export default Description;
