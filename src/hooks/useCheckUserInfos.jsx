import React from 'react';
import useCheckUserAddress from './useCheckUserAddress';
import useCheckUserMail from './useCheckUserMail';
import useCheckUserName from './useCheckUserName';

const useCheckUserInfos = (userInfos) => {

  const [isValidUserInfos, setIsValidUserInfos] = React.useState(false)
  const isValidFirstName = useCheckUserName(userInfos.firstName)
  const isValidLastName = useCheckUserName(userInfos.lastName)
  const isValidAddress = useCheckUserAddress(userInfos.address)
  const isValidMail = useCheckUserMail(userInfos.mail)

  React.useEffect(
    () => {

      const checkUserInfos = () => {
        if (!isValidFirstName)
          return false
        if (!isValidLastName)
          return false
        if (!isValidMail)
          return false
        if (!isValidAddress)
          return false

        return true
      }

      if (userInfos)
        setIsValidUserInfos(checkUserInfos())
      //eslint-disable-next-line
    }, [userInfos]
  )
  return isValidUserInfos
};

export default useCheckUserInfos;