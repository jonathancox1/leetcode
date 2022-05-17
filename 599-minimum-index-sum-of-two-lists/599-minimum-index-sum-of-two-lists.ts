function findRestaurant(list1: string[], list2: string[]): string[] {
    
    // build map for faster lookups
    // 'shogun' => 0;
    // 'kfc' => 1;
    
    let map = new Map();
    list1.forEach((str, i) => map.set(str, i));
    
    let leastSum = Infinity;
    let leastSumArr = [];

    for (let i = 0; i < list2.length; i++) {
        let curr = list2[i]
        
        if (map.has(curr)) {
            
            // create the sum the index from both lists
            let idx = map.get(curr)
            let currLeastSum = idx + i;
            
            // sums are equal, then append to our list
            if (leastSum === currLeastSum) {
                
                leastSum = currLeastSum;
                leastSumArr.push(curr);
            }
            
            // sums are not equal, over-ride existing list
            if (leastSum > currLeastSum) {
                
                leastSum = currLeastSum;
                leastSumArr = [curr];
            }
            
        }
        
    }
    
    return leastSumArr;
};