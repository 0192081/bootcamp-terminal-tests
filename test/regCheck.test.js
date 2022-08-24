
import regCheck from '../regCheck.js';
import assert from 'assert';

describe ('the regCheck function', function() {
    it ('check if a registration number is for GP, L, EC, MP registration plates ', function () {

assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
assert.equal(true, regCheck('5566 L', 'L'));
assert.equal(false, regCheck('5566 L', 'M'));



    });
    
});

