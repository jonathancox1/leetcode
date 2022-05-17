function findRestaurant(list1: string[], list2: string[]): string[] {
    let map = new Map();
    
    list1.forEach((str, i) => map.set(str, i));
    
    let leastSum = Infinity;
    let leastSumArr = [];
    
    for (let i = 0; i < list2.length; i++) {
        let curr = list2[i]
        
        if (map.has(curr)) {
            let idx = map.get(curr)
            let currLeastSum = idx + i;
            
            if (leastSum === currLeastSum) {
                
                leastSum = currLeastSum;
                leastSumArr.push(curr);
            }
            
            if (leastSum > currLeastSum) {
                
                leastSum = currLeastSum;
                leastSumArr = [curr];
            }
            
        }
        
    }
    
    return leastSumArr;
};