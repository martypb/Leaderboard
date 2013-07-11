/*global describe, it */
'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should equal itself', function () {
                expect(1).to.be.equal(1);
            });

            it('should not equal 2', function() {
                expect(1).not.to.be.equal(2);
            })
        });
    });
})();
