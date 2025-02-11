function listgroup() {
  const items = ["london", "paris", "tunis", "newyork", "tokyo"];
  items.map((item) => <li>{item}</li>);

  return (
    <>
      <h1>liste</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>

        ))}
      </ul>
    </>
  );
}
export default listgroup;
