// with patika.dev

const posts = [
    {name : "Post 1", author: "User 1"},
    {name : "Post 2", author: "User 2"},
    {name : "Post 3", author: "User 3"}
];
const listposts = () => {
posts.map(post => {
    console.log(post.name);
})
};
const addPost = (newPost,callback) => {
    posts.push(newPost);
    callback();
};

listposts();

addPost({name:"Post 4", author: "User 4"},listposts);
