const showPost = document.querySelector(".showPost");
const showComment = document.querySelector(".showComment");
const showPhoto = document.querySelector(".showPhoto");
const showUser = document.querySelector(".showUser");
const showAlbums = document.querySelector(".showAlbums");

function clickhandingPost() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
        res.json(res).then((posts) => {
            let postItems = posts.slice(0, 10);

            console.log(postItems);
            for (let i = 0; i < 10; i++) {
                let postId = postItems[i].id;
                let postTitle = postItems[i].title;
                let postBody = postItems[i].body;

                showPost.innerHTML += `<div class="post">
                            <h3 id="postId">${postId}</h3>
                            <h3 id="postTitle">${postTitle}</h3>
                            <p id="postDece">${postBody}</p>
                        </div>
                        `;
            }
        })

    })
}

function clickhandingComment() {
    fetch('https://jsonplaceholder.typicode.com/comments').then((res) => {
        res.json(res).then((comments) => {
            let commentItems = comments.slice(0, 10);

            console.log(commentItems);
            for (let i = 0; i < 10; i++) {
                let commentTitle = commentItems[i].name;
                let commetEmail = commentItems[i].email;
                let commentBody = commentItems[i].body;

                showComment.innerHTML += `<div class="post">
                            <h3 id="postTitle">${commentTitle}</h3>
                            <p id="postDece">E-mail : ${commetEmail}</p>
                            <p id="postDece">comment :<br> ${commentBody}</p>
                        </div>
                        `;
            }
        })

    })
}



function clickhandingphotos() {
    fetch('https://jsonplaceholder.typicode.com/photos').then((res) => {
        res.json(res).then((photos) => {
            let photoItems = photos.slice(0, 10);

            console.log(photoItems);
            for (let i = 0; i < 10; i++) {
                let photosTitle = photoItems[i].title;
                let photosUrl = photoItems[i].thumbnailUrl;

                showPhoto.innerHTML += `<div class="photositem">
                            <img src="${photosUrl}" class="photosImg"></img>
                            <h3 class="pootoTitle">${photosTitle}</h3>
                            
                        </div>
                        `;
            }
        })

    })
}

function clickhandingUser() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        res.json(res).then((users) => {
            let userItems = users.slice(0, 10);

            console.log(userItems);
            for (let i = 0; i < 10; i++) {
                let userIdName = userItems[i].name;
                let userName = userItems[i].username;
                let userEmail = userItems[i].email;
                let userAddress = userItems[i].address;
                let userPhone = userItems[i].phone;
                let userWebsite = userItems[i].website;

                showUser.innerHTML += `<div class="userProfile">
                            <h3 id="postTitle">${userIdName}</h3>
                            <p>Username: ${userName}</p>
                            <p>Email: ${userEmail}</p>
                            <p>address: ${userAddress}</p>
                            <p>Phone: ${userPhone}</p>
                            <a href="${userWebsite}">Website: ${userWebsite}</a>
                        </div>
                        `;
            }
        })

    })
}


function clickhandingAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
        res.json(res).then((users) => {
            let albums = users.slice(0, 10);

            console.log(albums);
            for (let i = 0; i < 10; i++) {
                let albumsId = albums[i].id;
                let albumsTitle = albums[i].title;

                showAlbums.innerHTML += `<div class="albumsProfile">
                            <p class="albumsId">Albums ID: ${albumsId}</p>
                            <h3 id="albumsTitle">${albumsTitle}</h3>
                        </div>
                        `;
            }
        })

    })
}