import db from "../config/db.js";

export const getAllRecipients = (req, res) => {
    const q = "SELECT * FROM recipient";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};
