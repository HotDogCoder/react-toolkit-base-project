
export interface Person {
    id: string;
    name: string;
}

export interface PersonRequest {
    id: string;
    name: string;
    fk_id?: string;
    error?: any;
    message?: string;
}

export interface PersonError {
    id: [string];
    name: [string];
}

export interface PersonResponse {
    id: string;
    name: string;
    data: PersonRequest[];
    error?: PersonError | null;
    message?: string;
    loading?: boolean;
    deleted?: PersonRequest | null;
    new_one?: PersonRequest | null;
    new_ones?: PersonRequest[];
    persons?: PersonRequest[];
}

export type PersonState = PersonResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const PERSON_QUERY = 'PERSON_QUERY';
export const PERSON_QUERY_SUCCESS = 'PERSON_QUERY_SUCCESS';
export const PERSON_QUERY_FAIL = 'PERSON_QUERY_FAIL';

export const PERSON_UPLOAD = 'PERSON_UPLOAD';
export const PERSON_UPLOAD_SUCCESS = 'PERSON_UPLOAD_SUCCESS';
export const PERSON_UPLOAD_FAIL = 'PERSON_UPLOAD_FAIL';

export const PERSON_POST = 'PERSON_POST';
export const PERSON_POST_SUCCESS = 'PERSON_POST_SUCCESS';
export const PERSON_POST_FAIL = 'PERSON_POST_FAIL';

export const PERSON_GET = 'PERSON_GET';
export const PERSON_GET_SUCCESS = 'PERSON_GET_SUCCESS';
export const PERSON_GET_FAIL = 'PERSON_GET_FAIL';

export const PERSON_PUT = 'PERSON_PUT';
export const PERSON_PUT_SUCCESS = 'PERSON_PUT_SUCCESS';
export const PERSON_PUT_FAIL = 'PERSON_PUT_FAIL';

export const PERSON_DELETE = 'PERSON_DELETE';
export const PERSON_DELETE_SUCCESS = 'PERSON_DELETE_SUCCESS';
export const PERSON_DELETE_FAIL = 'PERSON_DELETE_FAIL';
// [ANCHOR_1]







interface StartLoadingAction {
type: typeof START_LOADING;
payload: PersonRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: PersonRequest;
}

interface PersonQueryAction {
type: typeof PERSON_QUERY;
payload: PersonResponse;
}
interface PersonQuerySuccessAction {
type: typeof PERSON_QUERY_SUCCESS;
payload: PersonResponse;
}
interface PersonQueryErrorAction {
type: typeof PERSON_QUERY_FAIL;
payload: PersonError;
}

interface PersonUploadAction {
type: typeof PERSON_UPLOAD;
payload: PersonResponse;
}
interface PersonUploadSuccessAction {
type: typeof PERSON_UPLOAD_SUCCESS;
payload: PersonResponse;
}
interface PersonUploadErrorAction {
type: typeof PERSON_UPLOAD_FAIL;
payload: PersonError;
}

interface PersonPostAction {
type: typeof PERSON_POST;
payload: PersonResponse;
}
interface PersonPostSuccessAction {
type: typeof PERSON_POST_SUCCESS;
payload: PersonResponse;
}
interface PersonPostErrorAction {
type: typeof PERSON_POST_FAIL;
payload: PersonError;
}

interface PersonGetAction {
type: typeof PERSON_GET;
payload: PersonResponse;
}
interface PersonGetSuccessAction {
type: typeof PERSON_GET_SUCCESS;
payload: PersonResponse;
}
interface PersonGetErrorAction {
type: typeof PERSON_GET_FAIL;
payload: PersonError;
}

interface PersonPutAction {
type: typeof PERSON_PUT;
payload: PersonResponse;
}
interface PersonPutSuccessAction {
type: typeof PERSON_PUT_SUCCESS;
payload: PersonResponse;
}
interface PersonPutErrorAction {
type: typeof PERSON_PUT_FAIL;
payload: PersonError;
}

interface PersonDeleteAction {
type: typeof PERSON_DELETE;
payload: PersonResponse;
}
interface PersonDeleteSuccessAction {
type: typeof PERSON_DELETE_SUCCESS;
payload: PersonResponse;
}
interface PersonDeleteErrorAction {
type: typeof PERSON_DELETE_FAIL;
payload: PersonError;
}
// [ANCHOR_2]







export type PersonActionTypes = 
StartLoadingAction
| EndLoadingAction

| PersonQueryAction 
| PersonQuerySuccessAction 
| PersonQueryErrorAction 

| PersonUploadAction 
| PersonUploadSuccessAction 
| PersonUploadErrorAction 

| PersonPostAction 
| PersonPostSuccessAction 
| PersonPostErrorAction 

| PersonGetAction 
| PersonGetSuccessAction 
| PersonGetErrorAction 

| PersonPutAction 
| PersonPutSuccessAction 
| PersonPutErrorAction 

| PersonDeleteAction 
| PersonDeleteSuccessAction 
| PersonDeleteErrorAction 
// [ANCHOR_3]






    