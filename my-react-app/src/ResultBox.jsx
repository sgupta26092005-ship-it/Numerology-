function ResultBox({ value, label }) {
  return (
    <>
      <div className="result">{value}</div>
      <div className="label">{label}</div>
    </>
  );
}
export default ResultBox;