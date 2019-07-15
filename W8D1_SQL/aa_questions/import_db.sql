PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id SERIAL PRIMARY KEY,
    questions_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (questions_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE replies (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    parent_id INTEGER,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id SERIAL PRIMARY KEY,
    questions_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (questions_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO
    users (fname, lname)
VALUES
    ('Carlos', 'Catly'),
    ('Stan', 'Bond');


INSERT INTO
    questions (title, body, author_id)
VALUES
    ('math', 'what is a prime?', (SELECT id FROM users WHERE fname = 'Carlos')),
    ('teacher', 'where is Alvin?', (SELECT id FROM users WHERE fname = 'Stan')),
    ('recursion', 'what is a base case?', (SELECT id FROM users WHERE fname = 'Carlos'));


INSERT INTO
    question_follows (questions_id, user_id)
VALUES
    (1,1),
    (2,2),
    (3,1);

INSERT INTO
    replies (body, question_id, user_id, parent_id)
VALUES
    ('Num thats divisible by only 1 and itself', (SELECT id FROM questions WHERE body = 'what is a prime?'), (SELECT id FROM users WHERE fname = 'Carlos'), NULL), 
    ('New York',(SELECT id FROM questions WHERE body = 'where is Alvin?'),(SELECT id FROM users WHERE fname = 'Stan'), NULL),
    ('It''s a base case ever', (SELECT id FROM questions WHERE body = 'what is a base case?'), (SELECT id FROM users WHERE fname = 'Carlos'), NULL);

INSERT INTO
    question_likes (questions_id, user_id)
VALUES
    (1,2),
    (2,1),
    (3,1);