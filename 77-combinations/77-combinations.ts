function combine(n: number, k: number): number[][] {
    function perm(path, index, res) {
        
        // base case
        if (path.length === k) {
            res.push([...path])
        }
        
        for (let x = index; x < n + 1; x++) {
            
            // add
            path.push(x);
            
            // recurse
            perm(path, x + 1, res);
            
            // pop
            path.pop();
        }
    }
    
    let result = [];
    
    perm([], 1, result);
    
    return result;
};