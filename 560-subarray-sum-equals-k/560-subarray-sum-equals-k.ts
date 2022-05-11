function subarraySum(nums: number[], k: number): number {
    const map = new Map();
    map.set(0, [-1]);
    
    let count = 0;
    
    let sum = 0;
    
    for (let x = 0; x < nums.length; x++) {
        
        sum += nums[x];
        const diff = sum - k;
        
        if (map.has(diff)) {
            
            count += map.get(diff).length;
            
        }
        
        if (!map.has(sum)) {
            
            map.set(sum, []);
        }
        
        map.get(sum).push(x);            

    }
    
    return count;
};