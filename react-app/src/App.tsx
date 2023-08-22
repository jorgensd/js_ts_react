import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const items = ["A", "B", "D"];
  const handleSelectItem = (item: string) => {
    console.log("ITEM WAS CHOSEN", item);
  };
  const [isClicked, setClicked] = useState(false);
  const onClick = () => {
    console.log("Clicked");
    setClicked(true);
  };

  return (
    // Get list-group from https://getbootstrap.com/docs/4.0/components/list-group/
    // and replace class= with className=
    <>
      <ListGroup
        items={items}
        heading="Things"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert text="This is an alert" /> */}

      {isClicked && (
        <>
          <Alert onClose={() => setClicked(false)}>
            <h1>This is an alert header</h1>
            <p>More information here, i think</p>
          </Alert>
        </>
      )}
      <div>
        {/* <a href="https://www.google.com"> */}
        <Button onClick={onClick} color="primary">
          <h1>This is the button text</h1>
        </Button>
        {/* </a> */}
      </div>

      {/* <ListGroup /> */}
    </>
  );
  // return (
  //   <div>
  //     <h1>Test</h1>
  //     <Message />
  //   </div>
  // );
}

export default App;
