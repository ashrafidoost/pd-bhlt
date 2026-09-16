const Pizza = (props) => {
  return (
    <div key={props.name + "12"}>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.description}</li>
      </ul>
    </div>
  );
};

export default Pizza;
