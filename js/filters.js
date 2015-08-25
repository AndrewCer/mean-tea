app.filter('testBool', function () {
  return function (input) {
    if (input === true) {
      return 'Yes'
    }
    else {
      return 'No'
    }
  }
})

app.filter('priceFilter', function () {
  return function (input) {
    console.log(input);
  }
});

app.filter('priceConvert', function () {
  return function (input) {
    var numberString = input.toString()
    console.log(numberString.split(0));
  }
})
