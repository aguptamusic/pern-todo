/*
    Record of key command line psql commands.
*/

/** Notes:
*   Use ^C often.
*   psql -U postgres
*   \l --> list tables in database
*   \c perntodo --> connect to perntodo table
*   \dt --> show list of relations
*   SELECT * FROM todo; --> display all from table
*/
CREATE DATABASE perntodo;

/*
*   Each todo (row) has a unique id
*   (unique due to PRIMARY KEY),
*   and a description (max 255 chars).
*   Serial auto-increments each primary
*   key value (todo_id).
*/
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);