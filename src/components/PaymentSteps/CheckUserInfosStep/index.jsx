import useCheckUserAddress from 'hooks/useCheckUserAddress';
import useCheckUserMail from 'hooks/useCheckUserMail';
import useCheckUserName from 'hooks/useCheckUserName';
import React from 'react';

const CheckUserInfosStep = ({ userInfos, setUserInfos }) => {

  const [userFirstName, setUserFirstName] = React.useState("")
  const [userLastName, setUserLastName] = React.useState("")
  const [userAddress, setUserAddress] = React.useState("")
  const [userMail, setUserMail] = React.useState("")
  const isValidFirstName = useCheckUserName(userFirstName)
  const isValidLastName = useCheckUserName(userLastName)
  const isValidAddress = useCheckUserAddress(userAddress)
  const isValidMail = useCheckUserMail(userMail)

  React.useEffect(
    () => {
      if (userInfos) {
        if (userInfos.firstName && userInfos.firstName !== "")
          setUserFirstName(userInfos.firstName)
        if (userInfos.lastName && userInfos.lastName !== "")
          setUserLastName(userInfos.lastName)
        if (userInfos.mail && userInfos.mail !== "")
          setUserMail(userInfos.mail)
        if (userInfos.address && userInfos.address !== "")
          setUserAddress(userInfos.address)
      }
      //eslint-disable-next-line
    }, []
  )

  React.useEffect(
    () => {
      if (userFirstName !== null && userFirstName !== "" && userFirstName !== userInfos.firstName)
        setUserInfos({ firstName: userFirstName, lastName: userInfos.lastName, mail: userInfos.mail, address: userInfos.address })

      if (userLastName !== null && userLastName !== "" && userLastName !== userInfos.lastName)
        setUserInfos({ firstName: userInfos.firstName, lastName: userLastName, mail: userInfos.mail, address: userInfos.address })

      if (userMail !== null && userMail !== "" && userMail !== userInfos.mail)
        setUserInfos({ firstName: userInfos.firstName, lastName: userInfos.lastName, mail: userMail, address: userInfos.address })

      if (userAddress !== null && userAddress !== "" && userAddress !== userInfos.address)
        setUserInfos({ firstName: userInfos.firstName, lastName: userInfos.lastName, mail: userInfos.mail, address: userAddress })

      //eslint-disable-next-line
    }, [userFirstName, userLastName, userAddress, userMail]
  )

  return (
    <div className='CheckUserInfosStep'>

      <div className='username'>
        <div className='firstname'>
          <span>Prénom:</span>
          <input
            className={(userFirstName === "" || isValidFirstName) ? 'valid' : "not-valid"}
            name="firstname"
            type="text"
            value={userFirstName}
            onChange={e => setUserFirstName(e.target.value)}
          />
        </div>
        <div className='lastname'>
          <span>Nom:</span>
          <input
            className={(userLastName === "" || isValidLastName) ? 'valid' : "not-valid"}
            name="lastname"
            type="text"
            value={userLastName}
            onChange={e => setUserLastName(e.target.value)}
          />
        </div>
      </div>

      <div className='mail'>
        <span>Mail:</span>
        <input
          className={(userMail === "" || isValidMail) ? 'valid' : "not-valid"}
          name="mail"
          type="text"
          value={userMail}
          onChange={e => setUserMail(e.target.value)}
        />
      </div>

      <div className='address'>
        <span>Adresse:</span>
        <input
          className={(userAddress === "" || isValidAddress) ? 'valid' : "not-valid"}
          name="address"
          type="text"
          value={userAddress}
          onChange={e => setUserAddress(e.target.value)}
        />
      </div>

    </div>
  );
};

export default CheckUserInfosStep;