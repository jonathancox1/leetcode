function groupAnagrams(strs: string[]): string[][] {
    // sorted strings will allow for anagram check

    let map = new Map();
    // Map(1) { 'a,e,t' => [ 'eat' ] }
    // Map(1) { 'a,e,t' => [ 'eat', 'tea' ] }

    
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