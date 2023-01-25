function HashTable() {
    this.numBuckets = 35;
    this.buckets = [];
    
    HashTable.prototype.hash = function(var_s) {
        let sumoCodigos = 0;
        for (let k in var_s) {
            sumoCodigos += var_s.charCodeAt(k); 
        }
        return ( (sumoCodigos % this.numBuckets) );
    };
    
    HashTable.prototype.haycoli = function(kh) {
        if (this.buckets.length===0) {
            return false;
        } else {
            for (let k in this.buckets) {
                if (kh in this.buckets[k]) {
                    return k;
                }
            }
            return false;
        }
    }

    HashTable.prototype.set = function(key, value) {
        if ( typeof(key)!=='string' ) throw TypeError('Keys must be strings'); 

            let obj = {};
            let coha = this.hash(key);
            let index = this.haycoli(coha);
            if (index===false) {
                obj[coha] = value;
                obj[key] = value;
                this.buckets.push(obj);
            } else {
                this.buckets[index][key] = value;
            }

    };
    
    HashTable.prototype.get = function(key) {
        let coha = this.hash(key);
        let index = this.haycoli(coha);
        if (index===false) {
            return undefined;
        } else {
            return this.buckets[index][key];
        }
    };
    
    HashTable.prototype.hasKey = function(key) {
        return this.get(key) === undefined ? false : true;
    };
}

var hashTable = new HashTable();
console.log(hashTable.numBuckets);

console.log(hashTable.hash('foo'));
console.log(hashTable.hash('this is a key'));
console.log(hashTable.hash('what about this one'));

hashTable.set('foo','Luis');
console.log(hashTable.buckets);
hashTable.set('this is a key', 'camilo');
console.log(hashTable.buckets);
hashTable.set('what about this one', 'Diana');
console.log(hashTable.buckets);

hashTable.set('key1', 'val1');
hashTable.set('key2', 'val2');
hashTable.set('this is a very different string', 44.4);
console.log(hashTable.buckets);

console.log(hashTable.get('key1'));

console.log(hashTable.buckets);

console.log(hashTable.haycoli(hashTable.hash('this is a very different string')));

console.log(hashTable.hash('this is a very different string'));

//hashTable.set(false, 'hi');

hashTable.set('foo', 'bar1');
hashTable.set('foo', 'bar2');
console.log(hashTable.buckets);

hashTable.set('foo', 'bar1');
hashTable.set('ofo', 'bar2');
console.log(hashTable.buckets);

console.log(hashTable.buckets);
console.log('---');
console.log(hashTable.get('this is a very different string'));
console.log('---');
console.log('ofo',hashTable.get('ofo'));
console.log('---');
console.log('foo',hashTable.get('foo'));

hashTable.set('foo', 'bar1');
hashTable.set('foo', 'bar2');
console.log(hashTable.buckets);
console.log('foo',hashTable.get('foo'));

hashTable.set('foo', 'bar1');
hashTable.set('ofo', 'bar3');
console.log(hashTable.buckets);
console.log('ofo',hashTable.get('ofo'));

hashTable.set('foobar', 'fluf cats');
console.log(hashTable.hasKey('foobar'));
console.log(hashTable.hasKey('raboof'));
console.log(hashTable.buckets);

hashTable.set('Instructora', 'María');
console.log(hashTable.buckets);