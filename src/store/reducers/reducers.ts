import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts_slice';
import authorizationReducer from './authorization/authorization_slice';

const rootReducer = combineReducers({ contactsReducer, authorizationReducer });

export default rootReducer;
