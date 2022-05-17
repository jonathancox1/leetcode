function intersection(nums: number[][]): number[] {
    
    // sort main array
    nums.sort((a, b) => a.length - b.length);
    
    // sort inner arrays
    nums.forEach((arr) => arr.sort((a, b) => a - b));
    
    // build map to compare to
    let map = new Map();
    nums[0].forEach((num, i) => map.set(num, i));
    
    for (let i = 1; i < nums.length; i++) {
        
        map.forEach((value, key) => {
            
            if (!nums[i].includes(key)) map.delete(key);
            
        })
    }
    
    return Array.from(map.keys());
};