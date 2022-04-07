import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import authorizationReducer from './authorization/authorization_slice';

const rootReducer = combineReducers({ contactsReducer, authorizationReducer });

export default rootReducer;
