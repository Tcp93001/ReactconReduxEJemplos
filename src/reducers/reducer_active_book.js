//state argument is not app state, only the state this reducer is responsible for

// este es el principal reducer que llego a cambiar el estado de la aplicación.


export default function(state = null, action) {

    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;

    }

    return state;

}