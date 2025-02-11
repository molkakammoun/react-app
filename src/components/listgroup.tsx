function listgroup() {
  let items = ["london", "paris", "tunis", "newyork", "tokyo"];
  items=[];
  
  return (
    <>
      <h1>liste</h1>
      {items.length==0?<p>no item found</p>:null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>

        ))}
      </ul>
    </>
  );
}
export default listgroup;
