let history = [];
let scrollingIndex = 0; // this variable keeps track on which command the user currently is while using the up and down arrows to recall

function commandPrompt() {
  // Create green visitor@fluttr.me: text
  printSpan("visitor@fluttr.me:", "--accent");

  // Create blue tilde
  printSpan("~", "--accent2");

  // Create white dollar sign
  const dollar = printSpan("$ ", "--text");

  // Get window element
  const windowElement = document.getElementById("window");

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
  windowElement.appendChild(span);

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

  // This handles the command recall feature
  input.addEventListener("keydown", (event) => {
    doFocus();
    const key = event.key;
    if (key == "ArrowUp" && scrollingIndex - 1 >= 0) {
      scrollingIndex--;
      input.textContent = history[scrollingIndex];
    } else if (key == "ArrowDown" && scrollingIndex + 1 <= history.length) {
      scrollingIndex++;
      if (scrollingIndex == history.length)
        input.textContent = "";
      else
        input.textContent = history[scrollingIndex];
    }

    // This block moves the cursor to the end of the input, timeout is there to apparently fix some chrome bug
    setTimeout(function(){
      const input = document.querySelector('#input');
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(input);
      range.collapse(false); // move cursor to end
      sel.removeAllRanges();
      sel.addRange(range);
      input.focus();
    }, 0);
  });

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
  let previousScrollPosition = window.scrollY; // Save the current scroll position
 
  // Change previous input and cursor's IDs to make sure that in the next cycle the correct elements are selected
  const previousInput = document.getElementById("input");
  previousInput.setAttribute("contenteditable", "false");
  previousInput.setAttribute("id", "previousInput");
  const previousBlinkingCursor = document.getElementById("blinkingCursor");
  previousBlinkingCursor.style.display = "none";
  previousBlinkingCursor.setAttribute("id", "previousBlinkingCursor");

  const command = previousInput.innerText;
  if (history[history.length - 1] != command && command != "")
    history.push(command)
  scrollingIndex = history.length;

  printLineBreak();

  const commands = {
    help: help,
    about: about,
    ls: () => ls(14),
    clear: clear,
    history: () => { printLine(history.join(", ")) },
    "": () => {},

    // Links
    "cat signal": () => {
      printLine("fluttr.01");
      printLink("https://signal.me/#eu/miUIHUv7glIcqQ14OrI3RKl2wRfZlKX-xP7Cm3Ky3qyjOIRYf4NOGL0m_fey_eNb", "https://signal.me/#eu/miUIHUv7glIcqQ14OrI3RKl2wRfZlKX-xP7Cm3Ky3qyjOIRYf4NOGL0m_fey_eNb");
      printLineBreak();
    },
    "cat discord": () => printLine("@fluttr."),
    "cat steam": () => {
      printLink("https://steamcommunity.com/id/fluttr/", "https://steamcommunity.com/id/fluttr/");
      printLineBreak();
    },
    "cat github": () => {
      printLink("https://github.com/Fluttrr", "https://github.com/Fluttrr");
      printLineBreak();
    },
    "cat codewars": () => {
      printLink("https://www.codewars.com/users/Flutter", "https://www.codewars.com/users/Flutter");
      printLineBreak();
    },
    "cat lastfm": () => {
      printLink("https://www.last.fm/user/Fluttrr", "https://www.last.fm/user/Fluttrr");
      printLineBreak();
    },
    "cat anilist": () => {
      printLink("https://anilist.co/user/Flutter/", "https://anilist.co/user/Flutter/");
      printLineBreak();
    },
    "cat discogs": () => {
      printLink("https://www.discogs.com/user/Fluttr/collection?header=1", "https://www.discogs.com/user/Fluttr/collection?header=1");
      printLineBreak();
    },
    "cat .onlyfans": () => printLine("haha"),
    "cat .favmusic": favMusic,
    music: music,
    blog: blog,
    plushies: plushies,
    photos: photos,
  };

  // Default command handler for unknown commands
  const handleUnknownCommand = (command) => {
    if (command.startsWith("cat")) {
      printLine("Usage: cat [file]");
    } else if (command.startsWith("ls") && command.includes("a")) {
      lsExtra();
    } else if (command.startsWith("blog")) {
      blogEntry(command.split(" ")[1]);
    } else if (command.startsWith("photos")) {
      photoAlbum(command.split(" ")[1]);
    } else {
      printLine('Command not found. Type "help" for a list of available commands.');
    }
  };

  // Execute command
  const normalizedCommand = command.toLowerCase().trim();
  if (commands[normalizedCommand]) {
    commands[normalizedCommand]();  // Execute the command if it exists
  } else {
    handleUnknownCommand(normalizedCommand);  // Handle unknown command
  }

  // Repeat process
  commandPrompt();
  scroll(previousScrollPosition); // Scroll down to correct position
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