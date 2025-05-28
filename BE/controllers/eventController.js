import db from "../config/db.js";

export const getAllEvents = (req, res) => {
    const q = `
        SELECT
            blood_donate_event.*,
            blood_bank_details.blood_bank_name
        FROM
            blood_donate_event
        JOIN
            blood_bank_details ON blood_donate_event.blood_bank_id = blood_bank_details.blood_bank_id;
    `;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const addEvent = (req, res) => {
    const q = `INSERT INTO blood_donate_event 
        (event_name, event_location, event_date, blood_bank_id) 
        VALUES (?)`;
    const values = [
        req.body.event_name,
        req.body.event_location,
        req.body.event_date,
        req.body.blood_bank_id
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Blood Bank Created Successfully");
    });
};
