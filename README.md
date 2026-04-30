# Blood Donation Management System

A full-stack web application to manage blood donors, blood banks, donation events, recipients, and blood requests. Developed as part of a DBMS course project using **Node.js**, **MySQL**, and **React.js**.

---

## Project Demo

Watch the demo video here: [YouTube Demo](https://youtu.be/gYw1YvYKLdI)

---

## 🔧 Setup Instructions

### 1. Prerequisites
- Node.js and npm installed
- MySQL Server / Workbench installed

---

### 2. Frontend (FE)
```bash
cd FE
npm install
npm start
```
Runs at: `http://localhost:3000`

---

### 3. Backend (BE)
```bash
cd BE
npm install
npm run
```
Runs at: `http://localhost:8800`

---

### 4. Database Setup

1. Open MySQL Workbench and create a new schema:
```sql
CREATE SCHEMA blood_donation_management_system;
USE blood_donation_management_system;
```

2. Execute the following table creation statements:

```sql
CREATE TABLE donor_details (
  donor_id INT NOT NULL AUTO_INCREMENT,
  donor_name VARCHAR(45) NOT NULL,
  donor_number VARCHAR(10) NOT NULL,
  donor_email VARCHAR(45),
  donor_age INT NOT NULL,
  donor_gender VARCHAR(10) NOT NULL,
  donor_bloodType VARCHAR(10) NOT NULL,
  donor_address VARCHAR(100) NOT NULL,
  PRIMARY KEY (donor_id)
);

CREATE TABLE blood_bank_details (
  blood_bank_id INT NOT NULL AUTO_INCREMENT,
  blood_bank_name VARCHAR(50),
  blood_bank_location VARCHAR(60),
  blood_bank_number VARCHAR(10) NOT NULL,
  blood_bank_address VARCHAR(100),
  PRIMARY KEY (blood_bank_id)
);

CREATE TABLE blood_donate_event (
  event_id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(50),
  event_date DATE,
  event_location VARCHAR(50),
  blood_bank_id INT,
  PRIMARY KEY (event_id),
  FOREIGN KEY (blood_bank_id) REFERENCES blood_bank_details(blood_bank_id)
);

CREATE TABLE recipient (
  recipient_id INT NOT NULL AUTO_INCREMENT,
  recipient_name VARCHAR(30),
  recipient_number VARCHAR(10) NOT NULL,
  recipient_address VARCHAR(40),
  blood_type VARCHAR(45),
  PRIMARY KEY (recipient_id)
);

CREATE TABLE blood_unit_record (
  blood_unit_id INT NOT NULL AUTO_INCREMENT,
  blood_donation_date DATE,
  blood_expiration_date DATE,
  blood_test_results VARCHAR(40),
  blood_type VARCHAR(45),
  donor_id INT,
  recipient_id INT,
  PRIMARY KEY (blood_unit_id),
  FOREIGN KEY (donor_id) REFERENCES donor_details(donor_id),
  FOREIGN KEY (recipient_id) REFERENCES recipient(recipient_id)
);

CREATE TABLE blood_request (
  request_id INT NOT NULL AUTO_INCREMENT,
  request_reason VARCHAR(100),
  requested_units VARCHAR(10),
  blood_type VARCHAR(45),
  recipient_id INT,
  PRIMARY KEY (request_id),
  FOREIGN KEY (recipient_id) REFERENCES recipient(recipient_id)
);
```

> 🔧 In `BE/config/db.js`, update with your MySQL connection credentials.

---

## 📌 Features
- Donor and recipient management
- Blood bank and event tracking
- Blood unit inventory and expiration logs
- Blood request handling and history

---

## 👨‍💻 Developer
**Baba Sri Sannihith Dharanikota**  
[GitHub Repository](https://github.com/sannihith19/blood-donation-management-system)
