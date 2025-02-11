import { MouseEvent } from "react";
function listgroup() {
  let items = ["london", "paris", "tunis", "newyork", "tokyo"];

  const handleClick=(event: MouseEvent)=>console.log(Event) ;

  return (
    <>
      <h1>liste</h1>
      {items.length == 0 ? <p>no item found</p> : null}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default listgroup;
