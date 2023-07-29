// //part 1
// const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
// const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// names.forEach((name) => {
//   //console.log(name)
// });

// names.forEach((name, index) => {
//   console.log(`${name} (${provinces[index]})`)
// });

// const uppercasedProvinces = provinces.map((province) => province.toUpperCase())
// console.log(uppercasedProvinces);

// const nameLengths = names.map((name) => name.length)
// console.log(nameLengths); // [6, 9, 11, 5, 7, 7]

// const sortedProvinces = provinces.slice().sort()
// console.log(sortedProvinces)

// const filteredProvinces = provinces.filter((province) => !province.includes('Cape'))
// console.log(filteredProvinces.length) // 3

// const containsS = names.map((name) => name.includes('s'))
// console.log(containsS) // [true, true, false, true, true, false]

// const provinceOfIndividual = names.reduce((acc, name, index) => {
//     acc[name] = provinces[index];
//     return acc;
//   }, {});
  
//   console.log(provinceOfIndividual);

//additional exercises
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  products.forEach((item) => {
    //console.log(item.product)
  });
  
     const filteredProducts = products.filter((item) => item.product.length <= 5)
        //console.log(filteredProducts)

    const combinedPrice = products
    .filter((item) => !isNaN(item.price) && item.price !== '')
    .map((item) => ({ ...item, price: Number(item.price) }))
    .reduce((acc, item) => acc + item.price, 0);
  
        //console.log(combinedPrice)

    const concatenatedNames = products.reduce((acc, item, index) => {
        acc += item.product
        if (index < products.length - 1) {
          acc += ', '
        } else if (index === products.length - 2) {
          acc += ', and '
        }
        return acc
      }, '')
      
        //console.log(concatenatedNames)
      
    const { highest, lowest } = products.reduce(
        (acc, item) => {
          if (!isNaN(item.price) && item.price !== '') {
            if (item.price > acc.highest.price) {
              acc.highest = item
            }
            if (item.price < acc.lowest.price) {
              acc.lowest = item
            }
          }
          return acc
        },
        { highest: { price: -Infinity }, lowest: { price: Infinity } }
      )
      
        //console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}.`)
      
    const modifiedProducts = Object.entries(products).reduce((acc, [key, value]) => {
        const modifiedKey = key === 'product' ? 'name' : 'cost'
        acc[modifiedKey] = value
        return acc
      }, {})
      
        //console.log(modifiedProducts);

    console.log(
        'Product Names:',
        products.map(item => item.product),
        'Filtered Products:',
        filteredProducts,
        'Combined Price:',
        combinedPrice,
        'Concatenated Names:',
        concatenatedNames,
        `Highest: ${highest.product}. Lowest: ${lowest.product}.`,
        'Modified Products:',
        modifiedProducts
          )
          
          
          
          
          
          