import { useState } from "react";
import db from "./dummyDatabase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EmpLists = () => {

const [employees, setEmployees] = useState(db.readAll());
const [form, setForm] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    contactNumber: '',
    dob: ''
});

const navigate = useNavigate();


  const handleDetailClick = (id) => {
    navigate(`/employee/details/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/employee/edit/${id}`);
  };

 const handleDelete = (id) => {
    db.delete(id);
    setEmployees(db.readAll());
  };


  const handleUpdate = (id) => {
    const employee = db.read(id);
    setForm({
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        age: employee.age,
        contactNumber: employee.contactNumber,
        dob: employee.dob
    });
};

    return ( 
        <div>
             <div className="container">
                 <div className="card">
                      <div className="card-title">
                     <Link to="employee/create" className="btn btn-success">Add New(+)</Link>
                    </div>
                       <div className="card-body">
                          <div className="divbtn">
                             <h2>Employee Lists</h2>
                        </div>
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                     <tr>
                                           <td>Id</td>
                                            <td>First Name</td>
                                            <td>Last Name</td>
                                            <td>Email</td>
                                            <td>Age</td>
                                            <td>Contact Number</td>
                                            <td>Dob</td>
                                            <td>Action</td>
                                     </tr>
                                </thead>
                        <tbody>
                            { 
                                employees.map(employee=>(
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.contactNumber}</td>
                                        <td>{employee.dob}</td>
                                        <td>
                                        <button onClick={() => handleEditClick(employee.id)} className="btn btn-primary btn-sm ml-2">Edit</button>
                                        <button onClick={() => handleDelete(employee.id)} className="btn btn-danger">Delete</button>
                                        <button onClick={() => handleDetailClick(employee.id)} className="btn btn-primary">Details</button>


                                        </td>

                                    </tr>
                                ))
                            }



                        </tbody>


                    </table>

                </div>

            </div>


             </div>
        </div>
     );
}
 
export default EmpLists;