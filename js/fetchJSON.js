let blogPosts = [];

fetch('./js/posts.json')
  .then(response => response.json())
  .then(data => {
    blogPosts = data.posts; // Store the posts in the global variable
    document.getElementById("latest-blog-post").textContent = blogPosts[0].date;
  })
  .catch(error => console.error('Error fetching blog posts:', error));

let songs = [];

fetch('./js/songs.json')
  .then(response => response.json())
  .then(data => {
    songs = data.catalogue;
  })
  .catch(error => console.error('Error fetching songs:', error))

let plushieFilenames = [];

fetch('./js/plushieManifest.json')
  .then(response => response.json())
  .then(data => {
    plushieFilenames = data.filenames;
  })
  .catch(error => console.error('Error fetching number of plushie images: ', error))