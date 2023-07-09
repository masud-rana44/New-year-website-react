const ListItem = ({ text }) => {
  return (
    <li>
      <span className="material-symbols-outlined"> done </span>
      <span>{text}</span>
    </li>
  );
};

export default ListItem;
