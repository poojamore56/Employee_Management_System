import { Link } from "react-router-dom";
import db from "./dummyDatabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [employees, setEmployees] = useState(db.readAll());
    const [form, setForm] = useState({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
 
      const navigate = useNavigate();

      const navigateToHome = () => {
        navigate(`/`);
    };

      const handleSubmit = (e) => {
        e.preventDefault();
        db.create(form);
        setEmployees(db.readAll());
        setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});
        navigateToHome();
    
      };

      const handleSave = (e) => {
        e.preventDefault();
        db.update(form.id, form);
        setEmployees(db.readAll());
        setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});
        navigateToHome();
    
      };
    
    return ( 
        <div>
            <div className="row">
            <div className="offset-lg-3 col-lg-6">
            <form onSubmit={form.id ? handleSave : handleSubmit}>
                 <div className="card" style={{"textAlign":"left"}}>
                 <div className="card-title">
                  <h5>Add Employee</h5>
                  </div>
                  <div className="card-body">
                  <div className="row">
        <div>
            <div className="col-lg-12">  
            <label>First Name</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="firstName" required/>
        </div>
        </div>
        <div>
            <div className="col-lg-12">  
            <label>Last Name</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="lastName"required />
        </div>
        </div>
        <div>
            <div className="col-lg-12">  
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
         </div>
         </div>
         <div>
            <div className="col-lg-12">  
            <label>Age</label>
            <input type="text" name="age" value={form.age} onChange={handleChange} placeholder="Age" required/>
       </div>
       </div>
       <div>
            <div className="col-lg-12">  
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="contactNumber" required />
       </div>
       </div>
        <div>
            <div className="col-lg-12">  
            <label>DOB</label>
            <input type="text" name="dob" value={form.dob} onChange={handleChange} placeholder="dob" required/>
        </div>
        </div>
              <div className="col-lg-12">  
               <button className="btn btn-success" type="submit">Save</button>
                  <Link to="/" className="btn btn-danger">Back</Link>                    
                  </div>
                  </div>
                </div>
          </div>
    </form>
</div>
</div>
        </div>
     );
}
 
export default EmpCreate;