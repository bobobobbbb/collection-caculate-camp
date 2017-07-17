'use strict'

var extra_practice = require('../practices/extra_practice.js')

describe('extra practice', () => {
    it('when it should return',() => {
        var result = extra_practice.main('1234', '1234')
        expect(result).toBe('4A4B')
    })
    it('when it should return 2', () => {
        var result = extra_practice.main('1234', '4321') 
        expect(result).toBe('0A4B')
    })
})