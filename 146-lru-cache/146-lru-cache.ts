class LRUCache {
    constructor(capacity: number) {
        this.map = new Map();
        this.cap = capacity;
    }
    
    map;
    cap;

    get(key: number): number {
        if (!this.map.has(key)) return - 1;
        
        // retain existing value
        let value = this.map.get(key);
        
        // remove delete key, and re-set to update insertion order
        this.map.delete(key);
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        // remove delete key, and re-set to update insertion order
        if (this.map.has(key)) this.map.delete(key);
        this.map.set(key, value);

        // remove the key => lookup by keys() insertion order, iterate, value = key value
        if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */