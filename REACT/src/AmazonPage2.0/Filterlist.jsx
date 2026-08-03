function Filterlist(props) {
  // props
  // title
  // array of options {new, Renewed, user}
  // options {Adjustable Length, TangleFree, Anti-chev}
  const { title, options } = props;

  return (
    <>
      <div>
        <b>{title}</b>
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <input type="checkbox" id={option} name={option} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
        <br />
      </div>
    </>
  );
}

export default Filterlist;