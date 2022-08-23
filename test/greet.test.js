
import assert from 'assert';
import greet from '../greet.js';
describe ('The gret function', function() {
    it ('should be able to greet Thoko', function () {
        assert.equal('Hello, Thoko', greet('Thoko'));

    });
    
});