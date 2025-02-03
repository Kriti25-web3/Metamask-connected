import React, { useState } from 'react';

const MetaMaskButton = () => {
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Connection error", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  return (
    <button className="metamask-button" onClick={connectMetaMask}>
      {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect MetaMask"}
    </button>
  );
};

export default MetaMaskButton;