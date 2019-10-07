
function getUserById (id) {
    console.log('geting user by id ...'); 
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                resolve({Id : id , name : 'shuvo'});
            } else if (id == 2) {
                resolve({Id : id , name : 'surjo'});
            }else {
                reject(new Error ('Id is unknown'));
            }
        }, 2000);
    });
}

function getUserDetailsByUser (User) {
    console.log('geting user details by name ...')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (User.name == 'shuvo') {
                resolve({Id : User.Id , Name : User.name , Dept : 'CSE'});
            } else if (User.name == 'surjo') {
                resolve({Id : User.Id , Name : User.name , Dept : 'EEE'});
            }else {
                reject(new Error ('Name is unknown'));
            }
        }, 2000);
    });
}

async function print () {
    try {
        const user = await getUserById(0);
        console.log("user " + user);
    } catch (error) {
        console.log(error);
    }
}

print();

getUserById(2).then((result) => {console.log(result);getUserDetailsByUser(result)
              .then(res => console.log(res));
})