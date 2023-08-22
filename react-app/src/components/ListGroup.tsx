import { Fragment, useState } from "react";
import { MouseEvent } from "react";

// Create an interface for a component
// Should be immutable
interface Properties {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //
}

// Get list-group from https://getbootstrap.com/docs/4.0/components/list-group/
// and replace class= with className=
// function ListGroup(props: Properties) {
//   const items = props.items; //
//   const heading = props.heading//;
function ListGroup({ items, heading, onSelectItem }: Properties) {
  // Any variable inside a function (local variable/state variable) can be declared as mutable

  // let selectedIndex = -1;
  // Set state of selectedindex to expose variable to other components
  //
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const message = items.length == 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return items.length == 0 ? <p>No item found</p> : null;
  };
  // Event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };
  return (
    // Instead of wrapping multiple html elements in a div to make it possible to return, we use a react fragment
    // <div>
    // Equivalent syntax is
    <>
      {/* <Fragment> */}
      <h1>{heading}</h1>
      {/* {message} */}
      {getMessage()}
      <ul className="list-group">
        {/* Wrapped in braces to run dynamic code */}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            //{handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* </Fragment> */}
    </>
  );
  // </div>
}

export default ListGroup;
