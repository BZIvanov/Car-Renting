## Notes

1. This is used for handling incoming data from forms. No need to use bodyParser, because with express version 4.16 it is built in.

```javascript
// file: app.js
app.use(express.json({ limit: '10kb' }));
```

## Errors

1. CastError - this error.name can happen with mongoose

Examples:

- providing invalid id, when trying to get document from the database

2. MongoError - this error.name can happen with mongoose. The error code is 11000

Examples:

- trying to create new document with duplicate fields with already exisiting document

3. ValidationError - this error.name can happen with mongoose

Examples:

- trying to create new document without providing required field
