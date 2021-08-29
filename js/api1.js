const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => console.log(data))
}
document.getElementById('btn').addEventListener('click', loadData)