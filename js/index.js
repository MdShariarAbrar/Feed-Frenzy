async function loadAllPost() {
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts"
    const res = await fetch(url);
    const allPosts = await res.json();
    const posts = allPosts.posts;
    
    displayAllPosts(posts)
}


const displayAllPosts = posts => {
    posts.array.forEach(post => {

       postCard = document.createElement('div');
       postCard.innerHTML = `
       <div class="rounded-3xl bg-[#F3F3F5] p-4 lg:p-10 flex gap-6 flex-col lg:flex-row">

       <div>
         <div class="avatar online">
           <div class="w-24 rounded-full">
             <img src=${post.image} />
           </div>
         </div>
       </div>

       <div>
         <div class="text-[#12132DCC] text-base font-medium">
           <span># Music</span> 
           <span>Author: Awlad Hossain</span>
         </div>
         <h2 class="text-[#12132D0] text-xl font-bold mb-6">10 Kids Unaware of Their Halloween Costume</h2>
         <p class="text-[#12132D99] text-base ">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
         <hr class="border border-dashed my-6 border-[#12132D99]">
         <div class="flex justify-between items-center ">
           <div class="text-[#12132D99] flex gap-4">
             <span><i class="fa-regular fa-message"></i> 560</span>
             <span><i class="fa-regular fa-eye"></i> 1568</span>
             <span><i class="fa-regular fa-clock"></i> 5 min</span>
           </div>
           <div class="bg-[#10B981] rounded-full w-7 h-7 text-center text-white">
             <i class="fa-solid fa-envelope-open"></i>
           </div>
         </div>
       </div>
     </div>
       `

    });
}

loadAllPost();