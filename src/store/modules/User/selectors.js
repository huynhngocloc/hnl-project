const selectUser = state => state.user
const selectDataUser = state => selectUser(state).data.map(item => ({ ...item, key: item.id }))

export{
    selectDataUser
}