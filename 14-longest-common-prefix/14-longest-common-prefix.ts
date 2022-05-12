function longestCommonPrefix(strs: string[]): string {
    if (strs[0] === '') return '';
    
    let prefix = '';
    
    const firstLength = strs[0].length;
    
    for (let x = 0; x < firstLength; x++) {
        const currChar = strs[0][x];
        
        // compare index X to each of word
        for (let y = 1; y < strs.length; y++) {
            
            if (currChar !== strs[y][x]) return prefix;
        }
                    
        prefix += currChar;
        
    }
    
    return prefix;
};
