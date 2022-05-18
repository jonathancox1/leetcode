function twoSum(nums: number[], target: number): number[] {

    for (let i = 0; i < nums.length; i++) {
        
        const diff = target - nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            
            if (diff === nums[j]) return [i, j];
            
        }
        
    }
    
};