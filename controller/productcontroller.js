
const db = require('../controller/db');
const errorcontroller = (req, res) => {
  
  const data={title:'404' ,user: req.user};
  res.render('home',{data: data});
 }

const addcontroller = (req, res) => {  
  console.log("add")
  const data={title:'add' ,user: req.user};
  res.render('home',{data: data});
}





const addcontroller_post = async (req, res) => {
  const { firstname, lastname, phone, gender, address, password, email, role } = req.body;

  // Check for missing fields
  if (!firstname || !lastname  || !gender  || !password || !email || !role) {
    const data = { title: 'add', user: 'All fields are required' };
    return res.render('home', { data });
  }
 console.log("password "+ password);
  // Hash the password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 10);
  } catch (err) {
    console.error("Error hashing password: " + err);
    const data = { title: 'add', user: 'Error hashing password' };
    return res.render('home', { data });
  }console.log("hased_password"+hashedPassword);

  // Create employee object with hashed password
  const newEmployee = {
    employee_name: firstname,
    employee_lastname: lastname,
    employee_phone: phone,
    employee_gender: gender,
    employee_address: address,
    employee_password: hashedPassword,
    employee_email: email,
    employee_role: role,
  };

  // SQL query to insert the employee
  const sql = `INSERT INTO employees 
    (employee_name, employee_lastname, employee_phone, employee_gender, employee_address, employee_password, employee_email, employee_role) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  // Execute the query
  db.query(sql, Object.values(newEmployee), (err, result) => {
    if (err) {
      console.error("Error inserting employee data: " + err);
      const data = { title: 'add', user: "Error inserting employee data: " + err };
      return res.render('home', { data });
    }

    console.log("Successfully added employee");
    const data = { title:'add', user: "Successfully added employee"  };
    res.render('home', { data });
  });
};




const bcrypt = require('bcrypt'); // Import bcrypt

const editcontroller_post = async (req, res) => {
  const { firstname, lastname, phone, gender, address, password, email, role } = req.body;

  console.log({ firstname, lastname, phone, gender, address, password, email, role });

  // Validate required fields
  if (!firstname || !lastname || !phone || !gender || !address || !password || !email || !role) {
    const data = { title: 'edit', user: 'All fields are required' };
    return res.render('home', { data });
  }

  // Hash the password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 10);
  } catch (err) {
    console.error("Error hashing password: " + err);
    const data = { title: 'edit', user: 'Error hashing password' };
    return res.render('home', { data });
  }

  // Create employee object for updating with hashed password
  const updatedEmployee = {
    employee_name: firstname,
    employee_lastname: lastname,
    employee_phone: phone,
    employee_gender: gender,
    employee_address: address,
    employee_password: hashedPassword,
    employee_email: email,
    employee_role: role,
  };

  // SQL query to update the employee based on the email
  const sql = `UPDATE employees SET 
    employee_name = ?, 
    employee_lastname = ?, 
    employee_phone = ?, 
    employee_gender = ?, 
    employee_address = ?, 
    employee_password = ?, 
    employee_role = ? 
    WHERE employee_email = ?`;

  // Execute the query with updated employee data
  db.query(sql, [...Object.values(updatedEmployee).slice(0, -1), email], (err, result) => {
    if (err) {
      console.error("Error updating employee data: " + err);
      const data = { title: 'edit', user: "Error updating employee data: " + err };
      return res.render('home', { data });
    }

    console.log("Successfully updated employee");
    const data = { title: 'edit', user: "Successfully updated employee" };
    res.render('home', { data });
  });
};

  




  const   deletecontroller_post = (req, res) => {
    const { email } = req.body;
    
    console.log({ email });
  
    // Validate required field
    if (!email) {
      const data = { title: 'delete', user: 'Email is required' };
      return res.render('home', { data: data });
    }
  
    // SQL query to delete the employee based on the email
    const sql = `DELETE FROM employees WHERE employee_email = ?`;
  
    // Execute the query with the email
    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error("Error deleting employee data: " + err);
        const data = { title: 'delete', user: "Error deleting employee data: " + err };
        return res.render('home', { data: data });
      }
      console.log("Successfully deleted employee");
      const data = { title: 'delete', user: "Successfully deleted employee" };
      res.render('home', { data: data });
    });
  };
  

const covercontroller = (req, res) => { 
  console.log("cover");
   res.render("cover");
 }


const dashcontroller = (req, res) => {


  const sql = `SELECT * FROM employees`;

  // Execute the query
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching employee data: " + err);
      const data = { title: 'employees', user: "Error fetching employee data: " + err };
      return res.render('home', { data });
    }

    console.log("Successfully fetched employee data");
    
    const data={title:'dashboard', employees: results};
    console.log(results)
    res.render('home',{data: data});
  });




   
 }

const editcontroller = (req, res) => { 
  console.log("go edit")
  const data={title:'edit' ,user: req.user};
res.render('home',{data: data});
 }
const homecontroller = (req, res) => { 
    const data=null
res.render('home',{data: data}); 
}
const viewcontroller = (req, res) => {
  const data={title:'view' ,user: req.user};
res.render('home',{data: data}); 
}

module.exports = {
    errorcontroller,
    addcontroller,
    covercontroller,
    dashcontroller,
    editcontroller,
    homecontroller,
    viewcontroller,
    addcontroller_post,
    editcontroller_post,
    deletecontroller_post
};
