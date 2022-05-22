function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    
    // list of all possible numbers with duplicates removed
    const allNums = [...new Set([...nums1, ...nums2, ...nums3])];
    
    let result = [];
    
    for (let i = 0; i < allNums.length; i++) {
        
        const curr = allNums[i];
        
        if (nums1.includes(curr) && nums2.includes(curr) 
            || nums2.includes(curr) && nums3.includes(curr) 
            || nums1.includes(curr) && nums3.includes(curr)) {
            
            result.push(curr);
        }
        
    }
    
    return result;
};