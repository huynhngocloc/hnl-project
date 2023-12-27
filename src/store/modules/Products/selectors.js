

const selectProduct = state => state.products
const selectProductData = state => selectProduct(state).data.map(item => ({ ...item, key: item.id }))


export {
    selectProductData,

}