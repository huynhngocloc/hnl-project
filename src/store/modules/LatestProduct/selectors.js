const selectNewsLatestProduct = state => state.latestProduct
const selectDataLastest = state => selectNewsLatestProduct(state).data.map(item => ({ ...item, key: item.id }))

export{selectNewsLatestProduct, selectDataLastest}