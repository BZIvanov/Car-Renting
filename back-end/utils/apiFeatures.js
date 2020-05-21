const constants = require('../constants');

class APIFeatures {
  constructor(docs, query) {
    this.docs = docs;
    this.query = query;
  }

  filter() {
    const copy = { ...this.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete copy[el]);

    let queryStr = JSON.stringify(copy);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    const toQuery = JSON.parse(queryStr);
    if (Object.prototype.hasOwnProperty.call(toQuery, 'model')) {
      if (toQuery.model === '') {
        delete toQuery.model;
      } else {
        toQuery.model = new RegExp(toQuery.model, 'i');
      }
    }

    this.docs = this.docs.find(toQuery);

    return this;
  }

  sort() {
    if (this.query.sort) {
      const sortBy = this.query.sort.split(',').join(' ');
      this.docs = this.docs.sort(sortBy);
    } else {
      this.docs = this.docs.sort('-pricePerDay');
    }

    return this;
  }

  limitFields() {
    if (this.query.fields) {
      const fields = this.query.fields.split(',').join(' ');
      this.docs = this.docs.select(fields);
    } else {
      this.docs = this.docs.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = +this.query.page || 1;
    const limit = +this.query.limit || constants.PAGE_RESULTS;
    const skip = (page - 1) * limit;

    this.docs = this.docs.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
