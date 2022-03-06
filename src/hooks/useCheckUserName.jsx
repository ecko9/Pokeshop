const useCheckUserName = (name) => {

  const checkName = () => {
    const nameRegex = /^[A-Za-zàâéèëêïîôùüçœ'’-]+$/
    if (name && name !== "" && name.match(nameRegex) !== null && name.length >= 2)
      return true
    else
      return false
  }

  return checkName()
};

export default useCheckUserName;