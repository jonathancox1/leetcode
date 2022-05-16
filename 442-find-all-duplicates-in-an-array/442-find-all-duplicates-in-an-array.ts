function findDuplicates(nums: number[]): number[] {
    let arr = [];
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        
        let curr = nums[i];
        let next = nums[i + 1];
        
        if (curr === next) arr.push(curr);
        
    }
    
    return arr;
};