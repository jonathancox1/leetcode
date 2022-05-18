function divideString(s: string, k: number, fill: string): string[] {

    let result = [];
    
    let subItem = '';
    let count = 0;
    
    for (const char of s) {
        
        if (count < k) subItem += char, count++;
        
        if (count === k) {
            
            result.push(subItem);
            subItem = '';
            count = 0;
            
        }
        
    }
    
    // append fill
    let diff = k - subItem.length;
    
    if (diff && diff !== k) {
        result.push(subItem + fill.repeat(diff));
    }
    
    return result;
};