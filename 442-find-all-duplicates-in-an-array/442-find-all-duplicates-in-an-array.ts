function findDuplicates(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    
    let ans = [];
    
    for (let x = 0; x < nums.length; x++) {
        
        if (nums[x] === nums[x + 1]) ans.push(nums[x]);
    }
    
    return ans;
};