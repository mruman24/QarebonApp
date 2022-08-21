
import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import creatSagaMiddleware from 'redux-saga';
import rootReducer from './Src/Redux/Reducers';
import rootSaga from './Src/Redux/Sagas';
// import { types } from './Src/Redux/Types/getMessage';
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './Src/setup';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
}
const sagaMiddleware = creatSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// store.dispatch({ type: types.INIT_SOCKET_SERVICE });
const persistedStore = persistStore(store);
const middlewareList = [sagaMiddleware];

const toastConfig = {

  successToast: ({ text1, text2 }) => (
    <View style={{
      width: '90%', alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#008319',
      borderRadius: 8
    }}>
      <View style={{ width: '80%', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: "white" }}>{text1}</Text>
        <Text style={{ fontSize: 13, fontWeight: '500', color: "white", marginTop: 5 }}>{text2}</Text>
      </View>
    </View>
  ),
  errorToast: ({ text1, text2 }) => (
    <View style={{
       width: '90%', alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,0,0,0.95)',
      borderRadius: 8
    }}>
      <View style={{ width: '80%', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>
        <Text style={{ fontSize: 15, fontWeight: '700', color: "white" }}>{text1}</Text>
        <Text style={{ fontSize: 13, fontWeight: '500', color: "white", marginTop: 5 }}>{text2}</Text>
      </View>
    </View>
  )
}

const App = () => {
  return (
    <>
      <Provider store={store}  >
        <PersistGate persistor={persistedStore}>
          <Root />
          <Toast config={toastConfig} />
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
sagaMiddleware.run(rootSaga);