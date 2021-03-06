var tape = require("tape"),
    keys = require("../src/index");


tape("should return array of object keys", function(assert) {
    assert.deepEqual(keys(null), []);
    assert.deepEqual(keys(undefined), []);
    assert.deepEqual(keys(0), []);
    assert.deepEqual(keys(""), []);
    assert.deepEqual(keys("hey"), ["0", "1", "2"]);
    assert.deepEqual(keys({}), []);
    assert.deepEqual(keys([]), []);
    assert.deepEqual(keys(/./), []);

    assert.deepEqual(keys({
        a: 0,
        b: 1,
        c: 2
    }), ["a", "b", "c"]);

    assert.end();
});
