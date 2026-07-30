function Filterlist() {
  return (
    <>
      <div>
        <b>Condition</b>
      </div>
      <div>
        <input type="checkbox" id="new" name="new" value="new" />
        <label htmlFor="new"> New</label>
        <br />
        <input type="checkbox" id="used" name="used" value="used" />
        <label htmlFor="used"> Used</label>
        <br />
        <input type="checkbox" id="renewed" name="renewed" value="renewed" />
        <label htmlFor="renewed"> Renewed</label>
        <br />
      </div>
    </>
  );
}

export default Filterlist;