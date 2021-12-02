import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    onDismiss?: () => void;
}
declare const BridgeConnectModal: React.FC<Props>;
export default BridgeConnectModal;
