/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

type products = {
    name: string,
    price: number
}

function processPrice(
    products: products[],
    callback: (product: products) => void
): void {
    for(const product of products) {
        callback(product)
    }
}

function expensiveProducts(
    product: products
){
    if(product.price >= 1000000) {
        console.log(`Name: ${product.name}, Price: ${processPrice}`)
}}

function discountedProducts(
    product: products){
    if(product.price >= 500000) {
        console.log(`Name: ${product.name}, Original price: ${product.price}, Discounted price: ${product.price * 9/10}`)
}}

processPrice(products, expensiveProducts)
processPrice(products, discountedProducts)