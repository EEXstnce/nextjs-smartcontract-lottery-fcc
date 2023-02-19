import {ConnectButton} from "web3uikit"

export default function Header() {
    return (
    <div>
        Decentralized Raffle
        <ConnectButton moralisAuth={false} />
        {/**This ConnectButton does everything our ManualHeader does */}
    </div>)
}