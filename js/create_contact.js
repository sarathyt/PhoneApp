var addButton = document.getElementById('add-anchor'),
addBlogListener = function(evt) {
    //Send AJAX call to get the stciky dom.
    var newBlogRequest = new XMLHttpRequest();
    newBlogRequest.open('GET', 'blog.html', true);
    newBlogRequest.responseType = 'text';
    newBlogRequest.onload = function(e) {
        if (this.status == 200) {
            createBlog(this.responseText);
        }
    };
    newBlogRequest.send();
};

//Add click event handler/listener
addButton.addEventListener('click', addBlogListener);

/**
* Creates new blog with the blog dom string.
*
* @function createBlog
* @param  {string} blogDom {blog dom string}
* @public
*/
var createBlog = function(blogDom) {
var blog = document.querySelector('.blog'),
    div = document.createElement('div');
div.innerHTML = blogDom;
blog.appendChild(div);
}