

function removePlaceholderText(e)
{
  if (e.target.value == "Username or Email" || e.target.value == "Password")
  {
    e.target.value = "";
  }
};

function addPlaceholderText(e) {

    e.target.value = "Password";    
}


export default removePlaceholderText;