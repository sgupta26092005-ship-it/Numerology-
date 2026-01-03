function ConnectionResult({ meaning }) {
  return (
    <>
      <div className="result" style={{ fontSize: "18px" }}>
        {meaning}
      </div>
      <div className="label">Connection Number Meaning</div>
    </>
  );
}
export default ConnectionResult;