
import { Dispatch } from 'redux';
import { PersonActionTypes, PersonRequest, PersonResponse, PersonError } from '../types/person_types';
import axios, { AxiosError, AxiosResponse } from "axios";
axios.defaults.withCredentials = true;

export const PersonQuery =
  (data: PersonRequest) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios.get(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_QUERY", payload: response.data });

        dispatch({
        type: "PERSON_QUERY_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "QUERY_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_QUERY_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const PersonUpload =
  (data: PersonRequest, files: File[]) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    const formData = new FormData();
    formData.append("fk_id", data.fk_id ? data.fk_id.toString() : "");
    files.forEach((file) => {
      formData.append("name", file.name);
      formData.append("files", file);
    });

    axios.post(`${process.env.REACT_APP_API_URL}{prefix}{enpoint_name}/{model_name_for_url}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_UPLOAD_UPLOAD", payload: response.data });

        setTimeout(() => {
          dispatch({
            type: "PERSON_UPLOAD_SUCCESS",
            payload: {
              ...response.data,
              error: null,
              message: "UPLOAD_SUCCESS",
            },
          });
        }, 3000);

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_UPLOAD_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const PersonPost =
  (data: PersonRequest) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    
    axios.post(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}/`, data)
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_POST", payload: response.data });

        dispatch({
        type: "PERSON_POST_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "POST_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_POST_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const PersonGet =
  (data: PersonRequest) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios.get(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_GET", payload: response.data });

        dispatch({
        type: "PERSON_GET_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "GET_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_GET_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const PersonPut =
  (data: PersonRequest) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios.put(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}/`, data)
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_PUT", payload: response.data });

        dispatch({
        type: "PERSON_PUT_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "PUT_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_PUT_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const PersonDelete =
  (data: PersonRequest) =>
  async (dispatch: Dispatch<PersonActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios.delete(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<PersonResponse>) => {
        dispatch({ type: "PERSON_DELETE", payload: response.data });

        dispatch({
        type: "PERSON_DELETE_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "DELETE_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<PersonError>) => {
        if (error.response) {
          dispatch({
            type: "PERSON_DELETE_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };
// [ANCHOR_1]






    