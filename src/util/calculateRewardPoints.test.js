import { calculateRewardPoints } from './calculateRewardPoints';
import { render, screen } from '@testing-library/react';

describe('Calculate reward points',()=>{
    it('Should return 0 while price is less than 50',()=>{
        const result = calculateRewardPoints(20);
        expect(result).toBe(0)
    })
    it('Should be return 40 reward point',()=>{
        const result = calculateRewardPoints(90);
        expect(result).toBe(40);
    })
    it('Should be return 90',()=>{
        const result = calculateRewardPoints(120);
        expect(result).toBe(90)
    })
    it('Should be return 0',()=>{
        const result = calculateRewardPoints(50);
        expect(result).toBe(0)
    })
    it('Should be return 50',()=>{
        const result = calculateRewardPoints(100);
        expect(result).toBe(50)
    })

    it('on 50.50 should be 0.50',()=>{
        const result = calculateRewardPoints(50.50);
        expect(result).toBe(0)
    })
    it('on 100.50 should be 50',()=>{
        const result = calculateRewardPoints(100.25);
        expect(result).toBe(50)
    })
    it('should throw an error message when a string is passed as a price', () => {
        expect(() => calculateRewardPoints("100.25")).toThrowError('Price must be numbers');
    });

    it('on negative value',()=>{
        const result = calculateRewardPoints(-55);
        expect(result).toBe(0)
    })

    it('should throw an error message when a null is passed as a price', () => {
        expect(() => calculateRewardPoints(null)).toThrowError('Price must be numbers');
    });
    it('should throw an error message when a undefined is passed as a price', () => {
        expect(() => calculateRewardPoints(undefined)).toThrowError('Price must be numbers');
    });
    it('Test case for large numbers 2000000', () => {
        const result = calculateRewardPoints(2000000);
        expect(result).toBe(3999850)
    });
})