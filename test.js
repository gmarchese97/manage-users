var assert = require('assert');
var users = require('./index.js');



describe('test function addUser', function() {
    it('test successful case',
    function(){
        assert.equal(typeof users.addUser("ciao", "44"), 'string');
    });
});

describe('test function deleteUser', function() {
    it('test successful case',
    function(){
        assert.equal(typeof users.deleteUser(1), 'object');
    });
});

describe('test function filteredByName', function() {
    it('test successful case',
    function(){
        assert.equal(typeof users.filteredByName("carlo"), 'string');
    });
});