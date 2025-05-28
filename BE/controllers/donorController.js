import db from "../config/db.js";

export const getAllDonors = (req, res) => {
    const q = "SELECT * FROM donor_details";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const addDonor = (req, res) => {
    const q = `INSERT INTO donor_details 
        (donor_name, donor_number, donor_email, donor_age, donor_gender, donor_bloodType, donor_address) 
        VALUES (?)`;
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
        if (err) return res.json(err);
        return res.json("Donor Created Successfully");
    });
};

export const editDonor = (req, res) => {
    const q = `UPDATE donor_details SET 
        donor_name = ?, donor_number = ?, donor_email = ?, donor_age = ?, donor_gender = ?, 
        donor_bloodType = ?, donor_address = ? 
        WHERE donor_id = ?`;
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
};

export const deleteDonor = (req, res) => {
    const q = "DELETE FROM donor_details WHERE donor_id = ?";
    const values = [req.query.id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json({ error: 'Error deleting donor' });
        if (data.affectedRows === 1) {
            return res.json("Donor Deleted Successfully");
        } else {
            return res.status(404).json({ error: 'Donor not found' });
        }
    });
};
