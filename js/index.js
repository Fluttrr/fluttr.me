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
    const span4 = document.createElement("span");
    const node4 = document.createTextNode("█");
    span4.appendChild(node4);
    span4.setAttribute("id", "blinkingCursor");
    span4.style.color = "var(--text, #ffffff)";
    span4.style.animation = "blink steps(1) 1s infinite";
    span4.style.display = ("inline-block");
    span4.setAttribute("class", "clearable")
    element.appendChild(span4);

    // Create input
    const input = document.createElement("span");
    input.setAttribute("id", "input");
    input.setAttribute("contenteditable", "true");
    input.setAttribute("autofocus", "true");
    input.setAttribute("auto-focus", "true");
    input.setAttribute("onBlur", "this.focus(); doFocus()");
    input.setAttribute("ng-blur", "doFocus()");
    input.setAttribute("spellcheck", "false");
    input.setAttribute("class", "clearable")
    dollar.appendChild(input);
    input.focus();
    element.addEventListener("keydown", doFocus());

    // Listen for enter key and evaluate command
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {  //checks whether the pressed key is "Enter"
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
    history += command + "§"

    printLineBreak();

    switch (command.toLowerCase()) {
        case "help":
            printHelp();
            break;
        case "about":
            printAbout();
            break;
        case "ls":
            printLs(11);
            break;
        case "cat discord":
            printLine("Flutter#9523");
            break;
        case "cat steam":
            printLink("https://steamcommunity.com/id/fluttr/", "https://steamcommunity.com/id/fluttr/");
            printLineBreak();
            break;
        case "cat twitter":
            printLink("https://twitter.com/fluttr_me", "https://twitter.com/fluttr_me");
            printLineBreak();
            break;
        case "cat github":
            printLink("https://github.com/Fluttrr", "https://github.com/Fluttrr");
            printLineBreak();
            break;
        case "cat codewars":
            printLink("https://www.codewars.com/users/Flutter", "https://www.codewars.com/users/Flutter");
            printLineBreak();
            break;
        case "cat lastfm":
            printLink("https://www.last.fm/user/Fluttrr", "https://www.last.fm/user/Fluttrr");
            printLineBreak();
            break;
        case "cat anilist":
            printLink("https://anilist.co/user/Flutter/", "https://anilist.co/user/Flutter/");
            printLineBreak();
            break;
        case "cat bandcamp":
            printLink("https://fluttr.bandcamp.com/", "https://fluttr.bandcamp.com/");
            printLineBreak();
            break;
        case "cat youtube":
            printLink("https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA", "https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA");
            printLineBreak();
            break;
        case "cat soundcloud":
            printLink("https://soundcloud.com/fluttrr", "https://soundcloud.com/fluttrr");
            printLineBreak();
            break;
        case "cat kofi":
            printLink("https://ko-fi.com/fluttr", "https://ko-fi.com/fluttr");
            printLineBreak();
            break;
        case "cat flickr":
            printLink("https://www.flickr.com/photos/192855899@N07/", "https://www.flickr.com/photos/192855899@N07/");
            printLineBreak();
            break;
        case "cat plushies":
            printLink("https://imgur.com/a/Lg5jDp0", "https://imgur.com/a/Lg5jDp0");
            printLineBreak();
            break;
        case "cat .onlyfans":
            printLine("You really thought I'd put my OnlyFans link here? You gotta look harder than that.");
            break;
        case "cat .favmusic":
            printFavMusic();
            break;
        case "clear":
            clear();
            break;
        case "history":
            printLine(history.substring(0,history.length-9).replaceAll("§", ", "));
            break;
        case "site":
            window.location.href = "./regular";
            break;
        case "":
            break;
        default:
            if (command.toLowerCase().startsWith("cat")) printLine("Usage: cat [file]");
            else if (command.toLowerCase().startsWith("ls") && command.toLowerCase().includes("a")) printLsExtra();
            else printLine("Command not found. Type \"help\" for a list of available commands.");
            break;
    }

    // Repeat process
    commandPrompt();
}

function printHelp() {
    printLine("Available commands:");
    printIndentedLine("* help \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Displays this help message");
    printIndentedLine("* about \u00A0\u00A0\u00A0\u00A0\u00A0- Information about me");
    printIndentedLine("* ls \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Displays all accessible files (links)");
    printIndentedLine("* cat <file> - Displays contents of file");
    printIndentedLine("* site \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0- Redirects to a regular website");
    printIndentedLine("* clear \u00A0\u00A0\u00A0\u00A0\u00A0- Clears the screen")
    printIndentedLine("* history \u00A0\u00A0\u00A0- Shows previously used commands")
}

