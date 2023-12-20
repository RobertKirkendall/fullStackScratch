CREATE DATABASE autoInfo;

DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
    ownerid serial PRIMARY KEY NOT NULL,
    first_name text,
    last_name text,
    address text,
    SSN text,
    warrant boolean
);

CREATE TABLE vehicles (
    id int PRIMARY KEY,
    ownerid int,
    year int,
    make text,
    model text,
    color text, 
    vin varchar(17),
    salvage_title boolean,
    FOREIGN KEY (ownerid) REFERENCES owners(ownerid)
);


