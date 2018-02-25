// example
var resolveWhenTimeoutFinishes = (number) => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(number);
        }, 5000);
      });
}
async function f1(_number) {
    var number = await resolveWhenTimeoutFinishes(10);
    console.log(number + _number);  // 30
    console.log(_number) // 20
  }
  f1(20);

// no await example
var resolveWhenTimeoutFinishes = (number) => {
    setTimeout(() => {
        return number
    }, 5000);
    return number
}
function f1(_number) {
    var number = resolveWhenTimeoutFinishes(10);
    console.log(number + _number);  // 30
    console.log(_number) // 20
  }
  f1(20);
