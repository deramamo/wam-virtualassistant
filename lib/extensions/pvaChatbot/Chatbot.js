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
import * as React from "react";
import { useBoolean, useId } from '@uifabric/react-hooks';
import * as ReactWebChat from 'botframework-webchat';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
var dialogContentProps = {
    type: DialogType.normal,
    title: 'Virtual Assistant',
    closeButtonAriaLabel: 'Close'
};
export var PVAChatbotDialog = function () {
    var _a;
    var _b = useBoolean(true), hideDialog = _b[0], toggleHideDialog = _b[1].toggle;
    var labelId = useId('dialogLabel');
    var subTextId = useId('subTextLabel');
    var modalProps = React.useMemo(function () { return ({
        isBlocking: false,
    }); }, [labelId, subTextId]);
    var BOT_ID = "dfddb361-9592-4699-bd6a-fc90287b8dc9";
    var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;
    var store = ReactWebChat.createStore({}, function (_a) { return function (next) { return function (action) {
        return next(action);
    }; }; });
    fetch(theURL)
        .then(function (response) { return response.json(); })
        .then(function (conversationInfo) {
        document.getElementById("loading-spinner").style.display = 'none';
        document.getElementById("webchat").style.minHeight = '50vh';
        ReactWebChat.renderWebChat({
            directLine: ReactWebChat.createDirectLine({
                token: conversationInfo.token,
            }),
            store: store,
        }, document.getElementById('webchat'));
    })
        .catch(function (err) { return console.error("An error occurred: " + err); });
    return (React.createElement(React.Fragment, null,
        React.createElement(DefaultButton, { secondaryText: "Talk to a Virtual Assistant", onClick: toggleHideDialog, text: "Talk to a Virtual Assistant" }),
        React.createElement(Dialog, { styles: {
                main: { selectors: (_a = {}, _a['@media (min-width: 480px)'] = { width: 450, minWidth: 450, maxWidth: '1000px' }, _a) }
            }, hidden: hideDialog, onDismiss: toggleHideDialog, dialogContentProps: dialogContentProps, modalProps: modalProps },
            React.createElement("div", { id: "chatContainer", style: { display: "flex", flexDirection: "column", alignItems: "center" } },
                React.createElement("div", { id: "webchat", role: "main", style: { width: "100%", height: "0rem" } }),
                React.createElement(Spinner, { id: "loading-spinner", label: "Loading...", style: { paddingTop: "1rem", paddingBottom: "1rem" } })))));
};
var Chatbot = /** @class */ (function (_super) {
    __extends(Chatbot, _super);
    function Chatbot(props) {
        return _super.call(this, props) || this;
    }
    Chatbot.prototype.render = function () {
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "1rem" } },
            React.createElement(PVAChatbotDialog, null)));
    };
    return Chatbot;
}(React.Component));
export default Chatbot;
//# sourceMappingURL=Chatbot.js.map