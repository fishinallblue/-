// 统计一个字符串出现最多的字母
function most (str) {
    var hash = {}
    var most = 0;
    var result = [];
    for(var i=0; i< str.length; i++) {
        if(hash[str.charAt(i)]) {
            hash[str.charAt(i)] = hash[str.charAt(i)] + 1;
        }else {
            hash[str.charAt(i)] = 1;
        }
        if (hash[str.charAt(i)] > most) {
            most = hash[str.charAt(i)];
        }
    }
    for(var j in hash) {
        if (hash[j] == most) {
            result.push(j);
        }
    }
    return result.length == 1 ? result[0]: result;
}
console.log(most('afjghdfraaaasdenas'));