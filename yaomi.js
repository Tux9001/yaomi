const opTable = [
    [1, 0, 0],
    [1, 0, 2],
    [2, 2, 1]
]

function toTrinary(n) {
    return n.toString(3).padStart(10, '0')
}

function fromTrinary(s) {
    return parseInt(s, 3)
}

function op(x, y) {
    let XString = toTrinary(x)
    let YString = toTrinary(y)

    let result = '';
    for (let i = 0; i <= 9; i++) {
        let XDigit = TrinX[i]
        let YDigit = TrinY[i]
        result += opTable[XDigit][YDigit]
    }
    return fromTrinary(result)
}

function rotate(x) {
    let XString = toTrinary(x)
    XString = XString[9] + XString.substring(0, 9)
    return fromTrinary(XString)
}

