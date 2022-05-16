function longestCommonPrefix(strs: string[]): string {
    if (strs[0] === '') return '';
    
    let prefix = '';
    
    const firstLength = strs[0].length;
    
    for (let i = 0; i < firstLength; i++) {
        
        let currChar = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {   
            
            if (currChar !== strs[j][i]) return prefix;
        }
        
        prefix += currChar;
        
    }
    
    return prefix;
};
