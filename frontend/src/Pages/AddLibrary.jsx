import NavBar from "../Components/NavBar";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    setName("")
    setPhone("")
    setAddress({
      street: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
    })
    axios.post("http://localhost:8080/api/libraries", library)
    .then(response => {
        sucess();
        console.log(response);
    })
    .catch(error => {
        failed();
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

  const sucess = () => toast.success("Successfully added the the library",{
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });
    const failed = () => toast.error("Failed to Add the Library",{
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });

  return (
    <div>
    <div className="addLibraryFormContainer">
    <NavBar />
    <h1 className="titles">Add Library</h1>
    <div className="formContainer">
    <form onSubmit={handleSubmit}>
      <legend className="titles">Library</legend>
      <div className="formRow">
        <div className="formField">
      <label className="labelStyle">Name:</label>
      <input type="text" id="name" value={name} required={true} onChange={event => setName(event.target.value)} />
</div>
<div className="formField">
      <label className="labelStyle">Phone:</label>
      <input type="text" id="phone" value={phone} required={true} onChange={event => setPhone(event.target.value)} />
      </div>
</div>
 
        <legend className="titles">Address</legend>
        <div className="formRow">
          <div className="formField">
        <label className="labelStyle">Street:</label>
        <input type="text" id="street" required={true} name="street" value={address.street} onChange={handleAddressChange} />
        </div>
        <div className="formField">
        <label className="labelStyle">City:</label>
        <input type="text" id="city" required={true} name="city" value={address.city} onChange={handleAddressChange} />
        </div>
        </div>
        <div className="formRow">
          <div className="formField">
        <label className="labelStyle">Province:</label>
        <input type="text" id="province" required={true} name="province" value={address.province} onChange={handleAddressChange} />
        </div>
        <div className="formField">
        <label className="labelStyle">Postal Code:</label>
        <input type="text" id="postalCode" required={true} name="postalCode" value={address.postalCode} onChange={handleAddressChange} />
        </div>
        </div>
        <div className="formRow">
          <div className="formField">
        <label className="labelStyle">Country:</label>
        <input type="text" id="country" required={true} name="country" value={address.country} onChange={handleAddressChange} />
        </div>
        </div>
        <div className="formRow">
          <div className="formField">
      <button type="submit">Add Library</button>
      </div>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
}
export default AddLibrary;