function kthLargestNumber(nums: string[], k: number): string {
    const sorted: BigInt[] = [...nums].map((num) => BigInt(num))
                                        .sort((a, b) => a >= b ? 1 : -1);
    
    return sorted[nums.length - k].toString();
};