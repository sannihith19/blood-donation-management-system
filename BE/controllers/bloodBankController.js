import db from "../config/db.js";

export const getAllBloodBanks = (req, res) => {
    const q = "SELECT * FROM blood_bank_details";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const addBloodBank = (req, res) => {
    const q = `INSERT INTO blood_bank_details 
        (blood_bank_name, blood_bank_location, blood_bank_number, blood_bank_address) 
        VALUES (?)`;
    const values = [
        req.body.blood_bank_name,
        req.body.blood_bank_location,
        req.body.blood_bank_number,
        req.body.blood_bank_address
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Blood Bank Created Successfully");
    });
};
