function isPrime(n)
{
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
 
    return true;
}

document.getElementById("go").onclick = function () {
    var n = document.getElementById("n").value*1;
    var res = "<p>";
    var count = 0;
    for (let i = 2; i <= n; i++) {
       
        if (isPrime(i)) {
            res += i + ' ';
            count += 1;
        }
    }
    res += "</p>"
    output = "<p>Number of primes: " + count + "</p>" + res;
    document.getElementById("res").innerHTML = output;
}
