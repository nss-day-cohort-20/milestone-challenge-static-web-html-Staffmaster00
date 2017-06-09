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
let blog1Content = `Just starting at Nashville Software School! I hope everything goes well, it seems like an avalanche of information!
					Doesn't seem to bad right now, mainly learning github and how to do workflow, the focus is on learning how to be a
					Software Developer using coding, not just being a coder. I like this approach, it lets people learn dynamically and
					in an adaptable manner.`;
let blog2Content = `We are entering the Valley of Despair pit as they call it, the slight valley before the real struggle begins. I don't
					feel too bad so far, it takes a day or two to grasp something then I can throw together some code and get help when it
					doesn't work. Each time I get help I learn a little more and it all adds up.`;
let	blog3Content = ``;

let 

let blogArray = []; //Holds Blogs and uses functions to add new blogs, use createBlogObj to create the objects for the array
//then store them in a variable then put them into createContentBlog then use array blog to add the new card to the top of the array
function arrayBlog(blogVariable){
	blogArray.unshift(blogVariable); 
	//unshift so newest blogs are at top
};

function printBlog(blogArray){
	for(i = 0; i <= blogArray.length; i++) {
		
	}//change to append child w/e convenient make this print cards.
};

function createBlogObj(title, date, copy){// put createContentBlog result into copy
// pass variables created by other functions
	let newBlog = Object.create(null);
	newBlog.title = title;
	newBlog.date = date;
	newBlog.copy = copy;
	return newBlog;//creates blog format
};

function createContentBlog(blogObject){// pass in the created blog from createBlog Obj result
	let card = `<article class = "blog">
					<div class = "blogheader">
										<h3>blogObject.title</h3><p class = "day"> -blogObject.date</p>
					</div>
										<p>blogObject.content</p>

				</article>`
	// could be useful to create a consistent styles 
	// and save time doing html
	return card;
};



//test function createBlogObj
// let mynewblog = createBlogObj("sampletitle","sampledate","samplecontent");
// console.log("createBlogObj test", mynewblog);



