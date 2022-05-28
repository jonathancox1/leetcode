function findKthLargest(nums: number[], k: number): number {
    const sorted = nums.sort((a, b) => a - b);
    
    return sorted[nums.length - k];
};