import isWeekday from '../isWeekday.js';
import assert from 'assert';
describe ('Is it a Weekday', function() {
    it ('is it a Weekday', function () {

        assert.equal(false, isWeekday('Saturday'));
        assert.equal(false, isWeekday('Sunday'));
        
        

    });

    
});

describe ('Is it a Weekday', function() {
    it ('is it a Weekday', function () {

        assert.equal(true, isWeekday('Monday'));
        assert.equal(true, isWeekday('Wednesday'));
        
    });

    });