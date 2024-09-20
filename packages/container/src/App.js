import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {StylesProvidver, createGenerateClassName} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvidver>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvidver>
        </BrowserRouter>
    )
}