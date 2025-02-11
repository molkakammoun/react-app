function listgroup() {
  let items = ["london", "paris", "tunis", "newyork", "tokyo"];

  return (
    <>
      <h1>liste</h1>
      {items.length == 0 ? <p>no item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default listgroup;
