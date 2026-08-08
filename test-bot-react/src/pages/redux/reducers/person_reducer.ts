
import { PersonActionTypes, PersonState } from '../types/person_types';

const initialState: PersonState = {
    id: "",
    name: '',
    data: [],
    persons: [],
    error: null,
    message: '',
    loading: false,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const PersonReducer = (state = initialState, action: PersonActionTypes) => {
    switch (action.type) {

        case 'PERSON_QUERY':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_QUERY_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_QUERY_FAIL':
            return {...state, error: action.payload, message: 'QUERY_FAIL'};

        case 'PERSON_UPLOAD':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_UPLOAD_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_UPLOAD_FAIL':
            return {...state, error: action.payload, message: 'UPLOAD_FAIL'};

        case 'PERSON_POST':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_POST_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_POST_FAIL':
            return {...state, error: action.payload, message: 'POST_FAIL'};

        case 'PERSON_GET':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_GET_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_GET_FAIL':
            return {...state, error: action.payload, message: 'GET_FAIL'};

        case 'PERSON_PUT':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_PUT_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_PUT_FAIL':
            return {...state, error: action.payload, message: 'PUT_FAIL'};

        case 'PERSON_DELETE':
            return {...state, persons: action.payload.persons, error: null, message: action.payload.message};
        case 'PERSON_DELETE_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PERSON_DELETE_FAIL':
            return {...state, error: action.payload, message: 'DELETE_FAIL'};
// [ANCHOR_1]






        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default PersonReducer;
    