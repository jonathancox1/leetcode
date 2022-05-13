function permute(nums: number[]): number[][] {
    
    function dfs(path, used, result) {
        
        // base case => all numbers used
        if (path.length === nums.length) {
            
            result.push([...path]);
        }
        
        for (let x = 0; x < nums.length; x++) {
            
            // skip used nums
            if (used[x]) continue;
            
            // add to path, mark used
            path.push(nums[x]);
            used[x] = true;
            
            dfs(path, used, result);
            
            // remove from path, mark unused
            path.pop();
            used[x] = false;
        
        }        
    }
    
    let result = [];
    
    // flatten nested arrays
    nums = [...nums];
    
    let used = new Array(nums.length).fill(false);
    
    dfs([], used, result);
    
    return result;
};