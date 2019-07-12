-- a table for cats
-- each cat should have an id, name, color, and a breed

-- a table toys
-- each toy should have an id, price, color and a name

-- a table for cattoys
-- (which will be the connection between cats and toys)
-- each cattoy should have an id, a cat_id and a toy_id
DROP TABLE cats 
DROP TABLE toys 
DROP TABLE cattoys  

CREATE TABLE cats
(
    id SERIAL,
    name VARCHAR(20),
    color VARCHAR(20),
    breed VARCHAR(20)
);

INSERT INTO 
    cats(name, color, breed)
VALUES 
    ('fluffy', 'white', 'manx'),
    ('sugar', 'beige', 'tabi'),
    ('tommy', 'yellow', 'tiger'), 
    ('sue', 'black', 'panther'),
    ('juice', 'orange', 'cheetah');

CREATE TABLE toys
(
    id SERIAL,
    name VARCHAR(20),
    price VARCHAR(20),
    color VARCHAR(20)
);

INSERT INTO 
    toys
    (name, price, color)
VALUES
    ('ball', 19, 'red'),
    ('pool', 92000, 'aqua'),
    ('palm tree', 88, 'green'),
    ('pet dog', 100, 'pom'),
    ('sand box', 84, 'gold');

CREATE TABLE cattoys
(
    id SERIAL,
    cat_id serial,
    toy_id serial 
);

-- INSERT INTO
--  toys
--     (name, color, price)
-- VALUES
--     (‘String’, ‘yellow’, 1);