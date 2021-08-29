
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => showData(data))
}
loadData()

const showData =(comment) => {
    const section = document.getElementById('comment-container')
    comment.forEach(comment => {
        console.log(comment);
        const div = document.createElement('div')
        div.innerHTML = `p>${comment.id} . ${comment.body.slice(0, 50)}</p>
        <p>Name: ${comment.name.slice(0, 10)}</p>
        <p>Email: ${comment.email}</p>
        <p>id: ${comment.id}</p>`
        
        section.appendChild(div)
    })
} 
