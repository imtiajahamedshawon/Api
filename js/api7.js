// selecting element
const inputField = document.getElementById('inputField');

document.getElementById('btn').addEventListener('click', () => {
    const dynamicApi = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputField.value}`
    inputField.value = ''
    fetch(dynamicApi)
        .then(res => res.json())
        .then(data => showData(data.teams))

})


function showData(teamArray) {
    // console.log(teamArray);
    const clubs = document.getElementById('teams')
    for (const team of teamArray) {
        // console.log(team);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card my-3" style="width: 14rem; height:450px">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${team.strTeam}</h5>
            <p class="card-text">${team.strCountry}</p>
            <button onclick='showDetails(${team.idTeam})' class="btn btn-primary">Details</button>
        </div>
        </div>`
        clubs.appendChild(div)

    }
}

function showDetails(teamId) {
    // console.log(teamId);
    const dynamicTeamApi = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    fetch(dynamicTeamApi)
        .then(res => res.json())
        .then(data => {

            var team = data.teams[0];
            var description;
            if (team.strDescriptionEN != null) {
                description = team.strDescriptionEN.slice(0, 100)
            } else {
                description = 'Mohammedan Sporting Club Limited Dhaka, founded in 1936 at Dhaka, is one of the oldest and one of th'
            }
            console.log(team);
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card my-3" style="width: 100%; height:100%">
                <img style="width:100px" src="${team.strTeamBadge}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">Name: ${team.strTeam}</h5>
                <p class="card-text">Country: ${team.strCountry}</p>
                <p class="card-text">Stadium: ${team.strStadium}</p>
                <p class="card-text">Stadium: ${description}</p>
            </div>
            </div>`

            const showDetail = document.getElementById('show-detail')
            showDetail.innerHTML = ''
            showDetail.appendChild(div)






        })
}