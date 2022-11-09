import React, { useEffect, useState } from "react";
import ContainerBlock from "../components/ContainerBlock";

export default function SmartContract() {

  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);
  const [isMetamask, setMetamask] = useState(false);
  
  const fetchMetamaskAddressData = () => {
    setAddress("-----------");
    setBalance("-----------");

    window.ethereum.request({method: 'eth_requestAccounts'});

    window.ethereum.request({method: 'eth_requestAccounts'})
    .then(currentAddress=> {
      setAddress(currentAddress[0]);
      //console.log("Current Address: ", currentAddress[0]);
      console.log("length ", currentAddress[0].length);
      if (currentAddress[0].length) {
        setMetamask(true);
      }

      window.ethereum.request({method: 'eth_getBalance', params: [currentAddress[0], 'latest']})
      .then(currentAddressBalance=> {
        setBalance(parseInt(currentAddressBalance, 16) / Math.pow(10, 18));
        //console.log("Current Address Balance: ", parseInt(currentAddressBalance, 16) / Math.pow(10, 18));
      })
    })
  }

  useEffect(() => {
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
  }, [])


  return (
    <ContainerBlock title="Project - Smart Contract">
      {isMetamask &&
        <div className="text-center">
        <h2>Metamask Address: {address}</h2>
        <h2>Address BNB Balance : {balance} </h2>
        <h2>Address TOKEN Balance : {balance} </h2>
        <br/>
        <button className="bg-red-500 text-white font-bold px-4 rounded my-20" onClick={fetchMetamaskAddressData}>Update Details</button>
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
