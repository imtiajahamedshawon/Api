
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
        div.innerHTML = `
        <p> comment : ${comment.email} </p>
         <p> name : ${comment. name} </p>
         <p> id: ${comment.id} </p>`
        section.appendChild(div)
    })
} 
