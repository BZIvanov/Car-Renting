## Notes

1. This is used for handling incoming data from forms. No need to use bodyParser, because with express version 4.16 it is built in.

```javascript
// file: app.js
app.use(express.json({ limit: '10kb' }));
```

## Errors

1. CastError - error name could happen with mongoose

Examples:

- providing invalid id, when trying to get document from the database
