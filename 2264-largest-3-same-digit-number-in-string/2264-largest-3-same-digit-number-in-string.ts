function largestGoodInteger(num: string): string {

    let good = '';
    
    for (let i = 0; i < num.length; i++) {
        
        let curr = num[i];
        let next = num[i + 1];
        let third = num[i + 2];
        
        if (curr === next && next === third) {
            
            let currGood = curr + next + third;
            
            if (currGood > good) good = currGood;
            
        }
        
    }
    
    return good;
};