const {MongoClient, ObjectId} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',{ useUnifiedTopology: true });

client.connect((error,client)=>{
    if(error)
    return;
    const Schema = mongoose.Schema
    const userSchema = new Schema({
        name:{
            type:String,
            require:true,
            trim:true
        },
        age:{
            type:Number,
            required:true,
            validate(value){
                if(value < 0)
                throw new Error('Age must not be negative')
            }
        },
        email:{
            type:String,
            required:true,
            validate(value){
                if(!validator.isEmail(value))
                    throw new Error('It Shoul be an email')
            }
        },
        password:{
            type:String,
            required:true,
            minlength:5
        }
    });

const User = mongoose.model('User',userSchema);

}) ;

client.close();

