

class DummyDatabase {
    constructor() {
      this.data = new Map();
      this.id = 0;
    }
  
    create(record) {
      this.id += 1;
      this.data.set(this.id, { ...record, id: this.id });
      return this.data.get(this.id);
    }
  
    read(id) {
      return this.data.get(id);
    }
  
    readAll() {
      return Array.from(this.data.values());
    }
  
    update(id, updatedRecord) {
      if (this.data.has(id)) {
        this.data.set(id, { ...updatedRecord, id });
        return this.data.get(id);
      }
      return null;
    }
  
    delete(id) {
      return this.data.delete(id);
    }
  }
  
  const db = new DummyDatabase();
  export default db;
  