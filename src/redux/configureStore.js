import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { mainReducer, epics } from './mainReducer';

import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

const logger = createLogger();

const getCookieByName = (name) => {
    let namedCookie = document.cookie.split(';').find((coo)=> coo.split('=')[0].trim()==name)
    if(namedCookie) return namedCookie.split('=')[1];
    return undefined;
  }

const getInitialState = () => {
    
    // let token = getCookieByName('token');

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzc3dpZCI6NjY1NjIzMiwidXNlcl9lbWFpbCI6InN0YXJzZWxsZXJzd29ybGRAZ214LmRlIiwidXNlcl9uYW1lIjoiTWFtYSBNaXJhY29saSIsIlN0YXR1cyI6IkVpbmthdWZQbHVzIiwic3N3X3ZlcnNpb24iOiIiLCJpVmVyYnJhdWNoc21hdCI6Ik5ldyIsImxhbmd1YWdlIjoiZW4iLCJwZXJtcyI6WyJzc3dfY3VzdG9tZXJfcGx1cyIsInNzd19jdXN0b21lciJdLCJleHAiOjE1NzMyMjY1MDksImp0aSI6IjJlNjBkYzU4LTgyZWItNGUyYS05ZjE4LTM4YjhlZDc1NjY3YiIsImlhdCI6MTU3MDYzNDUwOH0.kXRt4UifPP539gsA5EYsTjcDzOk1ReqJo1kIQFeQiqcJDYJI5Ul1Q9qFOgszqLpigNgtQ4i9mWaXm-Qyc0QWbYpRj2TsGQy5QPD1xucUhFWXdAG2UsiBIOO8dhSSLFBxeTVWljU_Oj7pnQsqyGwpd79n6R1lQt2pTJxZ5RWH1kWhdEGPvH5RYyBMlp5XJUr2YD_r-ldEVyYAFeJFOJnsKZvrWouaaBTafAGC2uyK00AnucT1qsliKUkugMTpETVcqbnx5kgzKoo2zo7ZFDbXXg9ooDWtPcb7WmaYr74scCot3T-Q4EVtDHGf4vQ2iGdQALbV91ARABJ3dB6hFI4ejjAQiAXerOQ5owzcMZsLhNMxA-Df-BCfNAORA9GC-xhjYc1NiX6bxn80tBr3AbaHqSupyKepEy0t3aQnS9BhYyxnnBYxeMXKgD425VAZoZj1TX5wi6YArpFZUlxCWgZN78oYSyeqG8e2COa2jFQSNclL-gsCLa9WxkTakdRZxYanFUPiJdAsuCfds78l8AlWqLxqElYa0cywQ2maYNFYKy_zY7fDV_uxVez4oywo9YfhnhPQ5dkCRTaTS55bqShiYQqrnjiu3xM0tVckowLMZeluql30apLwFz1f7tLCDeTzNKb8afN7MIu2VG5BIUi1O3r4ginKPoR3cbc8t-SckZk'
    if(token) {
        return {
            cusotmerForm: {
                loadSpinner: true
            }
        }
    } else {
        window.location.replace("http://www.starsellersworld.com");
    }
}

const initialState = getInitialState();

function configureStore() {
  const store = createStore(
    mainReducer,
    initialState,
        applyMiddleware(
            epicMiddleware,
            logger
        )
  );

  epicMiddleware.run(epics);

  return store;
}

export const store = configureStore();