function printAbout() {
    printLine("My name is Anna, I'm a 21 years old computer science student from Germany.");
    printLineBreak();
    
    printLine("I make music, I do digital illustrations, I sew and make plushies, I do photography, I create designs, I love watercolor painting and much more!");
    printLineBreak();

    const line = printSpan("You can find links to any of my profiles by either using the \"ls\" command and printing each link using \"cat [link]\" or just going on my normal homepage by typing \"site\" (or just click\u00A0", "--text");
    
    const link = document.createElement("a");
    const node = document.createTextNode("here");
    link.setAttribute("href", "./regular");
    link.appendChild(node);
    line.appendChild(link);

    const endOfLine = document.createElement("span");
    const node2 = document.createTextNode(").");
    endOfLine.appendChild(node2);
    line.appendChild(endOfLine);

    printLineBreak();
    printLineBreak();

    printLine("This site is made using nothing but HTML, CSS and vanilla JavaScript.");
    printLineBreak();

    printLine("Feel free to contact me anywhere for any reason!");
}

function printLs(num) {
    printLine("total " + num);

    // Discord
    printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
    printSpan("discord", "--accent");
    printLineBreak();

    // Steam
    printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
    printSpan("steam", "--accent");
    printLineBreak();

    // Twitter
    printSpan("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29\u00A0", "--text");
    printSpan("twitter", "--accent");
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
    printLs(13);

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
    printLink("The 1975 - Guys (Pop Rock)", "https://www.youtube.com/watch?v=X0mzMd17jG0");
    printLineBreak();
    printLink("San Holo - worthy (Electronic)", "https://www.youtube.com/watch?v=ZIjGhWi6FEI");
    printLineBreak();
    printLink("Lauv - Bad Trip (Singer-Songwriter/Rock/Pop)", "https://www.youtube.com/watch?v=vYqb9AmKVIM");
    printLineBreak();
    printLink("Aries - KIDS ON MOLLY (Rock/Rap)", "https://www.youtube.com/watch?v=6gbV8tUuYiY");
    printLineBreak();
    printLink("Corderoy - Touch Your Face (Electronic)", "https://www.youtube.com/watch?v=sqdTzyxiuP8");
    printLineBreak();
    printLink("Max Elto - Shadow of the Sun (Mako Remix) (Progressive House)", "https://www.youtube.com/watch?v=WoCfFoQeWoU");
    printLineBreak();
}

function clear() {
    var list = document.getElementsByClassName("clearable");

    while (list[0]) {
        list[0].parentNode.removeChild(list[0]);
    }
}

function printLine(string) {
    const description = document.createElement("p");
    const node = document.createTextNode(string);
    description.appendChild(node);
    description.setAttribute("class", "clearable")

    const element = document.getElementById("window");
    element.appendChild(description);
    return description;
}

function printIndentedLine(string) {
    const description = document.createElement("p");
    const node = document.createTextNode(string);
    description.appendChild(node);
    description.setAttribute("class", "indent clearable");

    const element = document.getElementById("window");
    element.appendChild(description);
    return description;
}

function printSpan(string, color) {
    const description = document.createElement("span");
    const node = document.createTextNode(string);
    description.appendChild(node);
    description.style.color = "var(" + color + ", #fff)";
    description.style.display = "inline-block";
    description.setAttribute("class", "clearable")

    const element = document.getElementById("window");
    element.appendChild(description);
    return description;
}

function printLink(string, link) {
    const description = document.createElement("a");
    const node = document.createTextNode(string);
    description.appendChild(node);
    description.setAttribute("href", link);
    description.setAttribute("target", "_blank");
    description.setAttribute("class", "clearable")

    const element = document.getElementById("window");
    element.appendChild(description);
    return description;
}

function printLineBreak() {
    const linebreak = document.createElement("br");
    linebreak.setAttribute("class", "clearable");

    const element = document.getElementById("window");
    element.appendChild(linebreak);
}

function doFocus() {
    let myInput = document.getElementById('input');
    setTimeout(function() { 
         myInput.focus(); 
    }, 50);
}