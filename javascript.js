// The page will have a linked JavaScript file for the blog posts
// section. Create an array to hold your posts (at least 2 posts).
// Each item in the array must be an object that contains at a
// minimum the following information: Title, Copy, Date.
// Use JavaScript to add each post to the DOM.
// let blogArray = [];
// const blogOne = {
// 	Title: "Starting Out"
// 	Copy:  "hi"//What do you mean by copy? It means content duh.
// 	Date: "5 22 2017"
// };
// const blogTwo = {
// 	Title: "Valley O Despair"
// 	Copy: "hi"
// 	Date: "6 6 2017"
// };

// print function? For loop to print each array index?
// Need to add objs to the arrays.
// Probably should function that for later for now MVP 

// blogArray[0] = blogOne;
// blogArray[1] = blogTwo;

// function addBlogArray(blogObject){

// }
//Blogs written content
let blog1Content = `Just starting at Nashville Software School! I hope everything goes well, it seems like an avalanche of information!
					Doesn't seem to bad right now, mainly learning github and how to do workflow, the focus is on learning how to be a
					Software Developer using coding, not just being a coder. I like this approach, it lets people learn dynamically and
					in an adaptable manner.`;
let blog2Content = `We are entering the Valley of Despair pit as they call it, the slight valley before the real struggle begins. I don't
					feel too bad so far, it takes a day or two to grasp something then I can throw together some code and get help when it
					doesn't work. Each time I get help I learn a little more and it all adds up.`;
let blog3Content = `This week definately tested us all, the new concepts we learned have definately expanded our horizons. After playing Pinball
					with functions I finally have a function group that can help me make these blogs! I also did the tree milestone challenge and 
					just have this HTML one left. Fortunately with this JavaScript updating my blog will be much easier, as the dry code allows me
					to simply type this page, create a variable for it and run the content through a function chain that requires little effort!
					Function Pinball is probably the best way to describe week three at NSS.`;
// Blogs created
let blogOne = createBlogObj("Starting NSS", "5, 22, 17", blog1Content);
let blogTwo = createBlogObj("The Storm before the Hurricane", "5, 29, 17", blog2Content);
let blogThree = createBlogObj("Function Pinball", "6, 5, 17", blog3Content);
// Blog Cards
let blogCard1 = createContentBlog(blogOne);
let blogCard2 = createContentBlog(blogTwo);
let blogCard3 = createContentBlog(blogThree);
// Add to array


let blogArray = [blogCard1, blogCard2, blogCard3]; //Holds Blogs and uses functions to add new blogs, use createBlogObj to create the objects for the array
//then store them in a variable then put them into createContentBlog then use array blog to add the new card to the top of the array
// function arrayBlog(blogCard){
// 	blogArray.unshift(blogCard); 
// 	//unshift so newest blogs are at top, do in order
// 	return blogArray;
// };
//Gonna have to work on all this.
let blogClass = document.getElementById("blogPosts"); // Where the blogs go when put in printBlog
function printBlog(blogArray, blogClass) { //seems like I should put the result from array blog in here or just the function itself
    for (i = 0; i < blogArray.length; i++) { // or just make it print the cards and have arrayblog create the array
        blogClass.innerHTML += blogArray[i];


    }
    //console.log("pringBlog Running?", blogClass);
    //change to append child w/e convenient and make this print cards.
};

function createBlogObj(title, date, copy) { // put createContentBlog result into copy
    // pass variables created by other functions
    let newBlog = Object.create(null);
    newBlog.title = title;
    newBlog.date = date;
    newBlog.copy = copy;
    return newBlog; //creates blog format
    //console.log("createBlogObj running?", newBlog);
};

function createContentBlog(blogObject) { // pass in the created blog from createBlog Obj result
    let card = `<article class = "blog">
					<div class = "blogheader">
										<h3>${blogObject.title}</h3><p class = "day"> -${blogObject.date}</p>
					</div>
										<p class="content">${blogObject.copy}</p>

				</article>
				<br>`
        // could be useful to create a consistent styles 
        // and save time doing html
        //console.log("createContentBlog running?", card);
    return card;
};

printBlog(blogArray, blogClass);
//console.log("BlogArray", blogArray);
// TEST FUNCTIONS
//*******************************************
//test function createBlogObj
// let mynewblog = createBlogObj("sampletitle","sampledate","samplecontent");
// console.log("createBlogObj test", mynewblog);
//********************************************
//Thoughts
// the I counter for printBlog was causing an undefined when it couldn't find an array.