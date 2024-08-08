import { useEffect,useState } from "react";
import db from "./dummyDatabase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EmpLists = () => {
  const [employees, setEmployees] = useState(db.readAll());
  

  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/employee/detail/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const handleDelete = (id) => {
    db.delete(id);
    setEmployees(db.readAll());
  };
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001');
        const data = await response.json();
        db.createBatch(data);
        const initialEmployees = db.readAll();
        setEmployees(initialEmployees);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchEmployees();
  }, []);



  
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-title">
            
          </div>
          <div className="card-body">
            <div className="divbtn">
              <h2>Employee Lists<Link to="employee/create" className="btn btn-success add-btn" >
              Add New(+)
            </Link></h2>
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
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>{employee.contactNumber}</td>
                    <td>{employee.dob}</td>
                    <td>
                      <button
                        onClick={() => handleEditClick(employee.id)}
                        className="btn btn-primary  action-btn"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDetailClick(employee.id)}
                        className="btn btn-primary  action-btn "
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="btn btn-danger action-btn "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpLists;
