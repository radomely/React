export const add = (number) => ({
    type: 'ADD',
    data: number,
})

export const sub = (number) => ({
    type: 'SUB',
    data: number,
})

export const reset = () => ({
    type: 'RESET',
})