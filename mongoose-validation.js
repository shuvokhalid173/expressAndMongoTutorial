/// Bismillahhirrahmanirrahim ///
const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/playground')
        .then(() => {console.log('Successfully conncected to database');})
        .catch((err) => {console.log('somthing problem connecting database' + err);});



const courseSchema = new  mongoose.Schema ({
    name : {
        type : String , 
        required : true        
    },
    author : {
        type: String,
        required: true,
        validate: {
            isAsync : true,
            validator: function (value, callback){
                setTimeout(()=> {
                    const result = value!='admin'
                    console.log("result " + result)
                    callback(result);
                }, 4000);
            }, 
            message : 'name can not be admin'
        }
    },
    tags : {
        type: Array,
        validate : {
            validator : function (value) {
                if (value && value.length > 0) 
                    return true;
                else 
                    return false;
            }, 
            message : 'Array can not be empty'
        }
    } ,
    date : {type : Date, default : Date.now} , 
    isPublished : Boolean,
    price : {
        type : Number,
        required : function () {
            return this.isPublished == true;
        },
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
    category : {
        type : String ,
        required : true , 
        enum : ['web', 'mobile', 'network']
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse () {
    const course = new Course({
        name : "Php Course",
        author : "Shuvo", 
        tags : ['backend'],
        isPublished : false,
        category : 'web',
        price : 23.6
    });
    try {
        const result = await course.save();
        console.log(result);
    } catch (err) {
        for(let index in err.errors) {
            console.log(err.errors[index].message);
        }
    }
}

createCourse();
/*
const port = process.env.PORT || 3000 ;
app.listen(port , () => {
    console.log(`Listening at port ${port}`);
})*/