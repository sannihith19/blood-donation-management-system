import db from "../config/db.js";

export const getAllBloodRequests = (req, res) => {
    const q = "SELECT * FROM blood_request";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};
