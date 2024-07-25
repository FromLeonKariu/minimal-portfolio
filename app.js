console.log("HELLO BROWSER!!");


let user = {
    name: 'Crystal',
    age: 30,
    email: "crystalninja.co.uk",
    location: "Berlin",
    blogs: [
        "Why is js better",
        {
            title: "object blog",
            author: "leon k",
            date: "12th jan 2020",
            excerpts: " lorem ",
            thumbnailsrc: "/src/blog1.png"
        },
        {
            title: "Bevy game dev rust game framework",
            author: "leon k",
            date: "12th jan 2020",
            excerpts: " lorem ",
            thumbnailsrc: "/src/blog2.png"
        },

        {
            title: "Game art styles for 2d games",
            author: "leon k",
            date: "12th jan 2020",
            excerpts: " lorem ",
            thumbnailsrc: "/src/blog1.png"
        },

     {
            title: "pygame vs unity vs godot vs gamemaker",
            author: "leon k",
            date: "12th jan 2020",
            excerpts: " lorem ",
            thumbnailsrc: "/src/blog1.png"
        },
    
    ],
    login() {
        console.log(this.name, "logged in!")
    },
    logout() { console.log(this.name, "logged out")},
    list() {
        console.log("BLOG ARTICLES");
        this.blogs.forEach(blog =>{
            console.log(blog.title);
        });
    },

};



// Learning the Document object model

const para = document.querySelector('h2');

para.innerText = "HELLO";
console.log(para); 



const h2_title = document.getElementById("submit-button");

h2_title.onclick = function () {
    para.innerText = "Articles";
}