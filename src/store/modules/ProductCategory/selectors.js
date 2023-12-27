

const selectproductcategory = state => state.productcategory
const selectselectproductcategory = state => selectproductcategory(state).data.map(item => ({ ...item, key: item.id }))


export {
    selectselectproductcategory,

}