import {ConnectWallet, useTransferToken, isContractDeployed, ThirdwebSDK, Transaction} from "@thirdweb-dev/react";
import { LocalWallet, SmartWallet } from "@thirdweb-dev/wallets";
import "./styles/Home.css";
import account1 from "./mock/account1.json";
// import account1 from "./mock/account2.json";
import {ACCOUNT_ABI, ACCOUNT_FACTORY_ABI, ERC20_ABI} from "./mock/constant";
import {useState} from "react";
import {ethers} from "ethers";
const username = "test";
const password = "test";

export function createSmartWallet(): SmartWallet {
    const smartWallet = new SmartWallet({
        chain: "goerli",
        // chain: "binance-testnet",
        factoryAddress: "0xE2f4eDf6135d48F979F58f28B48B8eD03fF82FbF",
        // factoryAddress: "0x0e5476a5AfD15c1e35ca4d97D220cb9f40617609",
        gasless: true,
        clientId: process.env.REACT_APP_TEMPLATE_CLIENT_ID || "",
        // secretKey: process.env.REACT_APP_ADMIN_WALLET_SECRET_KEY || "",
    });
    return smartWallet;
}

export default function Home() {
    const [personalWallet, setPersonalWallet] = useState(new LocalWallet());
    const [smartWallet, setSmartWallet] = useState(createSmartWallet());

    // state
    const [clientAddress, setClientAddress] = useState("");
    const [smartWalletAddress, setSmartWalletAddress] = useState("");
    const [isDeployed, setIsDeployed] = useState(false);

    const sdk = new ThirdwebSDK("goerli", {
        clientId: process.env.REACT_APP_TEMPLATE_CLIENT_ID || "",
    });
    const generateWallet = async () => {
        await personalWallet.generate();
        // encrypt it
        const encryptedWallet = await personalWallet.export({
            strategy: "encryptedJson",
            password: password,
        });

        console.log({
            name: username,
            encryptedWallet,
        })
        console.log(await personalWallet.getAddress());
        await smartWallet.connect({
            personalWallet,
        });
        console.log(await smartWallet.getAddress());
    }

    const loginWallet = async () => {

        // await personalWallet.deleteSaved();
        // console.log(await personalWallet.getAddress());
        await personalWallet.import({
            encryptedJson: account1.encryptedWallet,
            password: password,
        });
        await smartWallet.connect({
            personalWallet,
        });
        const smartWalletAddress = await smartWallet.getAddress();
        const isDeployed = await isContractDeployed(smartWalletAddress, sdk.getProvider());
        setSmartWalletAddress(smartWalletAddress);
        setIsDeployed(isDeployed);
        setClientAddress(await personalWallet.getAddress());
        setPersonalWallet(personalWallet);
        setSmartWallet(smartWallet);
        console.log("done set")
    }


    const createAccount = async () => {
        console.log(await personalWallet.getSigner())
        console.log(await smartWallet.getAddress())
        const localWalletAddress = await personalWallet.getAddress();
        const result = await smartWallet.execute(
            await Transaction.fromContractInfo({
                contractAddress: "0xE2f4eDf6135d48F979F58f28B48B8eD03fF82FbF",
                contractAbi: ACCOUNT_FACTORY_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "createAccount",
                args: [localWalletAddress, ethers.constants.HashZero],
                storage: sdk.storage,
            })
        )
        console.log('result:', result);
    }


    const transferToken = async () => {
        console.log(await personalWallet.getSigner())
        console.log(await smartWallet.getAddress())
        const result = await smartWallet.executeBatch([
            await Transaction.fromContractInfo({
                contractAddress: "0x0fC04873a7B51FB4a16EE54Fb3447DbF3C944A3d",
                // contractAddress: "0x2ef8aa35647530EE276fCBCE2E639F86D8B7F1EB",
                contractAbi: ERC20_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "transfer",
                args: ["0xad2ada4B2aB6B09AC980d47a314C54e9782f1D0C", "1000000000000000000"],
                storage: sdk.storage,
            }),
            await Transaction.fromContractInfo({
                contractAddress: "0x0fC04873a7B51FB4a16EE54Fb3447DbF3C944A3d",
                // contractAddress: "0x2ef8aa35647530EE276fCBCE2E639F86D8B7F1EB",
                contractAbi: ERC20_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "transfer",
                args: ["0xeaBcd21B75349c59a4177E10ed17FBf2955fE697", "1000000000000000"],
                storage: sdk.storage,
            })
        ])
        console.log('result:', result);
    }


    const recoverToken = async () => {
        const result = await smartWallet.executeBatch([
            await Transaction.fromContractInfo({
                contractAddress: "0x0fC04873a7B51FB4a16EE54Fb3447DbF3C944A3d",
                contractAbi: ERC20_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "transfer",
                args: ["0xad2ada4B2aB6B09AC980d47a314C54e9782f1D0C", "1000000000000000000"],
                storage: sdk.storage,
            }),
            await Transaction.fromContractInfo({
                contractAddress: "0x0fC04873a7B51FB4a16EE54Fb3447DbF3C944A3d",
                contractAbi: ERC20_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "transfer",
                args: ["0xeaBcd21B75349c59a4177E10ed17FBf2955fE697", "1000000000000000"],
                storage: sdk.storage,
            })
        ])
        console.log('result:', result);
    }

    const setAdminForBic = async () => {

        const result = await smartWallet.execute(
            await Transaction.fromContractInfo({
                contractAddress: '0xE2f4eDf6135d48F979F58f28B48B8eD03fF82FbF',
                contractAbi: ACCOUNT_ABI,
                provider: sdk.getProvider(),
                signer: await personalWallet.getSigner(),
                method: "setAdmin",
                args: ["0xeaBcd21B75349c59a4177E10ed17FBf2955fE697", true],
                storage: sdk.storage,
            })
        )
        console.log('result:', result);
    }

    const test = () => {
        console.log(personalWallet.ethersWallet?.privateKey);
    }
  return (
    <main className="main">
      <div className="container">
        <div className="card">
            <div className="card-body">
                {clientAddress === "" ?
                    <div>
                        <h3 className="card-title">Login</h3>
                        <input type="text" className="form-control" placeholder="Username" />
                        <input type="password" className="form-control" placeholder="Password" />
                        <button className="btn btn-primary" onClick={() => generateWallet()}>Sign up</button>
                        <button className="btn btn-primary" onClick={() => loginWallet()}>Login</button>
                    </div> :
                    <div>
                        <h5 className="card-title">Account info</h5>
                        <h5>Client address: {clientAddress}</h5>
                        <h5>Smart wallet address: {smartWalletAddress}</h5>
                        <h5>Is deployed: {isDeployed.toString()}</h5>
                        {!isDeployed && <button className="btn btn-primary" onClick={() => createAccount()}>Create account</button>}
                    </div>
                }
            </div>
        </div>
          <div className="card">
                <div className="card-body">
                    <h5 className="card-title">NFT collection</h5>
                    <button className="btn btn-primary" onClick={() => test()}>Claim</button>
                </div>
          </div>
      </div>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <button className="btn btn-primary" onClick={() => transferToken()}>Transfer token (Normal mode)</button>
                    <button className="btn btn-primary" onClick={() => setAdminForBic()}>Transfer token (Recover mode)</button>
                </div>
            </div>
        </div>
    </main>
  );
}
