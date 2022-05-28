function thirdMax(nums: number[]): number {
    const sortedAndDistinct = [...new Set(nums)].sort((a, b) => a - b);

    const listLength = sortedAndDistinct.length;

    return sortedAndDistinct[listLength - 3] ?? sortedAndDistinct[listLength - 1];
};