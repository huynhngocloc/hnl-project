

const selectNewsProduct = state => state.newProduct
const selectData = state => selectNewsProduct(state).data.map(item => ({ ...item, key: item.id }))
const selectItem = state => selectNewsProduct(state).item


export {
    selectNewsProduct,
    selectData,
    selectItem,

}