let array = ['string', l , true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(array[3]);

array.forEach(function(item, index){console.log(item, index)});

array.push('novo item')
console.log(array)