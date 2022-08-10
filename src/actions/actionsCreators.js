import {
    DETAILS_REQUEST,
    DETAILS_FAILURE,
    DETAILS_SUCCESS,
    LIST_DETAILS_REQUEST,
    LIST_DETAILS_FAILURE,
    LIST_DETAILS_SUCCESS,
  } from './actionTypes';
  
  
  export const addListRequest = () => ({
    type: LIST_DETAILS_REQUEST,
  });
  
  export const addListFailure = error => ({
    type:  LIST_DETAILS_FAILURE,
    payload: {error},
  });
  
  export const addListSuccess = items => ({
    type: LIST_DETAILS_SUCCESS,
    payload: {items},
  });
  
  export const addDetailsRequest = (id) => ({
    type: DETAILS_REQUEST,
    payload: {id},
  });
  
  export const addDetailsFailure = error => ({
    type:  DETAILS_FAILURE,
    payload: {error},
  });
  
  export const addDetailsSuccess = item => ({
    type: DETAILS_SUCCESS,
    payload: {item},
  });
  
