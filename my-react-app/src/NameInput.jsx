function NameInput({ name, setName }) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
export default NameInput;