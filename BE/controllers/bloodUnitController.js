import db from "../config/db.js";

export const getAllBloodUnits = (req, res) => {
    const q = "SELECT * FROM blood_unit_record";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};
