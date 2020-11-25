

--Up
CREATE TABLE People(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Phone (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        brand TEXT,
        model TEXT,
        ownerId INTEGER REFERENCES People(id)
);


-- Down
DROP TABLE People;
DROP TABLE Phone ;