class LRUCache {
    constructor(capacity: number) {
        this.map = new Map();
        this.cap = capacity;
    }
    
    map;
    cap;

    get(key: number): number {
        
        if (!this.map.has(key)) return - 1;
        
        let value = this.map.get(key);
        
        this.map.delete(key);
        
        this.map.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        
        if (this.map.has(key)) this.map.delete(key);

        this.map.set(key, value);
        
        if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */