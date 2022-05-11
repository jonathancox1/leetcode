function twoSum(nums: number[], target: number): number[] {
    
    for (let x = 0; x < nums.length; x++) {
        
        const diff = target - nums[x];
        
        for (let y = x + 1; y < nums.length; y++) {
            
            if (nums[y] === diff) return [x, y];
            
        }
    }
};