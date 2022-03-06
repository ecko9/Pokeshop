const useCheckUserAddress = (address) => {

  const checkAddress = () => {
    const addressRegex = /^[A-Z0-9a-zàâéèëêïîôùüçœ'’, -]+$/
    if (address && address !== "" && address.match(addressRegex) !== null && address.length > 5)
      return true
    else
      return false
  }

  return checkAddress()
};

export default useCheckUserAddress;