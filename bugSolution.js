```javascript
// Use $exists operator to match all documents where the field exists
db.collection.find({ field: { $exists: true } });

// Or simply find all documents
db.collection.find({});
```