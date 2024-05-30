// counter를 위한 reducer 함수
// (매게변수로 이전스테이트, 액셕(객체))

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREENT':
            return state + 1;

        case 'DECREMENT' :
            return state - 1;
        
        default :
            return state ;
    }
}

export default counter;