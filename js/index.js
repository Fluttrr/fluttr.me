let history = "";

function commandPrompt() {
  // Create green visitor@fluttr.me: text
  printSpan("visitor@fluttr.me:", "--accent");

  // Create blue tilde
  printSpan("~", "--accent2");

  // Create white dollar sign
  const dollar = printSpan("$ ", "--text");

  // Get window element
  const window = document.getElementById("window");

  // Create blinking text prompt
  const span = document.createElement("span");
  const cursor = document.createTextNode("_");
  span.appendChild(cursor);
  span.setAttribute("id", "blinkingCursor");
  span.style.color = "var(--text, #ffffff)";
  span.style.animation = "blink steps(1) 1s infinite";
  span.style.display = "inline-block";
  span.style.zIndex = "1";
  span.setAttribute("class", "clearable");
  window.appendChild(span);

  // Create input
  const input = document.createElement("span");
  input.setAttribute("id", "input");
  input.setAttribute("contenteditable", "true");
  input.setAttribute("autofocus", "true");
  input.setAttribute("auto-focus", "true");
  input.setAttribute("onBlur", "this.focus(); doFocus()");
  input.setAttribute("ng-blur", "doFocus()");
  input.setAttribute("spellcheck", "false");
  input.setAttribute("class", "clearable");
  dollar.appendChild(input);
  input.focus();
  window.addEventListener("keydown", doFocus());

  // Listen for enter key and evaluate command
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      //checks whether the pressed key is "Enter"
      event.preventDefault();
      evalCommand();
    }
  });
}

function evalCommand() {
  // Change previous input and cursor's IDs to make sure that in the next cycle the correct elements are selected
  const previousInput = document.getElementById("input");
  previousInput.setAttribute("contenteditable", "false");
  previousInput.setAttribute("id", "previousInput");
  const previousBlinkingCursor = document.getElementById("blinkingCursor");
  previousBlinkingCursor.style.display = "none";
  previousBlinkingCursor.setAttribute("id", "previousBlinkingCursor");

  const command = previousInput.innerText;
  history += command + "§";

  printLineBreak();

  switch (command.toLowerCase().trim()) {
    // Commands for the terminal
    case "help":
      printHelp();
      break;
    case "about":
      printAbout();
      break;
    case "ls":
      printLs(14);
      break;
    case "clear":
      clear();
      break;
    case "history":
      printLine(history.substring(0, history.length - 9).replaceAll("§", ", "));
      break;
    case "":
      break;
    // Commands for links
    case "cat signal":
      printLine("fluttr.01");
      printLink("https://signal.me/#eu/miUIHUv7glIcqQ14OrI3RKl2wRfZlKX-xP7Cm3Ky3qyjOIRYf4NOGL0m_fey_eNb", "https://signal.me/#eu/miUIHUv7glIcqQ14OrI3RKl2wRfZlKX-xP7Cm3Ky3qyjOIRYf4NOGL0m_fey_eNb")
      printLineBreak();
      break;
    case "cat discord":
      printLine("@fluttr.");
      break;
    case "cat steam":
      printLink(
        "https://steamcommunity.com/id/fluttr/",
        "https://steamcommunity.com/id/fluttr/"
      );
      printLineBreak();
      break;
    case "cat github":
      printLink("https://github.com/Fluttrr", "https://github.com/Fluttrr");
      printLineBreak();
      break;
    case "cat codewars":
      printLink(
        "https://www.codewars.com/users/Flutter",
        "https://www.codewars.com/users/Flutter"
      );
      printLineBreak();
      break;
    case "cat lastfm":
      printLink(
        "https://www.last.fm/user/Fluttrr",
        "https://www.last.fm/user/Fluttrr"
      );
      printLineBreak();
      break;
    case "cat anilist":
      printLink(
        "https://anilist.co/user/Flutter/",
        "https://anilist.co/user/Flutter/"
      );
      printLineBreak();
      break;
    case "cat discogs":
      printLink(
        "https://www.discogs.com/user/Fluttr/collection?header=1",
        "https://www.discogs.com/user/Fluttr/collection?header=1"
      );
      printLineBreak();
      break;
    case "cat bandcamp":
      printLink("https://fluttr.bandcamp.com/", "https://fluttr.bandcamp.com/");
      printLineBreak();
      break;
    case "cat youtube":
      printLink(
        "https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA",
        "https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA"
      );
      printLineBreak();
      break;
    case "cat soundcloud":
      printLink(
        "https://soundcloud.com/fluttrr",
        "https://soundcloud.com/fluttrr"
      );
      printLineBreak();
      break;
    case "cat kofi":
      printLink("https://ko-fi.com/fluttr", "https://ko-fi.com/fluttr");
      printLineBreak();
      break;
    case "cat flickr":
      printLink(
        "https://www.flickr.com/photos/192855899@N07/",
        "https://www.flickr.com/photos/192855899@N07/"
      );
      printLineBreak();
      break;
    case "cat plushies":
      printLink("https://imgur.com/a/Lg5jDp0", "https://imgur.com/a/Lg5jDp0");
      printLineBreak();
      break;
    case "cat .onlyfans":
      printLine(
        "haha"
      );
      break;
    case "cat .favmusic":
      printFavMusic();
      break;
    case "music":
      openMusicPlayer();
      break;
    case "blog":
      printBlogOverview();
      break;
    default:
      if (command.toLowerCase().startsWith("cat"))
        printLine("Usage: cat [file]");
      else if (
        command.toLowerCase().startsWith("ls") &&
        command.toLowerCase().includes("a")
      )
        printLsExtra();
      else if (command.startsWith("blog")) {
        printBlogEntry(command.split(" ")[1]);
      } else
        printLine(
          'Command not found. Type "help" for a list of available commands.'
        );
      break;
  }

  // Repeat process
  commandPrompt();
}

