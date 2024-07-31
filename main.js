let arrayOfUsers;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getUsers()
window.onload = function () {
    getUsers()
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfUsers

const getUsers = () => {
    fetch('https://randomuser.me/api/?results=8')
        .then(res => res.json())
        .then(users => arrayOfUsers = users.results)

}

const displayUsers = () => {
    const contacts = document.getElementById('contacts')
    arrayOfUsers.map((user, index) => {
      const li = document.createElement('li')
      const text = document.createTextNode(` Name: ${user.name.first} , ${user.name.last}, Location:  ${user.location.city}, ${user.location.state},  Email: ${user.email} `)
      const img = document.createElement('img')
      // below is how to add an image into your document from JS , in this the details of the user is inside of it but it can work in or outside of a function//
      img.src=user.picture.medium

      const div = document.createElement('div')
      div.innerText = `date of birth; ${user.dob.date} , Age: ${user.dob.age}, Gender: Age: ${user.gender}`
      
      // this below is setting the initial value for the display so it wont show in the initial part until it gets clicked on//
      div.style.display = 'none'
      const button = document.createElement('button')
      button.innerText = 'More Info'
      button.onclick = () => {
        // this if below helps to hire the text that displays once it was clicked//
          if (div.style.display === "block"){
            button.innerText = 'More Info'
            return div.style.display = 'none'
        }
        div.style.display = "block"
        button.innerText = "Hide Info"
      }

      li.appendChild(text)
      contacts.append(li)
      li.append(img)
      li.append(button)
      li.append(div)


    })
  }