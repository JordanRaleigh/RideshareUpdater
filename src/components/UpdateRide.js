import React, { useState } from 'react';
// import API from '../utility/API';
import useForm from '../utility/UseForm';
import axios from 'axios';

const UpdateRide = (props) => {
  const [status, setStatus] = useState('');
  const [values, setChange] = useForm({
    rideId: '',
  });
  const [result, setResult] = useState({});
  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { rideId } = values;
    //api sandbox link here
    const response = await axios.put(
      `https://wl-api-staging.kaizenhealth.org/platforms/sandbox_status/${rideId}/${status}/`,
      null
    );
    setResult(response.data);
    console.log(response.data.Message);
    alert(response.data.Message);
    console.log('status', status);
  };

  return (
    <div>
      <h1>Update Lyft Status</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h3>Ride Id</h3>
          <label htmlFor="rideId" />
          <input
            placeholder="Ride Id - Required"
            name="rideId"
            type="text"
            value={values.rideId}
            onChange={setChange}
          />
          <h3>Status</h3>
          <label htmlFor="Status" />
          <select defaultValue={status} onChange={handleChange}>
            <option>Select a Ride Status</option>
            <option value="accepted">Accept Ride</option>
            <option value="arrived">Arrived at Pickup Location</option>
            <option value="pickedUp">Picked Up Passenger</option>
            <option value="droppedOff">Dropped Off Passenger</option>
            <option value="canceled">Canceled</option>
            <option value="failed">Failed</option>
          </select>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {Object.keys(result).length > 0 && (
          <div>{`Current Status: ${result.Message}`}</div>
        )}
      </div>
    </div>
  );
};

export default UpdateRide;
