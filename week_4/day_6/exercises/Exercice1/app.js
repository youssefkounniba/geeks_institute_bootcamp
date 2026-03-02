import { connect, Schema, model, connection } from 'mongoose';


connect('mongodb://localhost:27017/collegeDB')
  .then(() => {
    console.log('✅ Connection Successful! Node.js is talking to MongoDB.');
    testStudent(); 
  })
  .catch(err => console.error('❌ Connection Failed:', err));



const studentSchema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name is mandatory'] 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  age: { 
    type: Number, 
    min: [18, 'Students must be at least 18 years old'] 
  }
});

const Student = model('Student', studentSchema);


const testStudent = async () => {
  try {
    const student = new Student({
      name: "Omar",
      email: "omar@school.com",
      age: 16 
    });

    await student.save();
  } catch (error) {
    console.log("🚨 Validation Error Caught:");
    console.log(error.message);
  } finally {
    connection.close(); 
  }
};
//output:
// Connection Successful! Node.js is talking to MongoDB.
// Validation Error Caught:
//Student validation failed: age: Students must be at least 18 years old