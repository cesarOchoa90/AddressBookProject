let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getUsers()
window.onload = function () {
    getUsers()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfUsers

const getUsers = () => {
    fetch('https://randomuser.me/api/?results=5000')
    .then(res => res.json())
    .then(users => arrayOfUsers = users.results)

}

const displayUsers = () => {
    const contacts = document.getElementById('contacts')
    arrayOfUsers.map((user, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${index}, Title: ${user.name.first} , ${user.name.last}, Location:  ${user.location.street.city}`)
      li.appendChild(text)
      contacts.append(li)
    })
  }
