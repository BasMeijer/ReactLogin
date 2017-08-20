/**
 * helper function to replace a nested property in an object with a new value
 * without mutating the object itself.
 *
 * Note: does not work with Arrays!
 *
 * @param {Object} object
 * @param {Array.<string>} path
 * @param {*} value
 * @return {Object} Returns a new, updated object
 */
export function setIn (object, path, value) {
    if (path.length === 0) {
        return value
    }

    // TODO: extend with support for Arrays

    const key = path[0]
    const child = typeof object[key] === 'object' ? object[key] : {}
    const updated = clone(object)

    updated[key] = setIn(child, path.slice(1), value)

    return updated
}

/**
 * Flat clone the properties of an object
 * @param {Object} object
 * @return {Object} Returns a flat clone of the object
 */
export function clone (object) {
    const cloned = {}

    Object.keys(object).forEach(key => {
        cloned[key] = object[key]
    })

    return cloned
}