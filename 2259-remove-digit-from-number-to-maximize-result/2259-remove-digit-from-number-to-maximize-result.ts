function removeDigit(number: string, digit: string): string {
    let result = '';
    
    for (let i = 0; i < number.length; i++) {
        
        let curr = number[i];
        
        if (curr === digit) {
            
            let currResult = number.slice(0, i) + number.slice(i + 1, number.length);
            
            if (currResult > result) result = currResult;
            
        }
        
    }
    
    return result;
};