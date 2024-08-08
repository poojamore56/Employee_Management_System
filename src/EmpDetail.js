import { Link } from "react-router-dom";
import db from "./dummyDatabase";
import { useParams } from "react-router-dom";


const EmpDetail = () => { 
  const { id } = useParams();
  const employeeData = db.read(Number(id));
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Details</h2>
          </div>
          <div className="card-body"></div>

          {employeeData && (
            <div>
              <h3></h3>
              <h4>Employee Id is:    {employeeData.id}</h4>
              <h4> Employee firstName is:   {employeeData.firstName}</h4>
              <h4> Employee lastName is:    {employeeData.lastName}</h4>
              <h4> Employee Email is :     {employeeData.email}</h4>
              <h4>Employee Age is :     {employeeData.age}</h4>
              <h4> Employee Contact Number is:   {employeeData.contactNumber}</h4>
              <h4> Employee Dob is:    {employeeData.dob}</h4>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
