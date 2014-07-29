var test = require('tap').test;
var confuse = require('../');

test('allow a custom merge implementation', function (t) {
    t.same(confuse({ dir : __dirname, mergeImplementation: function () { return "foo"; } }), 
        "foo");
    t.end();
});
