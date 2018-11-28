#manage-users

##installation

    npm install users-management
## Usage

By popular demand, `users-management`!

```js
var users = require('users-management');
var players = users.addUser("pippo", "franco") // create one users
console.log(users.deleteUser()); // delete an user by id 
console.log(users.filterByName("pippo")); // search user by name
users.reset(); // reset the users

```
