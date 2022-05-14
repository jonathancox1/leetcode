let hash = {};

function climbStairs(n: number): number {    
    if (n === 0 || n === 1) return 1;
    
    if (n in hash) return hash[n];
    
    hash[n] = climbStairs(n - 1) + climbStairs(n - 2);
    
    return hash[n];
};