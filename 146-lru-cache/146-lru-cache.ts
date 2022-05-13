class LRUCache {
    constructor(capacity: number) {
        this.map = new Map();
        this.queue = new Array(capacity);
        this.cap = capacity;
    }
    
    queue;
    map;
    cap;
    
    updateLRC(key: number): void {
        let isInQueue = this.queue.indexOf(key);
        
        // in queue && not most recently used
        if (isInQueue !== -1) {
            
            // move it to end
            this.queue.splice(isInQueue, 1);
            this.queue.push(key);
        }
        
        if (isInQueue === -1) {
                  
            this.queue.push(key)

            if (this.queue.length > this.cap) {
                // evict LRU key
                let evict = this.queue.shift();

                this.map.delete(evict);
            }  
        }
        
    }

    get(key: number): number {
        
        let isValid = this.map.get(key);
        
        if (isValid !== undefined) {
            
            this.updateLRC(key);
            return isValid;
        }
        
        return -1;
        
    }

    put(key: number, value: number): void {
        
        this.updateLRC(key);
        
        this.map.set(key, value);
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */