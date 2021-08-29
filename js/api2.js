
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => showData(data))
}
const showData =(comment) => {
    const section = document.getElementById('comment-container')
    comment.forEach(comment => {
        console.log(comment);
        const div = document.createElement('div')
        div.innerHTML = `comment : ${comment.email}  name : ${comment. name} id:
        ${comment.id}`
        
        section.appendChild(div)
    })
} 