function printHelp() {
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

function printAbout() {
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

function printLs(num) {
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

function printLsExtra() {
  printLs(16);

  // Fake Onlyfans
  printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
  printSpan(".onlyfans", "--accent2");
  printLineBreak();

  // Favorite music
  printSpan("-rw-r--r-- 1 fluttr lists\u00A0 64 Mar  1 13:29\u00A0", "--text");
  printSpan(".favmusic", "--accent2");
  printLineBreak();
}

function printFavMusic() {
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

function printLine(string) {
  const text = document.createElement("p");
  const textNode = document.createTextNode(string);
  text.appendChild(textNode);
  text.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(text);
  return text;
}

function printIndentedLine(string) {
  const text = document.createElement("p");
  const textNode = document.createTextNode(string);
  text.appendChild(textNode);
  text.setAttribute("class", "indent clearable");

  const window = document.getElementById("window");
  window.appendChild(text);
  return text;
}

function printSpan(string, color) {
  const span = document.createElement("span");
  const textNode = document.createTextNode(string);
  span.appendChild(textNode);
  span.style.color = "var(" + color + ", #fff)";
  span.style.display = "inline-block";
  span.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(span);
  return span;
}

function printLink(string, link) {
  printLink(string, link, "--text");
}

function printLink(string, link, color) {
  const linkElement = document.createElement("a");
  const textNode = document.createTextNode(string);
  linkElement.appendChild(textNode);
  linkElement.style.color = "var(" + color + ", #fff)";
  linkElement.setAttribute("href", link);
  linkElement.setAttribute("target", "_blank");
  linkElement.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(linkElement);
  return linkElement;
}

function printLineBreak() {
  const linebreak = document.createElement("br");
  linebreak.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(linebreak);
}

function doFocus() {
  const myInput = document.getElementById("input");
  if (myInput) {
    const rect = myInput.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isVisible) {
      setTimeout(function () {
        myInput.focus({ preventScroll: true }); // Prevent scrolling to the input
      }, 50);
    }
  }
}

function hankyPanky(string) {
  return btoa(string);
}

function setCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("currentYear").innerText = year;
}

function openMusicPlayer() {
  const container = document.createElement('div');
  container.classList.add('clearable');
  container.classList.add('music-container');
  document.getElementById("window").appendChild(container);
  document.getElementById("window").style.setProperty('padding-bottom', '6rem');
  generateMusic();
}

// Global variable to store the blog posts
let blogPosts = [];

// Fetch the JSON at page load
function fetchBlogPosts() {
  fetch('./js/posts.json')
    .then(response => response.json())
    .then(data => {
      blogPosts = data.posts; // Store the posts in the global variable
    })
    .catch(error => console.error('Error fetching blog posts:', error));
}

// Call the fetch function at page load
fetchBlogPosts();

function printBlogOverview() {
  if (blogPosts.length === 0) {
    printLine("No blog posts available.");
    return;
  }

  printLine('Blog overview (type "blog {num}" to see any entry!):');
  printLineBreak();
  let counter = blogPosts.length;
  blogPosts.forEach(item => {
    printSpan(counter + " - " + item.title + " (" + item.date + ")", "--accent");
    if (counter >= blogPosts.length - 1) {
      item.content.split("\n").forEach(line => {
        printLine(line);
      });
    }
    printLineBreak();
    counter--;
  });
}

function printBlogEntry(num) {
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
  printSpan(post.title, "--accent");
  printLineBreak();
  printSpan(post.date, "--accent2");
  post.content.split("\n").forEach(line => {
    printLine(line);
    printLineBreak();
  });
  printLineBreak();
}