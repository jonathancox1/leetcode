function intersection(nums: number[][]): number[] {
    // sort main array
    nums.sort((a, b) => a.length - b.length);
    
    // sort inner arrays
    nums.forEach((arr) => arr.sort((a, b) => a - b));
    
    let map = new Map();
    
    nums[0].forEach((num, i) => map.set(num, i));
    
                console.log(map)

    for (let i = 1; i < nums.length; i++) {
        
        map.forEach((value, key) => {
            if (!nums[i].includes(key)) map.delete(key);
            
        })
    }
    
    console.log(map)
    
    return Array.from(map.keys());
};