import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function EditBookForm ({ bookId }) {
    const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    available: false,
    isbn: '',
    library: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/books/${bookId}`);
        const book = res.data;
        setFormData({
          title: book.title,
          author: book.author,
          available: book.available,
          isbn: book.isbn,
          library: book.library
        });
      } catch (err) {
        console.log(err.message)
      }
    };

    fetchData();
  }, [bookId]);

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });
  };
  const updated = () => toast.success("Succefully Updated the Book!");
  const failed = (argument) => toast.error(argument);

  const onSubmit = (event) => {
    axios.put(`http://localhost:8080/api/books/${bookId}`, formData)
    .then((response) =>{
        updated();
    })
    .catch ((err) =>{
        failed(err.message)
    })
  };

  return (
    <div className='formContainer'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formChildContainer'>
        <div className='formRow'>
            <div className='formField'>
      <label className='labelStyle'>
        Title:
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="input"
        />
      </label>
      </div>
      <div className='formField'>
      <label className='labelStyle'>
        Author:
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      </div>
      </div>
      <br />
      <div className='formIsbnAvailableRow'>
      <div className='formField'>
      <label className='labelStyle'>
        ISBN:
        <input
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
        />
      </label>
      </div>
        <div className='formField'>
      <label className='labelStyle'>
        Available:
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
      </label>
      </div>

      </div>
      <br />
      <div className='formRow'>
        <div className='formField'>
      <button type="submit">Update</button>
      </div>
      </div>
      </div>
    </form>
    </div>
  );
};

export default EditBookForm;