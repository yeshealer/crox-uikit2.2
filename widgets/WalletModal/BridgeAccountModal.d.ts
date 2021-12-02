import React from "react";
interface Props {
    connectModal: () => void;
    account: string;
    logout: () => void;
    onDismiss?: () => void;
}
declare const BridgeAccountModal: React.FC<Props>;
export default BridgeAccountModal;
