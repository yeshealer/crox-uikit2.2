import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AssetSelectModal: React.FC<Props>;
export default AssetSelectModal;
