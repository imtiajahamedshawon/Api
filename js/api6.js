

function loadUser() {
    fetch( 'https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => showUser(data.results[0]))
}

loadUser()

function showUser(user) {

    //selection
    const display = document.getElementById('display')
    const profile = document.getElementById('profile')
    const intro = document.getElementById('intro')

    //set inner text and img src on load
    profile.src = `${user.picture.large}`
    display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
    intro.innerText = `Hi, My name is`;



    // change name
    document.getElementById('name').addEventListener('mouseover', () => {
        display.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        intro.innerText = `Hi, My name is`;

    })

    // change email
    document.getElementById('email').addEventListener('mouseover', () => {
        display.innerText = `${user.email}`;
        intro.innerText = `My email address is`;

    })

    // change Date
    document.getElementById('dob').addEventListener('mouseover', () => {
        display.innerText = `${user.dob.date.slice(0,10)}`;
        intro.innerText = `My birthday is`;

    })


    // change phone
    document.getElementById('phone').addEventListener('mouseover', () => {
        display.innerText = `${user.phone}`;
        intro.innerText = `My phone number is`;

    })


    // change address
    document.getElementById('address').addEventListener('mouseover', () => {
        display.innerText = `${user.location.street.number}  ${user.location.city} , ${user.location.state} , ${user.location.country}`;
        intro.innerText = `My address is`;

    })


    // change password
    document.getElementById('password').addEventListener('mouseover', () => {
        display.innerText = `${user.login.password}`;
        intro.innerText = `My password is`;
    })

}