var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'PvaChatbotApplicationCustomizerStrings';
import Chatbot from "./Chatbot";
var LOG_SOURCE = 'PvaChatbotApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var PvaChatbotApplicationCustomizer = /** @class */ (function (_super) {
    __extends(PvaChatbotApplicationCustomizer, _super);
    function PvaChatbotApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PvaChatbotApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized ".concat(strings.Title));
        // Wait for the placeholders to be created (or handle them being changed) and then
        // render.
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
        return Promise.resolve();
    };
    PvaChatbotApplicationCustomizer.prototype._renderPlaceHolders = function () {
        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
            this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom, { onDispose: this._onDispose });
            // The extension should not assume that the expected placeholder is available.
            if (!this._bottomPlaceholder) {
                console.error("The expected placeholder (Bottom) was not found.");
                return;
            }
            var elem = React.createElement(Chatbot);
            ReactDOM.render(elem, this._bottomPlaceholder.domElement);
        }
    };
    PvaChatbotApplicationCustomizer.prototype._onDispose = function () {
    };
    __decorate([
        override
    ], PvaChatbotApplicationCustomizer.prototype, "onInit", null);
    return PvaChatbotApplicationCustomizer;
}(BaseApplicationCustomizer));
export default PvaChatbotApplicationCustomizer;
//# sourceMappingURL=PvaChatbotApplicationCustomizer.js.map