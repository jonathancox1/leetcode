function checkString(s: string): boolean {
    return s === s.split('').sort().join('');
};