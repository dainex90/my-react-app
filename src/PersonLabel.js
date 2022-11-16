import persons from './index';

function PersonLabel()
{
    const personLabel = document.getElementById("personlabel");

    function displayPeople()
    {
        persons.map(person => {
            personLabel.innerHTML = person;
        });
    }
    
    return (
    <>
        <br></br>
        <br></br>
        <br></br>
        <label id="personlabel">
            {displayPeople()}
        </label>
    </>
    ); 
}

export default PersonLabel;