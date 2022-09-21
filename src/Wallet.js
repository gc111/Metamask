import React, { useState } from 'react';
// import ethers from 'ethers';

const Wallet = () => {
    const [Account, setAccount] = useState(null);
    const [errormessage, setErrorMessage] = useState(null);
    const [buttonText, setButtonText] = useState('Connect Wallet');


    const walletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangeHandler(result[0]);
                })
        } else {
            setErrorMessage('install metamask')
        }
    }

    const accountChangeHandler = (newAccount) => {
        setAccount(newAccount);
        setButtonText('Connected to Wallet')
    }
    return (
        <>
            <div className='card'>
                <button onClick={walletHandler}>{buttonText}</button>
                {errormessage}
            </div>
            <div className='accountDisplay'>
                <h3>Metamask Account :{Account}</h3>
            </div>
        </>
    )
}

export default Wallet;