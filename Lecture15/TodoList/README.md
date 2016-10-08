#### Create Database

```sql
CREATE DATABASE todolist;
```

#### Create Table
```sql
create table if not exists todolist
(id INTEGER PRIMARY KEY AUTO_INCREMENT,
todo TEXT, done BOOLEAN);
```

#### Inserting first Todo
```sql
INSERT INTO todolist
VALUES(1, "My Task", false);
```
