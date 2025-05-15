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
      help();
      break;
    case "about":
      about();
      break;
    case "ls":
      ls(14);
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
      favMusic();
      break;
    case "music":
      music();
      break;
    case "blog":
      blog();
      break;
    default:
      if (command.toLowerCase().startsWith("cat"))
        printLine("Usage: cat [file]");
      else if (
        command.toLowerCase().startsWith("ls") &&
        command.toLowerCase().includes("a")
      )
        lsExtra();
      else if (command.startsWith("blog")) {
        blogEntry(command.split(" ")[1]);
      } else
        printLine(
          'Command not found. Type "help" for a list of available commands.'
        );
      break;
  }

  // Repeat process
  commandPrompt();
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

function setCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("currentYear").innerText = year;
}