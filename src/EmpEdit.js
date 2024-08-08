import { useEffect, useState } from "react";
import db from "./dummyDatabase";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

const EmpEdit = () => {
  const { id } = useParams();
  console.log("id is this: ", id);
  let employeeData = null;
  const [employees, setEmployees] = useState(db.readAll());
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    contactNumber: "",
    dob: "",
  });

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(`/`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.create(form);
    setEmployees(db.readAll());
    setForm({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      contactNumber: "",
      dob: "",
    });
    navigateToHome();
  };

  const handleSave = (e) => {
    e.preventDefault();
    db.update(form.id, form);
    setEmployees(db.readAll());
    setForm({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      contactNumber: "",
      dob: "",
    });
    navigateToHome();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    // Fetch item details by ID
    console.log("this is data as object ", db.readAll()[id - 1]);
    console.log("this is data ", JSON.stringify(db, null, 2));
    employeeData = db.read(Number(id));
    setForm(employeeData);
  }, [id]);

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={form.id ? handleSave : handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h5>Edit Employee</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div>
                    <div className="col-lg-12">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="firstName"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="col-lg-12">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="col-lg-12">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="col-lg-12">
                      <label>Age</label>
                      <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Age"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="col-lg-12">
                      <label>Contact Number</label>
                      <input
                        maxLength="10"
                        name="contactNumber"
                        value={form.contactNumber}
                        onChange={handleChange}
                        placeholder="contactNumber"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="col-lg-12">
                      <label>DOB</label>
                      <input
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        placeholder="dob"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-success" type="submit">
                      {form.id ? "Update" : "update"}
                    </button>
                    <Link to="/" className="btn btn-danger">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;
