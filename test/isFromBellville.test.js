
import isFromBellville from '../isFromBellville.js';
import assert from 'assert';

describe ('it isFromBellville', function() {
    
    it ('should show regNo isFromBellville', function () {


assert.equal(true, isFromBellville('CY 123'));
assert.equal(false, isFromBellville('CJ 123'));

        

    });
    
});