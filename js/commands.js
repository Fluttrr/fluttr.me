let history = "";

function help() {
  printLine("Available commands:");
  printIndentedLine(
    "* help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- display this help message"
  );
  printIndentedLine(
    "* about \u00A0\u00A0\u00A0\u00A0\u00A0- all about me"
  );
  printIndentedLine(
    "* music \u00A0\u00A0\u00A0\u00A0\u00A0- open a music player to listen to my music"
  );
  printIndentedLine(
    "* blog \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- view my blog posts"
  );
  printIndentedLine(
    "* ls \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- display all accessible files (links)"
  );
  printIndentedLine("* cat <file> - display contents of a file");
  printIndentedLine(
    "* clear \u00A0\u00A0\u00A0\u00A0\u00A0- clear the screen"
  );
  printIndentedLine(
    "* history \u00A0\u00A0\u00A0- show previously used commands"
  );
}

function about() {
  printLine(
    "hey!! thanks for trusting me enough to actually go on my website lol. this is a hub for anything about me, from my links to my music to a dumb useless little blog!! and i plan to put more stuff like photos on here too eventually."
  );
  printLineBreak();

  printLine(
    "i study computer science and im into various things, such as:"
  );
  printLineBreak();

  printIndentedLine("* anime (i dont watch nearly as much as id like to)");
  printIndentedLine(
    "* listening to music (edm, rap, singer/songwriter, classical, rock (especially noise pop) and osts)"
  );
  printIndentedLine("* making music (type 'music' to take a look!!)");
  printIndentedLine("* sewing plushies");
  printIndentedLine("* photography");
  printIndentedLine("* tech/programming");
  printIndentedLine("* collecting vinyl and manga");
  printIndentedLine("* good audio gear (headphones, iems, amps, speakers)");
  printIndentedLine("* tea (love me some white tea)");
  printIndentedLine("* learning japanese (on a bit of a hiatus...)");
  printIndentedLine("* 3d printing");
  printIndentedLine("* cooking/baking");
  printIndentedLine("* wild camping (very rarely do this lol)");
  printLineBreak();

  printLine(
    'you can find links to any of my profiles by using the "ls" command to list all my profiles and then using "cat [link]".'
  );

  printLineBreak();

  printLine(
    "this site is made using nothing but html, css and vanilla javascript."
  );

  printLineBreak();

  printLine("feel free to message me anywhere for any reason!!");
}

