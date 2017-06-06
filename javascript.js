// The page will have a linked JavaScript file for the blog posts
 // section. Create an array to hold your posts (at least 2 posts).
  // Each item in the array must be an object that contains at a
   // minimum the following information: Title, Copy, Date.
    // Use JavaScript to add each post to the DOM.
let blogArray = [];
const blogOne = {
	Title: Starting Out;
	Copy: ; //What do you mean by copy?
	Date: "5 22 2017";
};
const blogTwo = {
	Title: Valley O Despair;
	Copy: ;
	Date: "6 6 2017";
};

// print function? For loop to print each array index?
// Need to add objs to the arrays.
// Probably should function that for later for now MVP 

blogArray[0] = blogOne;
blogArray[1] = blogTwo;

function printBlog(blogArray){
	for(i = 0; i <= blogArray.length; i++) {
		document.innerHTML(blogArray[i]);
	}
};
