

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
    createBatch(records) {
      records.forEach(record => this.create(record));
    }
      
  
    read(id) {
      console.log("inside read id" , id, " ", this.data[id-1]);
      return this.data.get(id);
    }
    fetchEmployee(){
      return 
    }
    getAgeByCategory(){
      const  ageByCategory = new Map();
      console.log("this is  getAgeByCategory  ",ageByCategory );
      console.log("this is info " ,this.data.toString());
      for(var i in this.data.values()){
        let age= this.data.get(i).get("age");
        let ageCategory=parseInt(age/10)*10;
        
        if(ageByCategory.has(ageCategory)){
          ageByCategory.set(ageCategory, ageByCategory.get(ageCategory)+1);
        }else{
          ageByCategory.set(ageCategory, 1);
        }

        console.log(" 1st for loop  ageByCategory ",ageByCategory );
      }

      for(var i in ageByCategory){
        let category = i.toString();
        category = category + "-" + (i+9);
        ageByCategory.set('ageGroup', category);
        ageByCategory.set('count', ageByCategory.get(i));
        console.log(" 2nd for loop ageByCategory ",ageByCategory );
      }
      
      return Array.from(ageByCategory.values());



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
  