exports.randomString = function (stringLength) {
    var stringLength = stringLength || 12;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = '';
    for (var i = 0; i < stringLength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        result += chars.substring(rnum, rnum + 1);
    }
    return result;
};