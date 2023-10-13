


import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from './LocationForm';
import ConferenceForm from "./Conference";
import PresentationForm from "./PresentationForm";

function App(props) {
  if (props.attendees === undefined) {
    <h1>Hello</h1>
    return null;
  }
  return (
    <>
      <Nav />
      
      <div className="container">
        {/* <LocationForm /> */}
        <AttendeesList attendees={props.attendees} />
        {/* <ConferenceForm /> */}
        <PresentationForm />
      </div>
    </>
  );
}

export default App;
