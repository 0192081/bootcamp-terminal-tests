
import assert from 'assert';
import greet from '../greet.js';
describe ('The greet function', function() {
    it ('Greet Thoko', function () {
        assert.equal('Hello, Thoko', greet('Thoko'));

        

    });
    
});
describe ('The greet function', function() {
    it ('Greet Thabiso', function () {
        assert.equal('Hello, Thabiso', greet('Thabiso'));
    });
});