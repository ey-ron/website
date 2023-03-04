import React, { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Web3 from 'web3';

export default function SmartContract() {

  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [isMetamask, setMetamask] = useState(false);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenBalance, setTokenBalance] = useState('');
  
  const contract_address = "0x2492D354AE9472D3cbE240a3952d2fd97084B565";
  const contract_abi = require("../public/Token.json");

  const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s3.binance.org:8545'));
  const smartcontract = new web3.eth.Contract(contract_abi.abi, contract_address);
  
  const fetchMetamaskAddressData = () => {
    setAddress("-----------");
    setBalance("-----------");

    try {
      window.ethereum.request({method: 'eth_requestAccounts'});
      getContractDetails();

      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(currentAddress=> {
        setAddress(currentAddress[0]);
        //console.log("Current Address: ", currentAddress[0]);
        //console.log("length ", currentAddress[0].length);
        if (currentAddress[0].length) {
          setMetamask(true);
        }

        window.ethereum.request({method: 'eth_getBalance', params: [currentAddress[0], 'latest']})
        .then(currentAddressBalance=> {
          setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18));
          //console.log("Current Address Balance: ", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));
        })
      })
    } catch(err) {
      alert("Metamask is not supported.");
    }
  }

  useEffect(() => {
    try {
      if (typeof window.ethereum.isMetaMask) {
        fetchMetamaskAddressData();

        window.ethereum.on('chainChanged', () => {
          console.log("Chain Changed");
          window.location.reload();
        })

        window.ethereum.on('accountsChanged', () => {
          console.log("Account Changed");
          setMetamask(false);
          fetchMetamaskAddressData();
        })

      } else {
        alert("Please install Metamask");
      }
    } catch(err) {
      alert("Browser does not support Metamask");
    }
  }, [])

  async function getContractDetails() {
    console.log("getContractDetails");
    setTokenBalance(0);

    let currentAdd = await window.ethereum.request({method: 'eth_requestAccounts'});
    console.log("currentAdd", currentAdd[0]);

    const token = await smartcontract.methods.name().call();
    setTokenName(token);
    const symbol = await smartcontract.methods.symbol().call();
    setTokenSymbol(symbol);
    try {
      if (currentAdd) {
        let token_balance = await smartcontract.methods.balanceOf(currentAdd[0]).call();
        token_balance = web3.utils.fromWei(token_balance, 'ether');
        setTokenBalance(token_balance);
      }
    } catch(err) {
      console.log("error: ", err)
    }
  }

  return (
    <ContainerBlock title="Project - Smart Contract">
      {isMetamask &&
          <div className="text-center">
          <h2>Metamask Address: {address}</h2>
          <h2>Address BNB Balance : {balance} </h2>
          <h2>Token Name : {tokenName} </h2>
          <h2>Token Symbol : {tokenSymbol} </h2>
          <h2>Token Balance : {tokenBalance} </h2>
          <br/>
          <button className="bg-red-500 text-white font-bold px-4 rounded my-20" onClick={fetchMetamaskAddressData}>Refresh</button>
          <br/>
        </div>}

      {!isMetamask &&
        <div className="text-center">
          <button className="text-3xl bg-red-500 text-white font-bold -mt-20 px-4 rounded my-20" onClick={fetchMetamaskAddressData}>Login to Metamask</button> 
        </div>
      }
    </ContainerBlock>
  );
}
