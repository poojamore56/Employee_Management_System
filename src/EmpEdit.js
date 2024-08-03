import {useEffect,  useState} from "react";
import db from "./dummyDatabase";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const EmpEdit = () => {
    const { id } = useParams();

    
       const [employees, setEmployees] = useState(db.readAll());
       const [form, setForm] = useState({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});
   

  const handleSubmit = (e) => {
    e.preventDefault();
    db.create(form);
    setEmployees(db.readAll());
    setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});

  };

  const handleSave = (e) => {
    e.preventDefault();
    db.update(form.id, form);
    setEmployees(db.readAll());
    setForm({  id:'' ,firstName: '', lastName: '', email: '' ,age:'',contactNumber:'',dob:''});

  };

   const handleUpdate = (id) => {
   const employee = db.read(id);
   console.log("this a employee" ,db);
   setForm({ firstName: employee.firstName, lastName: employee.lastName, email: employee.email,  age:employee.age, contactNumber:employee.contactNumber,dob:employee.dob, id: employee.id}
  )};
   

  useEffect((id) => {
    // Fetch item details by ID
    console.log('this is data ', db.read(id));
    db.read(id)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching item details:', error);
      });
  }, [id]);



    return ( 
        <div>
            <div className="row">
            <div className="offset-lg-3 col-lg-6">

            <form onSubmit={form.id ? handleSave : handleSubmit}>
                 <div className="card" style={{"textAlign":"left"}}>
                 <div className="card-title">
                  <h5>Edit Employee</h5>
                  </div>
                  <div className="card-body">
                  <div className="row">
        <div>
            <div className="col-lg-12">  
            <label>First Name</label>
            <input type="text" name="firstName" value={form.firstName} onClick={handleUpdate(id)} placeholder="firstName" required/>
        </div>
        </div>
        <div>
            <div className="col-lg-12">  
            <label>Last Name</label>
            <input type="text" name="lastName" value={form.lastName} onClick={handleUpdate(id)} placeholder="lastName"required />
        </div>
        </div>
        <div>
            <div className="col-lg-12">  
            <label>Email</label>
            <input type="email" name="email" value={form.email} onClick={handleUpdate(id)} placeholder="Email" required />
         </div>
         </div>
         <div>
            <div className="col-lg-12">  
            <label>Age</label>
            <input type="text" name="age" value={form.age} onClick={handleUpdate(id)} placeholder="Age" required/>
       </div>
       </div>
       <div>
            <div className="col-lg-12">  
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={form.contactNumber} onClick={handleUpdate(id)} placeholder="contactNumber" required />
       </div>
       </div>
        <div>
            <div className="col-lg-12">  
            <label>DOB</label>
            <input type="text" name="dob" value={form.dob} onClick={handleUpdate(id)} placeholder="dob" required/>
        </div>
        </div>
              <div className="col-lg-12">  
              <button  className='btn btn-success'type="submit">{form.id ? 'Update' : 'update'}</button>
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
 

export default EmpEdit;


