let history = "";

function commandPrompt() {
  // Create green visitor@fluttr.me: text
  printSpan("visitor@fluttr.me:", "--accent");

  // Create blue tilde
  printSpan("~", "--accent2");

  // Create white dollar sign
  const dollar = printSpan("$ ", "--text");

  // Get window element
  const element = document.getElementById("window");

  // Create blinking text prompt
  const span = document.createElement("span");
  const node = document.createTextNode("█");
  span.appendChild(node);
  span.setAttribute("id", "blinkingCursor");
  span.style.color = "var(--text, #ffffff)";
  span.style.animation = "blink steps(1) 1s infinite";
  span.style.display = "inline-block";
  span.setAttribute("class", "clearable");
  element.appendChild(span);

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
  element.addEventListener("keydown", doFocus());

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
    case "site":
      window.location.href = "./regular";
      break;
    case "":
      break;
    // Commands for links
    case "cat signal":
      printLine("fluttr.01");
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
    default:
      if (command.toLowerCase().startsWith("cat"))
        printLine("Usage: cat [file]");
      else if (
        command.toLowerCase().startsWith("ls") &&
        command.toLowerCase().includes("a")
      )
        printLsExtra();
      else
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
    "* help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Displays this help message"
  );
  printIndentedLine(
    "* about \u00A0\u00A0\u00A0\u00A0\u00A0- Information about me"
  );
  printIndentedLine(
    "* ls \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Displays all accessible files (links)"
  );
  printIndentedLine("* cat <file> - Displays contents of file");
  printIndentedLine(
    "* site \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Redirects to a regular website"
  );
  printIndentedLine(
    "* clear \u00A0\u00A0\u00A0\u00A0\u00A0- Clears the screen"
  );
  printIndentedLine(
    "* history \u00A0\u00A0\u00A0- Shows previously used commands"
  );
}

function printAbout() {
  printLine(
    "Hey! Thanks for trusting me enough to actually go on my website lol. This is mostly a hub for all my profiles and this section you're reading right now."
  );
  printLineBreak();

  printLine(
    "I study computer science and I'm into various things, such as:"
  );
  printLineBreak();

  printIndentedLine("* Anime (I don't watch nearly as much as I'd like to)");
  printIndentedLine(
    "* Listening to music (EDM, Rap, Singer/Songwriter, Classical, Rock and OSTs)"
  );
  printIndentedLine("* Making music");
  printIndentedLine("* Learning Japanese");
  printIndentedLine("* 3D Printing");
  printIndentedLine("* Tech/Programming");
  printIndentedLine("* Collecting Vinyl and Manga");
  printIndentedLine("* Good audio equipment (Headphones, IEMs, amps, speakers)");
  printIndentedLine("* Tea");
  printIndentedLine("* Cooking/Baking");
  printIndentedLine("* Sewing Plushies (haven't done it in ages)");
  printIndentedLine("* Wild Camping (also very rarely do this lol)");
  printLineBreak();

  const line = printSpan(
    'You can find links to any of my profiles by using the "ls" command to list all my profiles and then using "cat [link]". You can also just switch to the regular version of this site by typing "site" (or just click\u00A0',
    "--text"
  );

  const link = document.createElement("a");
  const linkTextNode = document.createTextNode("here");
  link.setAttribute("href", "./regular");
  link.appendChild(linkTextNode);
  line.appendChild(link);

  const endOfLine = document.createElement("span");
  const endOfLineTextNode = document.createTextNode(").");
  endOfLine.appendChild(endOfLineTextNode);
  line.appendChild(endOfLine);

  printLineBreak();
  printLineBreak();

  printLine(
    "This site is made using nothing but HTML, CSS and vanilla JavaScript."
  );
  printLineBreak();

  printLine("Feel free to message me anywhere for any reason!");
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
    "San Holo - worthy (Electronic)",
    "https://www.youtube.com/watch?v=ZIjGhWi6FEI"
  );
  printLineBreak();
  printLink(
    "The 1975 - I Always Wanna Die (Sometimes) (Pop Rock)",
    "https://youtu.be/k0Z6IxOeuMk"
  );
  printLineBreak();
  printLink(
    "Lauv - Bad Trip (Singer-Songwriter/Rock/Pop)",
    "https://www.youtube.com/watch?v=vYqb9AmKVIM"
  );
  printLineBreak();
  printLink(
    "Aries - KIDS ON MOLLY (Rock/Rap)",
    "https://www.youtube.com/watch?v=6gbV8tUuYiY"
  );
  printLineBreak();
  printLink(
    "Corderoy - Touch Your Face (Electronic)",
    "https://www.youtube.com/watch?v=sqdTzyxiuP8"
  );
  printLineBreak();
  printLink(
    "San Holo - idk anything (demo) (Electronic)",
    "https://youtu.be/rT7hbSMQh9w"
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
  const link = document.createElement("a");
  const textNode = document.createTextNode(string);
  link.appendChild(textNode);
  link.setAttribute("href", link);
  link.setAttribute("target", "_blank");
  link.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(link);
  return link;
}

function printLineBreak() {
  const linebreak = document.createElement("br");
  linebreak.setAttribute("class", "clearable");

  const window = document.getElementById("window");
  window.appendChild(linebreak);
}

function doFocus() {
  const myInput = document.getElementById("input");
  setTimeout(function () {
    myInput.focus();
  }, 50);
}

function hankyPanky(string) {
  return btoa(string);
}

function setCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("currentYear").innerText = year;
}
