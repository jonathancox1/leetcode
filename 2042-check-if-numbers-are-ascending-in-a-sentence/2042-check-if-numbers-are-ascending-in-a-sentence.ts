function areNumbersAscending(s: string): boolean {
    const stripped = s.match(/\d+/g);
    
    for (let i = 0; i < stripped.length; i++) {
        
        const curr = parseInt(stripped[i], 10);
        const next = parseInt(stripped[i + 1], 10);
        
        if (curr >= next) return false;

    }
    
    return true;
};