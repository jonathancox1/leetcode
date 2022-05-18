function reverseWords(s: string): string {
        
    let split = s.split(' ');
    
    let cleaned = [];
    
    split.forEach((word) => {
        
        if (word) cleaned.push(word);
        
        
    })
    
    return cleaned.reverse().join(' ');
};