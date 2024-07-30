// src/App.js
import React, { useState } from 'react';
import db from './dummyDatabase';


function App() {
  const [employees, setEmployees] = useState(db.readAll());
  const [form, setForm] = useState({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.create(form);
    setEmployees(db.readAll());
    setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});

  };

  const handleDelete = (id) => {
    db.delete(id);
    setEmployees(db.readAll());
  };

  const handleUpdate = (id) => {
    const employee = db.read(id);
    setForm({ firstName: employee.firstName, lastName: employee.lastName, email: employee.email,  age:employee.age, contactNumber:employee.contactNumber,dob:employee.dob, id: employee.id });
  };

  const handleSave = (e) => {
    e.preventDefault();
    db.update(form.id, form);
    setEmployees(db.readAll());
    setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});

  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <form onSubmit={form.id ? handleSave : handleSubmit}>
        <div>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="firstName" required/>
        </div>
        <div>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="lastName"required />
        </div>
        <div>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
         </div>
         <div>
        <input type="text" name="age" value={form.age} onChange={handleChange} placeholder="Age" required/>
</div>
<div>
        <input type="text" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="contactNumber" required />
</div>
<div>
        <input type="text" name="dob" value={form.dob} onChange={handleChange} placeholder="dob" required/>
</div>
<div>
        <button type="submit">{form.id ? 'Update' : 'Add'} Employee</button>
        </div>
      </form>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.firstName}:{employee.lastName}:{employee.email}:{employee.age}:{employee.contactNumber}:{employee.dob}
            <button onClick={() => handleUpdate(employee.id)}>Edit</button>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
