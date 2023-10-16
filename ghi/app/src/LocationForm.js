import React, {useEffect, useState } from 'react';

function LocationForm () {
  // Here is the old way of creating state hooks for every
  // property. Can you refactor this to make it into a single
  // data object like the ConferenceForm() above?
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [roomCount, setRoomCount] = useState('');
  const [state, setState] = useState('')
  const [states, setStates] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8000/api/states/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setStates(data.states);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.room_count = roomCount;
    data.name = name;
    data.city = city;
    data.state = state;

    const locationUrl = 'http://localhost:8000/api/locations/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();
      console.log(newLocation);

      setName('');
      setRoomCount('');
      setCity('');
      setState('');
    }
  }

  // How can we refactor these handleChange methods to make
  // a single method, like the ConferenceForm above?
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleRoomCountChange = (event) => {
    const value = event.target.value;
    setRoomCount(value);
  }

  const handleCityChange = (event) => {
    const value = event.target.value;
    setCity(value);
  }

  const handleStateChange = (event) => {
    const value = event.target.value;
    setState(value);
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new location</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="form-floating mb-3">
              <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={roomCount} onChange={handleRoomCountChange} placeholder="Room count" required type="number" name="room_count" id="room_count" className="form-control" />
              <label htmlFor="room_count">Room count</label>
            </div>
            <div className="form-floating mb-3">
              <input value={city} onChange={handleCityChange} placeholder="City" required type="text" name="city" id="city" className="form-control" />
              <label htmlFor="city">City</label>
            </div>
            <div className="mb-3">
              <select value={state} onChange={handleStateChange} required name="state" id="state" className="form-select">
                <option value="">Choose a state</option>
                {states.map(state => {
                  return (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LocationForm;