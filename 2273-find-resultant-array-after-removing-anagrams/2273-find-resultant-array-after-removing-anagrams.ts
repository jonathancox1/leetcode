function removeAnagrams(words: string[]): string[] {
    let sorted = []
    words.forEach((word) => sorted.push(word.split('').sort().join('')));

    for (let i = words.length; i > 0; i--) {
        
        let curr = sorted[i];
        let next = sorted[i - 1];
        
        if (curr === next) {
            words.splice(i, 1);
        }
        
        
        
    }
    
    return words;
};