import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/general.css';
import '../Style/global.css';

const Home = () => {
 const [referredPeople, setReferredPeople] = useState(0);
 const [accountBalance, setAccountBalance] = useState('10,000');
 const [referralCode, setReferralCode] = useState('');
 const [referredUsers, setReferredUsers] = useState([]);

//  useEffect(
//   axios.get('https://backends-zgvg.onrender.com/api/validateReferralCode').then()
//  )
 
 const referToFriend = () => {
    setReferredPeople(referredPeople + 1);
    setReferredUsers([...referredUsers, ]);//{ id: e-mail, username }
 };

 const calculateLoyaltyRewards = () => {
    setAccountBalance(accountBalance + referredPeople * 100);            
 };

 const validateReferralCode = async (code) => {
   try {
      //need an API that can validate the referral codes
      //this guy will be in the sign-up page when we are merging the project
      //please add your logic here just using this as example.
      const response = await fetch('https://backends-zgvg.onrender.com/api/validateReferralCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
  
      if (response.ok) {
        console.log('Referral code is valid');
        console.log(response)
      } else {
        console.error('Referral code is invalid');
      }
   } catch (error) {
      console.error(error);
   }
  };

  //main purpose here is that I want to be able to pull the userID that was referred so that it can be displayed on my dashboard
//   const handleChange = (e) => {
//    setNewUser(e.target.value);
//    };

   const handleRefer = () =>{
      setReferralCode() //code
   }

 const handleSubmit = (e) => {
    e.preventDefault();
    validateReferralCode(referralCode);
   //  referToFriend(newUser);
   //  setNewUser('');
 };


 return (
    <div>
      <div className="main">
        <span className='accountbalance'>Account Balance: ₦{accountBalance}</span>
        <span className='numberreferral'>Total Number of People Referred: {referredPeople}</span>
      </div>
      <button onClick={calculateLoyaltyRewards}>Calculate Loyalty Rewards</button>
      <button onClick={referToFriend}>Refer to a Friend</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          style={{width:'20%',height:'1rem'}}
        />
        <button type="submit" onClick={(e)=> handleRefer(e)}>Validate Referral Code</button>
      </form>
      {/* <div>
        <h3>Referred Users:</h3>
        <ul>
          {referredUsers.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div> */}
    </div>
 );
};

export default Home;
