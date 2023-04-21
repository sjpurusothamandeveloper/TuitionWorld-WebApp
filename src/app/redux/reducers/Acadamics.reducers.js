import {
ACADAMICS_ACTION_TYPES
  } from '../actions/Acadamics.actions';
  
  const initialState = {
    allClassRooms: [],
    addNewSection: null,
    singleClassRoomDetails: null, 
    updateClassRoomDetails: null,
    allStudents: [],
    allStaffs: [],
    added: null,
    updated: null
  };
  
  const AcadamicsReducer = function (state = initialState, action) {
    switch (action.type) {
      case ACADAMICS_ACTION_TYPES.GET_ALL_CLASS_ROOMS: {
        return {
          ...state,
          allClassRooms: action.payload,
        };
      }
      case ACADAMICS_ACTION_TYPES.CREATE_NEW_SECTION: {
        return {
          ...state,
          addNewSection: action.payload,
          added: action.payload.msg,
        };
      }
      case ACADAMICS_ACTION_TYPES.GET_SINGLE_CLASS_DETAILS: {
        return {
          ...state,
          singleClassRoomDetails: action.payload,
        };
      }
      case ACADAMICS_ACTION_TYPES.UPDATE_SINGLE_CLASS_DETAILS: {
        return {
          ...state,
          updateClassRoomDetails: action.payload,
          updated: action.payload.msg
        };
      }
      case ACADAMICS_ACTION_TYPES.GET_ALL_STAFFS_LIST: {
        return {
          ...state,
          allStaffs: action.payload,
        };
      }
      case ACADAMICS_ACTION_TYPES.GET_ALL_STUDENTS_LIST: {
        return { 
          ...state,
          allStudents: action.payload,
        };
      }
      case ACADAMICS_ACTION_TYPES.CLEAR_ACADAMICS_STATE: {
        return { 
          ...state,
          ...action.payload,
        };
      }
      case ACADAMICS_ACTION_TYPES.SET_INITIAL_VALUES: {
        return { 
          ...initialState
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  export default AcadamicsReducer;
  