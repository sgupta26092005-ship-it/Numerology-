function Buttons({ onCalc, onReset }) {
  return (
    <div className="btn-group">
      <button onClick={onCalc}>Calculate</button>
      <button className="secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
export default Buttons;