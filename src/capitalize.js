function capitalize (str) {
    const firstCharCap = str.charAt(0).toUpperCase()
    const firstCharRemoved = str.slice(1)
    return `${firstCharCap}${firstCharRemoved}`
}


module.exports = capitalize;