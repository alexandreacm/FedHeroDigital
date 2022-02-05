import { combineReducers } from '@reduxjs/toolkit';

import fedSlice from '@/store/slices/fedSlice';

export default combineReducers({
  feds: fedSlice
});
