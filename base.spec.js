var generateUUID = require('./index.js');

describe('generateUUID', function() {
    function verify(uuid) {
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    }

    it('returns different values each time it is called', function() {
        var uuid = generateUUID();
        var uuid2 = generateUUID();
        verify(uuid);
        verify(uuid2);
        expect(uuid).not.toBe(uuid2);
    });
});