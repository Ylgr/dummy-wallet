import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
          <div className="card">
                <div className="card-body">
                    <h5 className="card-title">NFt collection</h5>
                    <button className="btn btn-primary">Claim</button>
                </div>
          </div>
      </div>
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Admin</h5>
                    <button className="btn btn-primary">Transfer</button>
                </div>
            </div>
        </div>
    </main>
  );
}
