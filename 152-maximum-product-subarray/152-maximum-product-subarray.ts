function maxProduct(nums: number[]): number {
    
    let maxProd = nums[0];
    let currProd = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
            
        while (j < nums.length) {
            currProd = currProd * nums[j];
            
            maxProd = Math.max(maxProd, currProd, nums[j]);
            
            j++;
        }
        
        currProd = nums[i + 1];
    }

    
    return maxProd;
};