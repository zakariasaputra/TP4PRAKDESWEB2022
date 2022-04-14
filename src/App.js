// import React from "react"
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [message, setMessage] = useState('');
  const [table, setTable] = useState(false);
  const [userinfo, setUserInfo] = useState({
    hobby: [],
    response: [],
  });
  const handleAddFormChange = (e) => {
    const { value, checked } = e.target;
    const { hobby } = userinfo;
    if (checked) {
      setUserInfo({
        hobby: [...hobby, value],
        response: [...hobby, value],
      });
    }
    else {
      setUserInfo({
        hobby: hobby.filter((e) => e !== value),
        response: hobby.filter((e) => e !== value),
      });
    }
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <div className="container">
      <div className="title">
        <h2>Biodata</h2>
      </div>
      <form onSubmit={handleAddFormSubmit}>
        <div class="form-group">
          <label for="name">Nama Lengkap</label>
          <input 
          type="text" 
          name="name"
          class="form-control" 
          id="name" 
          required="required"
          onChange={event => setName(event.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="date">Tanggal Lahir</label>
          <input 
          type="date" 
          name="date"
          class="form-control" 
          id="date" 
          required="required"
          onChange={event => setDate(event.target.value)}
          />
        </div>
        <div class="form-group">
            <p>Jenis Kelamin</p>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="radio" 
                name="gender" 
                id="gender" 
                value="Laki-laki"
                required="required"
                onChange={event => setGender(event.target.value)}
                />
                <label class="form-check-label" for="male">Laki-laki</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="radio" 
                name="gender" 
                id="gender" 
                value="Perempuan"
                required="required"
                onChange={event => setGender(event.target.value)}
                />
                <label class="form-check-label" for="female">Perempuan</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="radio" 
                name="gender" 
                id="gender" 
                value="Other"
                required="required"
                onChange={event => setGender(event.target.value)}
                />
                <label class="form-check-label" for="other">Other</label>
            </div>
        </div>
        <div class="form-group">
            <p>Hobi</p>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox"  
                name="hobby" 
                id="hobby" 
                value="Ngoding, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="ngoding">Ngoding</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Rebahan, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="rebahan">Rebahan</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Melamun, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="melamun">Melamun</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Baca Buku, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="read">Baca Buku</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Nonton Youtube, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="youtube">Nonton Youtube</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Dengerin Lagu, "
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="music">Dengerin Lagu</label>
            </div>
            <div class="form-check form-check-inline">
                <input 
                class="form-check-input" 
                type="checkbox" 
                name="hobby" 
                id="hobby" 
                value="Other"
                onChange={handleAddFormChange}
                />
                <label class="form-check-label" for="other">Other</label>
            </div>
        </div>
        <div class="form-group">
            <label for="religion">Agama</label>
            <select class="form-control" name="religion" id="religion" required="required" onChange={event => setReligion(event.target.value)}>
              <option value="Budha">Budha</option>
              <option value="Hindu">Hindu</option>
              <option value="Islam">Islam</option>
              <option value="Katolik">Katolik</option>
              <option value="Tao">Tao</option>
              <option value="Protestan">Protestan</option>
              <option value="Other">Other</option>
            </select>
        </div>
        <div class="form-group">
            <label for="message">Pesan</label>
            <textarea class="form-control" id="message" name="message" required="required" rows="3" onChange={event => setMessage(event.target.value)}></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onClick={() => setTable(prev => !prev)}>Submit</button>
      </form>

      {' '}
      {table &&
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Label</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nama</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th scope="row">Tanggal Lahir</th>
              <td>{date}</td>
            </tr>
            <tr>
              <th scope="row">Jenis Kelamin</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th scope="row">Hobi</th>
              <td>{userinfo.response}</td>
            </tr>
            <tr>
              <th scope="row">Agama</th>
              <td>{religion}</td>
            </tr>
            <tr>
              <th scope="row">Pesan</th>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

export default App;
