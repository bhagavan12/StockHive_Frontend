import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [authors, setAuthors] = useState('');
  const [references, setReferences] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("At insert");
    axios.post("http://localhost:1730/insertnews",{
      title: title,
      name: name,
      description: description,
      authors: authors,
      references: references,
    }).then((response)=>{
      console.log(response.data);
    });
    console.log({
      title: title,
      name: name,
      description: description,
      authors: authors,
      references: references,
    });
  };

  return (
    <div className="container">
      <h1>News Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="authors">Authors</label>
          <input
            type="text"
            id="authors"
            value={authors}
            onChange={(event) => setAuthors(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="references">References</label>
          <input
            type="text"
            id="references"
            value={references}
            onChange={(event) => setReferences(event.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={() => window.alert('NEWS Added Successfully!')}>
  Submit
</button>

      </form>
    </div>
  );
};

export default NewsForm;
