export const selectAllBenches = (benches) => {
    return Object.keys(benches).map(id => benches[id])
};