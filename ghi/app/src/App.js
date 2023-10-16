


import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import MainPage from "./MainPage"
import AttendeesList from "./AttendeesList";
import LocationForm from './LocationForm';
import ConferenceForm from "./Conference";
import AttendConferenceForm from "./AttendConferenceForm";
import PresentationForm from "./PresentationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  if (props.attendees === undefined) {
    <h1>Hello</h1>
    return null;
  }
  return (
  //   <BrowserRouter>
  //     <Nav />
      
  //     <div className="container">
  //       <MainPage />
  //       <LocationForm />
  //       <AttendeesList attendees={props.attendees} />
  //       <ConferenceForm />
  //       <AttendConferenceForm />
  //       <PresentationForm />
  //     </div>
  //  </BrowserRouter>



<BrowserRouter>
				<Nav />
				<div className="container">
					<Routes>
						<Route exact index element={<MainPage />} />
						<Route exact path="/conferences/new" element={<ConferenceForm />} />

						<Route
							exact
							path="/attendees/new"
							element={<AttendConferenceForm />}
						/>

						<Route exact path="/locations/new" element={<LocationForm />} />

						<Route
							exact
							path="/presentation/new"
							element={<PresentationForm />}
						/>

						<Route
							exact
							path="/attendees"
							element={<AttendeesList attendees={props.attendees} />}
						/>
					</Routes>
				</div>
			</BrowserRouter>


);

}
export default App;
