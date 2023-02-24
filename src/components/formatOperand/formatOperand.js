export default function FormatOperand(operand) {
    const INTEGER_EVALUATE = new Intl.NumberFormat('en-us', {
        maximumFractionDigits: 0, 
    })
    if(operand == null) return;
    const [integer, decimal] = operand.split('.')
    if(decimal == null) return INTEGER_EVALUATE.format(integer)
    return `${INTEGER_EVALUATE.format(integer)}.${decimal}`
}