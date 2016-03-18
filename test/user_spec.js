var should = require("should");
var User = require("../models/user");

describe("User", function(){

    describe("defaults", function(){
        var user = {};
        before(function(){
            user = new User({email: "mano@reptileinx.com"});
        });

        it("email is mano@reptileinx.com ", function(){
            user.email.should.equal("mano@reptileinx.com");
        });

        it("has an authentication token", function(){
            user.authenticationToken.should.be.defined;
        });
        it("has pending status", function(){
            user.status.should.equal("pending");
        });
        it("has a created date ", function(){
            user.createdAt.should.be.defined;
        });
        it("has a signInCount of 0 ", function(){
            user.signInCount.should.equal(0);
        });
        it("has lastLogin", function(){
            user.lastLoginAt.should.be.defined;
        });
        it("has currentLogin", function(){
            user.currentLoginAt.should.be.defined;
        });

    });
});