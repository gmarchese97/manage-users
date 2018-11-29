var users = [];
var id = 0;
exports.reset = function(){
    users = [];
    id = 0;
}

exports.addUser = function(param1, param2){
    var user = {
        name: param1,
        surname: param2,
        id: 0
    };
    user.id = id;
    users.push(user);
    id++;
    return "the new user now exist.";
}

exports.deleteUser = function(param1){
    for(var i = 0; i < users.length; i++){
        if(users[i].id === param1){
            users.splice(id, 1);
            return users;
        }
    }
}

exports.filteredByName = function(param1){
    var array = [];
    for(var i = 0; i < users.length; i++){
        if(users[i].name === param1){
            array.push(users[i]);
        }
    }
    if(array != undefined){
        return array;
    }
    else{
        return "the user does not exist.";
    }
}

exports.getUserByID = function(id){
    var array = [];
    for(var i = 0; i < users.length; i++){
        if(users[i].id === id){
            array.push(users[i]);
        }
    }
    if(array != undefined){
        return array;
    }
    else{
        return "the user does not exist.";
    }
}

this.reset();
