function Dictionary() {
  this.items = {};
}

//  This returns true if the key exists in the dictionary and false otherwise
Dictionary.prototype.has = function (key) {
  return key in this.items;
};

// this add a new item to the dictionary
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

// this removes the value from the dictionary using the key
Dictionary.prototype.delete = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

// This returns a specific value searced by the key
Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};


// Dictionary.prototype.values = function () {
//   const values = [];
//   for (const k in this.items) {
//     if (this.has(k)) {
//       values.push(this.items[k]);
//     }
//   }
//   return values;
// }

// This returns how many elements the set contains
Dictionary.prototype.size = function () {
  return this.set.length;
};

// This removes all items from the set
Dictionary.prototype.clear = function () {
  this.set = {};
  return this;
};

// This returns the key used to identify a value in the dictionary
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

// This returns a specific value serached by the key
Dictionary.prototype.getItems = function () {
  return this.items;
};

// Using the dictionary class

const dictionary = new Dictionary();
dictionary.set('aroh', 'aroh@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Titus', 'titus@email.com');

console.log(dictionary.has('aroh')); // true

console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Titus'));

dictionary.delete('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
