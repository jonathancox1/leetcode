function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(...nums);
    
    let max = Array(nums.length).fill(0);
    
    max[0] = nums[0];
    max[1] = Math.max(nums[0], nums[1]);
    
    for (let x = 2; x < nums.length; x++) {
        
        max[x] = Math.max(max[x - 1], nums[x] + max[x - 2]);
        
    }
    
    return max[max.length - 1];
};