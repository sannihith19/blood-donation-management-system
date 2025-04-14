First install npm and node in your system

#FE

open FE folder and run npm install to install all dependencies
then run npm start in terminal to run project


#BE:

open project file in vs code
open new terminal and navigate to BE folder and run npm install to install all dependencies
and execute npm run to start in terminal BE server

in line 8 in index.js
change db connection to our sql work bench connection

open sql work bench and create a new connection and then create a schema and navigate to it
CREATE SCHEMA `blood_donation_management_syatem` ;
use Blood_Donation_Management_System;

create tables
CREATE TABLE `donor_details` (
  `donor_id` int NOT NULL AUTO_INCREMENT,
  `donor_name` varchar(45) NOT NULL,
  `donor_number` varchar(10) NOT NULL,
  `donor_email` varchar(45) DEFAULT NULL,
  `donor_age` int NOT NULL,
  `donor_gender` varchar(10) NOT NULL,
  `donor_bloodType` varchar(10) NOT NULL,
  `donor_address` varchar(100) NOT NULL,
  PRIMARY KEY (`donor_id`)
);

CREATE TABLE `blood_bank_details` (
  `blood_bank_id` int NOT NULL AUTO_INCREMENT,
  `blood_bank_name` varchar(50) DEFAULT NULL,
  `blood_bank_location` varchar(60) DEFAULT NULL,
  `blood_bank_number` varchar(10) NOT NULL,
  `blood_bank_address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`blood_bank_id`)
);

CREATE TABLE `blood_donate_event` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(50) DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `event_location` varchar(50) DEFAULT NULL,
  `blood_bank_id` int DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  FOREIGN KEY (`blood_bank_id`) REFERENCES `blood_bank_details` (`blood_bank_id`)
);

CREATE TABLE `recipient` (
  `recipient_id` int NOT NULL AUTO_INCREMENT,
  `recipient_name` varchar(30) DEFAULT NULL,
  `recipient_number` varchar(10) NOT NULL,
  `recipient_address` varchar(40) DEFAULT NULL,
  `blood_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`recipient_id`)
);

CREATE TABLE `blood_unit_record` (
  `blood_unit_id` int NOT NULL AUTO_INCREMENT,
  `blood_donation_date` date DEFAULT NULL,
  `blood_expiration_date` date DEFAULT NULL,
  `blood_test_results` varchar(40) DEFAULT NULL,
  `blood_type` varchar(45) DEFAULT NULL,
  `donor_id` int DEFAULT NULL,
  `recipient_id` int DEFAULT NULL,
  PRIMARY KEY (`blood_unit_id`),
  FOREIGN KEY (`donor_id`) REFERENCES `donor_details` (`donor_id`),
  FOREIGN KEY (`recipient_id`) REFERENCES `recipient` (`recipient_id`)
);

CREATE TABLE `blood_request` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `request_reason` varchar(100) DEFAULT NULL,
  `requested_units` varchar(10) DEFAULT NULL,
  `blood_type` varchar(45) DEFAULT NULL,
  `recipient_id` int DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  FOREIGN KEY (`recipient_id`) REFERENCES `recipient` (`recipient_id`)
);


BE server runs at localhost:8800
FE runs at localhost:3000

navigate through FE web application to manage blood donation














