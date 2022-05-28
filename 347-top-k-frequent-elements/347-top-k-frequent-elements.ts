function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map<number, number>();
    
    for (let x = 0; x < nums.length; x++) {
        
        let current = nums[x];
        
        if (!map.has(current)) {
            map.set(current, 1);
        } else {
            let curr = map.get(current);
            map.set(current, curr + 1);
        }
    }
    
    let sorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    
    return [...sorted.keys()].splice(0, k);
};