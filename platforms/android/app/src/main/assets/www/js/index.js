function getPost(){
	fetch('http://abassbin.onlinewebshop.net/wp-json/wp/v2/posts')
	.then((res) => res.json())
	.then((data) => {
		let output = "<h2 class='underline pt-3'>Posts<h2>";
		data.forEach(function(post){
			output += `
				<div class="js-div border col-xl-6 col-md-8 col-sm-12 center-div">
					<h3 class="pt-5">${post.title.rendered}</h3>
					<p><small>Date of post: ${post.date}</small></p>
					<p><small>Author: ${post.author}</small></p>
					<p>${post.content.rendered}</p>
				</div>

			`;
		})
		output += `
					<div class="row bg-danger mt-3">
						<div class="col center-div">
							<button class="btn btn-outline-light my-3" id="close" onclick="closePost()">Close Posts</button>
						</div>
					</div>
				`;
		document.getElementById('output').innerHTML = output;
	})
}

function closePost() {
	let outPut = "";
	document.getElementById('output').innerHTML = outPut;

}