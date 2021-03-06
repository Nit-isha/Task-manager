# Task Manager project
Using Node, Express, CRUD operations, MongoDB Atlas, Mongoose

---

### Dependencies
- dotenv
- express
- mongoose

---

### Conventions [REST API]

- `GET` : app.get('/api/v1/tasks') ---> `get all tasks`
- `POST` : app.post('/api/v1/tasks') ---> `create a new task`
- `GET`: app.get('/api/v1/tasks/:id') ---> `get single task`
- `PATCH` : app.patch('/api/v1/tasks/:id') ---> `update task`
- `DELETE` : app.delete('/api/v1/tasks/:id') ---> `delete task`
  
---

### MongoDB
- NoSQL, Non-relational DB
- Store JSON
- Easy to get started
- Free cloud hosting - ATLAS (Mongo Db Atlas)
- [https://docs.atlas.mongodb.com/getting-started/](https://docs.atlas.mongodb.com/getting-started/)
  
---

### Mongoose

- Only the properties you set on schema will be passed onto the database.
- Any extra information will be neglected.
- [https://mongoosejs.com/docs/guide.html](https://mongoosejs.com/docs/guide.html).

---

### Mongoose queries
- Mongoose models provide several static helper functions for CRUD operations.
- [https://mongoosejs.com/docs/queries.html](https://mongoosejs.com/docs/queries.html).

---

### Express error handlers
- Default error handlers [http://expressjs.com/en/guide/error-handling.html#the-default-error-handler](http://expressjs.com/en/guide/error-handling.html#the-default-error-handler).
- Writing error handlers [http://expressjs.com/en/guide/error-handling.html#writing-error-handlers](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers).