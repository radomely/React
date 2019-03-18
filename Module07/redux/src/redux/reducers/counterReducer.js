function counter (state = 0, action) {
    switch (action.type){
        case 'ADD':
            return state + action.data;
        case 'SUB':
            return state - action.data;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default counter;