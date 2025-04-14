import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
const port = process.env.PORT || 8800;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "oooHcoM@0812",
    database: "blood_donation"
})

app.use(cors())
app.use(express.json())

app.get("/donor_details", (req, res) => {
    const q = "SELECT * FROM donor_details"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/blood_bank_details", (req, res) => {
    const q = "SELECT * FROM blood_bank_details"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/blood_donate_event", (req, res) => {
    const q = `SELECT
    blood_donate_event.*,
    blood_bank_details.blood_bank_name
  FROM
    blood_donate_event
  JOIN
    blood_bank_details ON blood_donate_event.blood_bank_id = blood_bank_details.blood_bank_id;`
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/blood_unit_record", (req, res) => {
    const q = "SELECT * FROM blood_unit_record"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/recipient_details", (req, res) => {
    const q = "SELECT * FROM recipient"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.get("/blood_request_details", (req, res) => {
    const q = "SELECT * FROM blood_request"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.post("/add_donor_details", (req, res) => {
    const q = "INSERT INTO donor_details (`donor_name`, `donor_number`, `donor_email`, `donor_age`, `donor_gender`, `donor_bloodType`, `donor_address`) VALUES (?)";
    const values = [
        req.body.donor_name,
        req.body.donor_number,
        req.body.donor_email,
        req.body.donor_age,
        req.body.donor_gender,
        req.body.donor_bloodType,
        req.body.donor_address
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Donor Created Successfully")
    })
})

app.post("/edit_donor_details", (req, res) => {
    const q = `
      UPDATE donor_details
      SET 
        donor_name = ?,
        donor_number = ?,
        donor_email = ?,
        donor_age = ?,
        donor_gender = ?,
        donor_bloodType = ?,
        donor_address = ?
      WHERE donor_id = ?;
    `;
  
    const values = [
      req.body.donor_name,
      req.body.donor_number,
      req.body.donor_email,
      req.body.donor_age,
      req.body.donor_gender,
      req.body.donor_bloodType,
      req.body.donor_address,
      req.body.donor_id
    ];
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

app.post("/blood_bank_details", (req, res) => {
    const q = "INSERT INTO blood_bank_details (`blood_bank_name`, `blood_bank_location`, `blood_bank_number`, `blood_bank_address`) VALUES (?)";
    const values = [
        req.body.blood_bank_name,
        req.body.blood_bank_location,
        req.body.blood_bank_number,
        req.body.blood_bank_address
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Blood Bank Created Successfully")
    })
})

app.post("/event_details", (req, res) => {
    const q = "INSERT INTO blood_donate_event (`event_name`, `event_location`, `event_date`, `blood_bank_id`) VALUES (?)";
    const values = [
        req.body.event_name,
        req.body.event_location,
        req.body.event_date,
        req.body.blood_bank_id
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Blood Bank Created Successfully")
    })
})

app.delete("/delete_donor", (req, res) => {
    const q = `DELETE FROM donor_details
                WHERE donor_id = ?`;    
    const values = [req.query.id];  
    db.query(q, values, (err, data) => {
        if (err) {
            console.error('Error deleting donor');
        }
        if (data.affectedRows === 1) {
            return res.json("Donor Deleted Successfully");
        } else {
            return res.status(404).json({ error: 'Donor not found' });
        }
    });
});


app.listen(port, () => {
    console.log("connected to BE")
})

