var users = [];
var COUNTER = 0;

exports.reset = function(){
    users = [];
    COUNTER = 0;
}

exports.addUser = function(param1, param2){
    var user = {
        name: param1,
        surname: param2,
        id: 0
    };
    user.id = id;
    users.push(user);
    COUNTER++;
    return "the new user now exist.";
}

exports.deleteUser = function(param1){
    for(var i = 0; i < users.length; i++){
        if(users[i].id === param1){
            users.splice(i, 1);
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

exports.getUserByID = function(param1){
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

exports.getUsers = function(){
    var index = 0;
    if(users.length != 0){
        index = users.length;
        return index;
    }
    else{
        return "Users aren't here!!!";
    }
}

this.reset();