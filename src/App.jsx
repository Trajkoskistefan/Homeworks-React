import { useState } from "react";
import "./App.css";
import ListItem from "./components/homework-2/ListItem";
// import MyHeaderComponent from "./components/headerComponent";
// import MyMenuComponent from "./components/menuComponents";
// import MyFooterComponent from "./components/footerComponent";
// import { Button } from "./components/button/simpleButton";
// import UserProfileClass from "./components/homework-2/classcomponents/UserProfileClass";
// import UserProfileFunction from "./components/homework-2/functionalcomponents/UserProfileFunction";

const tasks = [
  { name: "Learn React", priority: "High" },
  { name: "Do Groceries", priority: "Low" },
  { name: "Exercise", priority: "High" },
  { name: "Read a Book", priority: "Medium" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-wrapper">
      {/* <MyHeaderComponent />
      <MyMenuComponent/>
      <MyFooterComponent/> */}
      {/* <UserProfileClass name=" James Hetfield" age="61" hobby=" Hunter"/>
      <UserProfileFunction name=" Lars Ulrich" age="59" hobby=" Tennis player"/> */}
      <h1>Task List</h1>
      <ListItem items={tasks} />
    </div>
  );
}

export default App;
