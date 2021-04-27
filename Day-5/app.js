for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        document.write("<h3>Fizzbuzz</h3>");
    } 
    else if (i % 3 == 0) {
        document.write("<h3>Fizz</h3>");
    }
    else if (i % 5 == 0) {
        document.write("<h3>Buzz</h3>");
    } else {
        document.write("<h3>"+ i +"</h3>");
    }
}