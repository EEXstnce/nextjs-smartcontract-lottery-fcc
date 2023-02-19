import {useEffect} from "react"
import {useMoralis } from "react-moralis"

export default function ManualHeader(){

    const {enableWeb3, isWeb3Enabled, account, Moralis, deactivateWeb3, isWeb3EnableLoading } = 
        useMoralis()
    
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined"){
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
        console.log("Hi")
        console.log(isWeb3Enabled)
    },[isWeb3Enabled])
    // no dependency array: run any time something re-renders
    // CAREFUL, b/c we can get circular renders
    // blank dependency array, run once on load
    // dependencies in the array, run anytime there is a change

    useEffect (() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
    }, [])


    return(<div>
        {account ? (
            <div>
                Connected to {account.slice(0,6)}...{account.slice(account.length - 4)}
            </div>
        ) : (
            <button
                onClick={async () => {
                    await enableWeb3()
                    if (typeof window !== "undefined"){
                        window.localStorage.setItem("connected", "injected")
                    }
                }}
                disabled={isWeb3EnableLoading}
            >
                Connect
            </button>
            )}
        
    </div>)
}

// First we learn the hard way
// Then the easy way