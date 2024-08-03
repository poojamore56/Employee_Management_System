import { useState } from "react";
import { Link } from "react-router-dom";
import db from "./dummyDatabase";

const EmpDetail = () => {

    const [employees, setEmployees] = useState(db.readAll());

    return ( 
        <div>
            
               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body"></div>

                {employees &&

        <div>
        
            <h3></h3>
             <h4>Employee Id is:{employees.id}</h4>
            <h4> Employee firstName is:{employees.firstName}</h4>
            <h4> Employee lastName is:{employees.lastName}</h4>
            <h4> Employee Email is : {employees.email}</h4>
            <h4>Employee Age is : {employees.age}</h4>
            <h4> Employee Contact Number is:{employees.contactNumber}</h4>
            <h4> Employee Dob is:{employees.dob}</h4>
            <Link className="btn btn-danger" to="/">Back to Listing</Link>

        </div>
           }
           </div>
           </div>
           
       </div >
     );
}
 
export default EmpDetail;