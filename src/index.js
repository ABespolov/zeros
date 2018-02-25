module.exports = function getZerosCount(number) {
    var count = 0;

    while(number > 0) {
        number /= 5;
        count += Math.floor(number);
    }

    return Math.floor(count);
}
