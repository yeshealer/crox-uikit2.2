import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
    onPresentBridgeAccountModal: () => void;
    onPresentAssetSelectModal: () => void;
    onPresentBridgeConnectModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
