function combinationSum(candidates: number[], target: number): number[][] {
    function comSum(path, candidates, index, sum, result) {
        
        if (sum === 0) {
            result.push([...path]);
            return;
        }
        
        for (let x = index; x < candidates.length; x++) {
            
            let curr = candidates[x];
            
            if (sum - curr < 0) continue;
            
            path.push(curr);
            
            comSum(path, candidates, x, sum - curr, result);
            
            path.pop();
        }
    }
    
    let result = [];
    
    comSum([], candidates, 0, target, result);
    
    return result;
};