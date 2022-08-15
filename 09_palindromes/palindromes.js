const palindromes = function (text) {
    text = text.replace(/[.,\/#!$%@\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase();
    let odd = text.length % 2 != 0 ? true:false;
    
    let mid = odd ? (text.length - 1)/2:null;
    let text1 = text.slice(0, odd ? mid:text.length/2);
    let text2 = text.slice(odd ? mid + 1:text.length/2, text.length)
    
    return text1 === Array.from(text2).reduce((total, i) => i + total) ? true:false
};

// Do not edit below this line
module.exports = palindromes;
