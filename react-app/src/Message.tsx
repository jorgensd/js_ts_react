function Message() {
  // JavaScript XML, can use `babeljs.io` to see how it looks like in JavaScript
  const name = "K.D.";
  if (name) return <h1>Hello world {name}</h1>;
  return <h1>Bye</h1>;
}

export default Message;
