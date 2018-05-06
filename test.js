
// var t1 = new test();
// t1.b();
// t1.d().haha();

// var arr1 = "string".split("");
// arr1.reverse();
// arr1.push('1');
// var num = new Number(arr1.slice(-1));
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout((function () {
//             console.log(i);
//         }), 1000);
//     })(i);
// }
var fizzBuzz = function(n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            ans.push('Fizz');
        }
        else if (i % 5 === 0) {
            ans.push('Buzz');
        }
        else {
            ans.push(i + '');
        }
    }

    console.log(ans);
};

fizzBuzz(15);

