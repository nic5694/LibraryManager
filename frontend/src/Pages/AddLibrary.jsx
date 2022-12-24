import NavBar from "../Components/NavBar";
import { useState } from "react";
import axios from "axios";
function AddLibrary () {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    let library = {
        name: name,
        phone: phone,
        address: address
    }
    axios.post("http://localhost:8080/api/libraries", library)
    .then(response => {
        //toastify
        console.log(response);
    })
    .catch(error => {
        //toastify
        console.log(error);
    })
  };

  const handleAddressChange = event => {
    const { name, value } = event.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  return (
    <div className="addLibraryFormContainer">
    <NavBar />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />

      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />

      <fieldset>
        <legend>Address</legend>
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" name="street" value={address.street} onChange={handleAddressChange} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={address.city} onChange={handleAddressChange} />

        <label htmlFor="province">Province:</label>
        <input type="text" id="province" name="province" value={address.province} onChange={handleAddressChange} />

        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" value={address.postalCode} onChange={handleAddressChange} />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={address.country} onChange={handleAddressChange} />
      </fieldset>

      <button type="submit">Add Library</button>
    </form>
    </div>
  );
}
export default AddLibrary;