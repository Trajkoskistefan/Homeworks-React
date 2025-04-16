import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homework-7/components/Home";
import CountryCard from "./components/homework-7/components/CountryCard";
import NotFound from "./components/homework-7/components/NotFound";

// import ListItem from "./components/homework-2/ListItem";
// import family from "./components/homework-2/family/familyData";
// import Parent from "./components/homework-2/family/Parent";
// import ColorPicker from "./components/homework-5/colorPicker";
// import MultiInputForm from "./components/homework-6/multiInputForm";
// import MyHeaderComponent from "./components/headerComponent";
// import MyMenuComponent from "./components/menuComponents";
// import MyFooterComponent from "./components/footerComponent";
// import { Button } from "./components/button/simpleButton";
// import UserProfileClass from "./components/homework-2/classcomponents/UserProfileClass";
// import UserProfileFunction from "./components/homework-2/functionalcomponents/UserProfileFunction";

// const tasks = [
//   { name: "Learn React", priority: "High" },
//   { name: "Do Groceries", priority: "Low" },
//   { name: "Exercise", priority: "High" },
//   { name: "Read a Book", priority: "Medium" },
// ];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CountryCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
    // <div className="content-wrapper">
    //   <MultiInputForm />
    //   {/* <MyHeaderComponent />
    //   <MyMenuComponent/>
    //   <MyFooterComponent/> */}
    //   {/* <UserProfileClass name=" James Hetfield" age="61" hobby=" Hunter"/>
    //   <UserProfileFunction name=" Lars Ulrich" age="59" hobby=" Tennis player"/> */}
    //   {/* <h1>Task List</h1>
    //   <ListItem items={tasks} /> */}
    //   {/* <Parent family={family}/> */}
    // </div>
  );
}

export default App;
