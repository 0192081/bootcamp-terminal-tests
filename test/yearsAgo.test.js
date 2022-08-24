import yearsAgo from '../yearsAgo.js';
import assert from 'assert';
describe ('How many yaersAgo', function() {
   
    it ('should show how many YearsAgo', function () {
    

assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000)); 
assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

        

    });
    
});