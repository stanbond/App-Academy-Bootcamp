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
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    parent_id INTEGER,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
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
    question_follows (question_id, user_id)
VALUES
    (1,1),
    (2,2),
    (3,1);

INSERT INTO
    replies (body, question_id, user_id, parent_id)
VALUES
    ('Num thats divisible by only 1 and itself', (SELECT id FROM questions WHERE body = 'what is a prime?'), (SELECT id FROM users WHERE fname = 'Stan'), 1), 
    ('New York',(SELECT id FROM questions WHERE body = 'where is Alvin?'),(SELECT id FROM users WHERE fname = 'Stan'), 1),
    ('It''s a base case ever', (SELECT id FROM questions WHERE body = 'what is a base case?'), (SELECT id FROM users WHERE fname = 'Carlos'), 2);
    -- ('Thank you', (SELECT id FROM questions WHERE body = 'what is a prime?'), (SELECT id FROM users WHERE fname = 'Carlos'), (SELECT parent_id FROM replies WHERE body = 'Num thats divisible by only 1 and itself'));

INSERT INTO
    question_likes (question_id, user_id)
VALUES
    (1,2),
    (2,1),
    (3,1);