function groupAnagrams(strs: string[]): string[][] {

    let map = new Map();
    
    for (let x = 0; x < strs.length; x++) {
                
        let sortedString = strs[x].split('').sort().toString();
        
        if (!map.has(sortedString)) {
            map.set(sortedString, [strs[x]]);
        } else {
            map.get(sortedString).push(strs[x]);
        }
    }
    
    return [...map.values()];
};