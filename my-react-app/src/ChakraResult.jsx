function ChakraResult({ chakra }) {
  return (
    <>
      <div className="result" style={{ fontSize: "22px", fontWeight: "bold" }}>
        {chakra}
      </div>
      <div className="label">Detected Chakra</div>
    </>
  );
}
export default ChakraResult;