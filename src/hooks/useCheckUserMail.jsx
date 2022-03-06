const useCheckUserMail = (mail) => {

  const checkMail = () => {
    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
    if (mail && mail !== "" && mail.match(mailRegex) !== null && mail.length > 5)
      return true
    else
      return false
  }

  return checkMail()
};

export default useCheckUserMail;