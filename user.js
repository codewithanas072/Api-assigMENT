const BaseUrl = "https://fakestoreapi.noksha.dev/api";
var users = document.getElementById("users")

async function apicall() {
    await fetch(`${BaseUrl}/users`)

        .then(async function (response) {
            const db = await response.json()
            console.log(db)
            for (var value of db.data) {
                console.log(value)
                users.innerHTML += `
                <div class='col col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div class="card" >
                        <div class="card-body">
                           
                        <p class="card-text">${value._id}</p>
                            <p class="card-text">${value.name}</p>
                            <p class="card-text">${value.username}</p>
                            <p class="card-text">${value.email}</p>
                            <p class="card-text">${value.address.city}</p>
                            <p class="card-text">${value.phone}</p>
                            <p class="card-text">${value.address.zipcode}</p>

                            
                        </div>
                    </div>
                </div>
                
                `
            }



        })
        .catch(function (e) {
            console.log(e)

        })
}

apicall()