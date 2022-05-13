class MedianFinder {
    list;
    
    constructor() {
        this.list = []
    }

    addNum(num: number): void {
        let tempList = this.list;
        
        for (let x = 0; x < tempList.length; x++) {
            let curr = tempList[x];
            
            if (curr > num) {
                tempList.splice(x, 0, num);
                return;
            }
        }
        
        tempList.push(num);
    }

    findMedian(): number {
        let mid = Math.floor(this.list.length / 2);
                
        if (this.list.length % 2 === 0) {
            
            return (this.list[mid - 1] + this.list[mid]) / 2;
            
        } else {
            return this.list[mid];
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */