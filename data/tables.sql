

CREATE TABLE IF NOT EXISTS 

    product (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(50) NOT NULL,

        description VARCHAR(50) NOT NULL,

        brand VARCHAR(50) NOT NULL,
        imageUrl TEXT,
        price INTEGER NOT NULL,
        category VARCHAR(50) NOT NULL

        
        
    );






CREATE TABLE  IF NOT EXISTS 

    review(

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        comment VARCHAR (50) NOT NULL,
        rate VARCHAR (50) NOT NULL,
        product_id INTEGER ,
        FOREIGN KEY (product_id) REFERENCES product
      
    );







