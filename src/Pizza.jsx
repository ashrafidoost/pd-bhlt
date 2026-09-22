const Pizza = (props) => {
  return (
    <div key={props.name + "12"}>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.description}</li>
        <img
          src={props.image}
          alt={props.name}
          style={{ width: 150, borderRadius: 20 }}
        />
      </ul>
    </div>
  );
};

export default Pizza;
