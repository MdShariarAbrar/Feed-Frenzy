async function loadAllPost() {
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts"
    const res = await fetch(url);
    const allPosts = await res.json();
    const posts = allPosts.posts;
    
    displayAllPosts(posts)
}



const displayAllPosts = posts => {

    const postContainer = document.getElementById("all-post-container")
    posts.forEach(post => {

       postCard = document.createElement('div');
       postCard.innerHTML = `
       <div class="rounded-3xl bg-[#F3F3F5] p-4 lg:p-10 flex gap-6 flex-col lg:flex-row mb-6">

       <div>
         <div class="avatar ${post.isActive ? 'online' : 'offline'}">
           <div class="w-24 rounded-full">
             <img src=${post.image} />
           </div>
         </div>
       </div>

       <div class="flex-1">
         <div class="text-[#12132DCC] text-base font-medium">
           <span># ${post.category}</span> 
           <span>Author: ${post.author.name}</span>
         </div>
         <h2 class="text-[#12132D0] text-xl font-bold mb-6">${post.title}</h2>
         <p class="text-[#12132D99] text-base ">${post.description}</p>
         <hr class="border border-dashed my-6 border-[#12132D99]">
         <div class="flex justify-between items-center w-full">
           <div class="text-[#12132D99] flex gap-4">
             <span><i class="fa-regular fa-message"></i> ${post.comment_count}</span>
             <span><i class="fa-regular fa-eye"></i> ${post.view_count}</span>
             <span><i class="fa-regular fa-clock"></i> ${post.posted_time} min</span>
           </div>
           <div onclick="markAsRead(${post.id})" class="bg-[#10B981] rounded-full w-7 h-7 text-center text-white">
             <i class="fa-solid fa-envelope-open"></i>
           </div>
         </div>
       </div>
     </div>
       `
        postContainer.appendChild(postCard);
        
    });

    
}

const markAsRead = (id) => {
    const markContainer = document.getElementById('mark-container');
    console.log(id);
    fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
        .then(res => res.json())
        .then(data => {
            
            const allPost = data.posts;
            const clickedObj = allPost.find(post => post.id === id);
            console.log(clickedObj);

            displayMarkTitle(clickedObj)


        })

    const displayMarkTitle = obj => {
        const markCard = document.createElement('div');
        markCard.innerHTML = `
        <div class="bg-white rounded-2xl p-3 flex justify-between flex-col lg:flex-row mb-6">
        <p class="text-[#12132D] text-base font-semibold">${obj.title}</p>
        <p class="text-[#12132D99] text-base lg:flex lg:gap-3 justify-between items-center"><i class="fa-regular fa-eye"></i> <span>${obj.view_count}</span></p>
      </div>
        `
        markContainer.appendChild(markCard);

    }
        

    
    
    

}

loadAllPost()