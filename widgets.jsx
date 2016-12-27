import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from "./tabs";
import Clock from "./clock";

const Panes = [
  { title: "one", content: "First pane" },
  { title: "two", content: "Second pane" },
  { title: "three", content: "Third pane" }
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Tabs panes={Panes} />
        <Clock />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
});
