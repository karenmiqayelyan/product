import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeSlice from '../features/reducerhome/Reducerhome'
import ImagesSlice from '../features/reducerhome/Reducerimages'
import ClosSlice from '../features/reducerhome/Reducerclos'
import RefreshSlice from '../features/reducerhome/ReducerRefresh'
import WishlistSlice from '../features/reducerhome/reducerwhishlist/Reducerwishlist'
import BagSlice from '../features/reducerhome/reducerbag/reducerbag'
import MyaccauntSlice from '../features/reducerhome/myaccaunt/Myaccaunt'
import BagtwoSlice from "../features/reducerhome/Reducerbagtwo"
import BagcountSlice from "../features/reducerhome/Reducerbagcount"
import Slicecolortwo from "../features/reducertwo/Reducercolortwo"
import SliceREfreshtwo from "../features/reducerhome/reducerrefreshtwo/Reducerrefreshtwo"
import Slicecolortwoo from '../features/reducertwo/Reducercolortwoo'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home:homeSlice,
    images:ImagesSlice,
    clos:ClosSlice,
    refresh:RefreshSlice,
    wishlist: WishlistSlice,
    bag:BagSlice,
    accaunt:MyaccauntSlice,
    BagtwoSlice:BagtwoSlice,
    BagcountSlice:BagcountSlice,
    Slicecolortwo:Slicecolortwo,
    SliceREfreshtwo:SliceREfreshtwo,
    Slicecolortwoo:Slicecolortwoo
  },
});
