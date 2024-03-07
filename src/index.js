// import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

// import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

import { store } from "./redux/store";

const rootElem = document.getElementById("root");

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);

    root.render(
        <Provider store={store}>
            <ConfigProvider>
                <AdaptivityProvider>
                    <AppRoot>
                        <App />
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </Provider>
    );
}
