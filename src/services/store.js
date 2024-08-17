import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
    //Conditional Redux DevTools: This ensures that production build remains optimized without unnecessary development tools, enhancing performance
    devTools: process.env.NODE_ENV !== 'production',
})