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
        price NUMBER,
        imageUrl TEXT
);

INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 12 mini', 599, '/cellphones/iphone-12-mini.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 12', 699, '/cellphones/iphone-12.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 12 pro', 999, '/cellphones/iphone-12-pro.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 12 pro max', 1099, '/cellphones/iphone-12-promax.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 11', 599, '/cellphones/iphone-11.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 11 pro', 699, '/cellphones/iphone-11-pro.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Iphone', 'iphone 11 pro max', 999, '/cellphones/iphone-11-promax.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy F41', 699, '/cellphones/samsung-galaxy-f41.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy S20 FE', 599, '/cellphones/samsung-galaxy-s20-fe.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy Z Fold 2', 999, '/cellphones/samsung-galaxy-fold-2.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy M51', 1099, '/cellphones/samsung-galaxy-m51.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy Note 20 Ultra', 599, '/cellphones/samsung-galaxy-note20-ultra.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy Note 20', 699, '/cellphones/Samsung_Galaxy_Note20.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Samsung', 'Samsung Galaxy M01', 999, '/cellphones/samsung-galaxy-m01.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Sony', 'Sony-Xperia-R1', 999, '/cellphones/Sony-Xperia-R1-Plus.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Sony', 'Sony-xperia-r1-plus', 1099, '/cellphones/Sony-xperia-r1-plus-2.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Sony', 'Sony-Xperia-XA2-Ultra', 599, '/cellphones/Sony-xperia-xa2-ultra.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Sony', 'Sony-xperia-xz2-compact', 699, '/cellphones/Sony-xperia-xz2-compact.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Sony', 'Sony-xperia-xa1-ultra', 999, '/cellphones/Sony-xperia-xa1-ultra.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Nokia', 'Nokia-7-plus', 999, '/cellphones/Nokia-7-plus.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Nokia', 'Nokia-225', 1099, '/cellphones/Nokia-225.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Nokia', 'Nokia-C3', 599, '/cellphones/Nokia-C3.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Nokia', 'Nokia-Lumia-920', 699, '/cellphones/Nokia-Lumia-920.jpg');
INSERT INTO Phone (brand, model, price, imageUrl) values('Nokia', 'Nokia-2', 999, '/cellphones/Nokia-2.jpg');



-- Down
DROP TABLE People;
DROP TABLE Phone ;