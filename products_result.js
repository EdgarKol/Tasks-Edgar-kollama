// Ex 4 allProduct
function findProduct(name) {
    return allProduct.find((product) => {
        return product.name === name
    })
}
const cucumber = findProduct('Cucumber')
const tomato = findProduct('Tomato')
const appleKrista = findProduct('Apple Krista')

const cucumberPrice = +(cucumber.discountPrice)