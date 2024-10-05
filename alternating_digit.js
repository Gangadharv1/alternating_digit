function alternateDigitSum(n) {
    n = n.toString();
    let sum = 0;
    let sign = 1;
    for (let i = 0; i < n.length; i++) {
        sum += sign * parseInt(n[i]);
        sign *= -1;
    }
    return sum;
}