function ls(num) {
  printLine("total " + num);

  // Signal
  printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
  printSpan("signal", "--accent");
  printLineBreak();

  // Discord
  printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
  printSpan("discord", "--accent");
  printLineBreak();

  // Steam
  printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
  printSpan("steam", "--accent");
  printLineBreak();

  // GitHub
  printSpan("-rw-r--r-- 1 fluttr coding 64 Mar  1 13:29\u00A0", "--text");
  printSpan("github", "--accent");
  printLineBreak();

  // Codewars
  printSpan("-rw-r--r-- 1 fluttr coding 64 Mar  1 13:29\u00A0", "--text");
  printSpan("codewars", "--accent");
  printLineBreak();

  // Last.fm
  printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("lastfm", "--accent");
  printLineBreak();

  // Anilist
  printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("anilist", "--accent");
  printLineBreak();

  // Discogs
  printSpan("-rw-r--r-- 1 fluttr stats\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("discogs", "--accent");
  printLineBreak();

  // Bandcamp
  printSpan("-rw-r--r-- 1 fluttr music\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("bandcamp", "--accent");
  printLineBreak();

  // YouTube (Music)
  printSpan("-rw-r--r-- 1 fluttr music\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("youtube", "--accent");
  printLineBreak();

  // Soundcloud
  printSpan("-rw-r--r-- 1 fluttr music\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan("soundcloud", "--accent");
  printLineBreak();

  // Ko-Fi
  printSpan("-rw-r--r-- 1 fluttr donate 64 Mar  1 13:29\u00A0", "--text");
  printSpan("kofi", "--accent");
  printLineBreak();

  // Flickr
  printSpan("-rw-r--r-- 1 fluttr photos 64 Mar  1 13:29\u00A0", "--text");
  printSpan("flickr", "--accent");
  printLineBreak();

  // Plushies
  printSpan("-rw-r--r-- 1 fluttr images 64 Mar  1 13:29\u00A0", "--text");
  printSpan("plushies", "--accent");
  printLineBreak();
}

function lsExtra() {
  ls(16);

  // Fake Onlyfans
  printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
  printSpan(".onlyfans", "--accent2");
  printLineBreak();

  // Favorite music
  printSpan("-rw-r--r-- 1 fluttr lists\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan(".favmusic", "--accent2");
  printLineBreak();
}

function favMusic() {
  printLink(
    "Willy Rodrigez - wetdream (noise pop)",
    "https://www.youtube.com/watch?v=d8GaT09uxow&pp=ygUYd2lsbHkgcm9kcmlndWV6IHdldGRyZWFt"
  );
  printLineBreak();
  printLink(
    "San Holo - worthy (electronic)",
    "https://www.youtube.com/watch?v=ZIjGhWi6FEI"
  );
  printLineBreak();
  printLink(
    "Ruel - SITTING IN TRAFFIC (singer/songwriter)",
    "https://www.youtube.com/watch?v=TJje4xifm-I&pp=ygURc2l0dGluZyBpbiB0cmFmaWM%3D"
  );
  printLineBreak();
  printLink(
    "Aries - KIDS ON MOLLY (rap/rock)",
    "https://www.youtube.com/watch?v=6gbV8tUuYiY"
  );
  printLineBreak();
  printLink(
    "Parannoul - White Ceiling (noise pop)",
    "https://www.youtube.com/watch?v=Jp9qIHFlvgc&pp=ygUNd2hpdGUgY2VpbGluZw%3D%3D"
  );
  printLineBreak();
  printLink(
    "drug bug - took my heart (indie rock maybe?? idk what genre this is..)",
    "https://www.youtube.com/watch?v=xdF4mq_DPH8&pp=ygUWdG9vayBteSBoZWFydCBkcnVnIGJ1Zw%3D%3D"
  );
  printLineBreak();
}

function clear() {
  var list = document.getElementsByClassName("clearable");

  while (list[0]) {
    list[0].parentNode.removeChild(list[0]);
  }
}

function music() {
  const container = document.createElement('div');
  container.classList.add('clearable');
  container.classList.add('music-container');
  document.getElementById("window").appendChild(container);
  document.getElementById("window").style.setProperty('padding-bottom', '6rem');
  generateMusic();
}

function blog() {
  if (blogPosts.length === 0) {
    printLine("No blog posts available.");
    return;
  }

  printLine('Blog overview (type "blog {num}" to see any entry!):');
  let counter = blogPosts.length;
  printLineBreak();
  blogPosts.forEach(item => {
    printSpan(counter + " - " + item.title + " (" + item.date + ")", "--accent");
    if (counter >= blogPosts.length - 1) {
      item.content.split("\n").forEach(line => {
        printLineBreak();
        printLine(line);
      });
    }
    printLineBreak();
    counter--;
  });
  printLineBreak();
}

function blogEntry(num) {
  // Check if num is a string containing an integer
  if (!/^\d+$/.test(num)) {
    printLine("Invalid input. Please enter a valid blog entry number.");
    return;
  }

  const index = parseInt(num) - 1; // Convert to zero-based index
  if (index < 0 || index >= blogPosts.length) {
    printLine("Invalid blog entry number.");
    return;
  }

  const post = blogPosts[blogPosts.length - index - 1];
  printLineBreak();
  printSpan(post.title, "--accent");
  printLineBreak();
  printSpan(post.date, "--accent2");
  post.content.split("\n").forEach(line => {
    printLine(line);
    printLineBreak();
  });
}