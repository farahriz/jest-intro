const functions = require('./functions')

// to be
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
});

// to be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// to be falsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// to be truthy
test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});


// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad', 
        lastName: 'Traversy'
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    // expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen'];
    expect(usernames).toContain('admin');
})