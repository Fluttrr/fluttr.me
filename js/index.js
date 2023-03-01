function commandPrompt() {
    // Create green visitor@fluttr.me: text    
    const span1 = document.createElement("span");
    const node1 = document.createTextNode("visitor@fluttr.me:");
    span1.appendChild(node1);
    span1.style.color = "var(--accent, #ffffff)";
    span1.style.display = ("inline-block");

    // Create blue tilde
    const span2 = document.createElement("span");
    const node2 = document.createTextNode("~");
    span2.appendChild(node2);
    span2.style.color = "var(--accent2, #ffffff)"
    span2.style.display = ("inline-block");

    // Create white dollar sign
    const span3 = document.createElement("span");
    const node3 = document.createTextNode("$ ");
    span3.appendChild(node3);
    span3.style.color = "var(--text, #ffffff)";
    span3.style.display = ("inline-block");

    // Append to window
    const element = document.getElementById("window");
    element.appendChild(span1);
    element.appendChild(span2);
    element.appendChild(span3);
    console.log("commandPrompt");

    // Create blinking text prompt
    const span4 = document.createElement("span");
    const node4 = document.createTextNode("█");
    span4.appendChild(node4);
    span4.setAttribute("id", "blinkingCursor");
    span4.style.color = "var(--text, #ffffff)";
    span4.style.animation = "blink steps(1) 1s infinite";
    span4.style.display = ("inline-block");
    element.appendChild(span4);

    // Create input
    const input = document.createElement("span");
    input.setAttribute("id", "input");
    input.setAttribute("contenteditable", "true");
    input.setAttribute("autofocus", "true");
    input.setAttribute("auto-focus", "true");
    input.setAttribute("onBlur", "doFocus()");
    input.setAttribute("ng-blur", "doFocus()");
    input.setAttribute("spellcheck", "false");
    span3.appendChild(input);
    input.focus();

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

    // Create new line
    const br = document.createElement("br");
    const element = document.getElementById("window");
    element.appendChild(br);

    switch (command.toLowerCase()) {
        case "help":
            printHelp();
            break;
        case "about":
            printAbout();
            break;
        case "ls":
            printLs();
            break;
        case "cat discord":
            printDiscord();
            break;
        case "cat steam":
            printLink("https://steamcommunity.com/id/fluttr/");
            break;
        case "cat twitter":
            printLink("https://twitter.com/fluttr_me");
            break;
        case "cat github":
            printLink("https://github.com/Fluttrr")
            break;
        case "cat codewars":
            printLink("https://www.codewars.com/users/Flutter")
            break;
        case "cat lastfm":
            printLink("https://www.last.fm/user/Fluttrr")
            break;
        case "cat anilist":
            printLink("https://anilist.co/user/Flutter/")
            break;
        case "cat bandcamp":
            printLink("https://fluttr.bandcamp.com/")
            break;
        case "cat youtube":
            printLink("https://www.youtube.com/channel/UCrtf_NgTcCwwrMfWCb3PKHA")
            break;
        case "cat soundcloud":
            printLink("https://soundcloud.com/fluttrr")
            break;
        case "cat kofi":
            printLink("https://ko-fi.com/fluttr")
            break;
        case "cat flickr":
            printLink("https://www.flickr.com/photos/192855899@N07/")
            break;
        case "cat plushies":
            printLink("https://imgur.com/a/Lg5jDp0")
            break;
        case "site":
            window.location.href = "./regular";
            break;
        case "":
            break;
        default:
            if (command.toLowerCase().startsWith("cat")) printCatHelp();
            else printError();
            break;
    }

    // Repeat process
    commandPrompt();
}

function printHelp() {
    const description = document.createElement("p");
    const node = document.createTextNode("Available commands:");
    description.appendChild(node);

    const item1 = document.createElement("p");
    const node1 = document.createTextNode("* help - Displays this help message");
    item1.appendChild(node1);
    item1.setAttribute("class", "indent");

    const item2 = document.createElement("p");
    const node2 = document.createTextNode("* about - Information about me");
    item2.appendChild(node2);
    item2.setAttribute("class", "indent");

    const item3 = document.createElement("p");
    const node3 = document.createTextNode("* ls - Displays all accessible files (links)");
    item3.appendChild(node3);
    item3.setAttribute("class", "indent");

    const item4 = document.createElement("p");
    const node4 = document.createTextNode("* cat <file> - Displays contents of file");
    item4.appendChild(node4);
    item4.setAttribute("class", "indent");

    const item5 = document.createElement("p");
    const node5 = document.createTextNode("* site - Launches a normal webpage with my info");
    item5.appendChild(node5);
    item5.setAttribute("class", "indent");

    element = document.getElementById("window");
    element.appendChild(description);
    element.appendChild(item1);
    element.appendChild(item2);
    element.appendChild(item3);
    element.appendChild(item4);
    element.appendChild(item5);
}

function printAbout() {
    const description1 = document.createElement("p");
    const node1 = document.createTextNode("My name is Anna, I'm a 21 years old computer science student from Germany.");
    description1.appendChild(node1);

    const description2 = document.createElement("p");
    const node2 = document.createTextNode("I make music, I do digital illustrations, I sew and make plushies, I do photography, I create designs, I love watercolor painting and much more!");
    description2.appendChild(node2);

    const description3 = document.createElement("p");
    const node3 = document.createTextNode("You can find links to any of my profiles by either using the \"ls\" command or just going on my normal homepage by typing \"site\" (or just click ");
    description3.appendChild(node3);

    const link = document.createElement("a");
    const linkText = document.createTextNode("here");
    link.appendChild(linkText);
    link.href = "./regular";
    link.setAttribute("target", "_blank");
    description3.appendChild(link);

    const description3end = document.createElement("span");
    const node3end = document.createTextNode(").");
    description3end.appendChild(node3end);
    description3.appendChild(description3end);


    const description4 = document.createElement("p");
    const node4 = document.createTextNode("Feel free to contact me anywhere for any reason!");
    description4.appendChild(node4);

    element = document.getElementById("window");
    element.appendChild(description1);
    element.appendChild(document.createElement("br"));
    element.appendChild(description2);
    element.appendChild(document.createElement("br"));
    element.appendChild(description3);
    element.appendChild(document.createElement("br"));
    element.appendChild(description4);
}

function printLs() {
    const header = document.createElement("p");
    const node = document.createTextNode("total 11");
    header.appendChild(node);

    // Discord
    const link1 = document.createElement("p");
    const node1 = document.createTextNode("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29 ");
    link1.appendChild(node1);
    const file1 = document.createElement("span");
    const file1Text = document.createTextNode("discord");
    file1.appendChild(file1Text);
    file1.style.color = "var(--accent, #fff)"
    link1.appendChild(file1);

    // Steam
    const link2 = document.createElement("p");
    const node2 = document.createTextNode("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29 ");
    link2.appendChild(node2);
    const file2 = document.createElement("span");
    const file2Text = document.createTextNode("steam");
    file2.appendChild(file2Text);
    file2.style.color = "var(--accent, #fff)"
    link2.appendChild(file2);

    // Twitter
    const link3 = document.createElement("p");
    const node3 = document.createTextNode("-rw-r--r-- 1 fluttr social 64 Mar  1 13:29 ");
    link3.appendChild(node3);
    const file3 = document.createElement("span");
    const file3Text = document.createTextNode("twitter");
    file3.appendChild(file3Text);
    file3.style.color = "var(--accent, #fff)"
    link3.appendChild(file3);

    // Last.fm
    const link4 = document.createElement("p");
    const node4 = document.createTextNode("-rw-r--r-- 1 fluttr stats- 64 Mar  1 13:29 ");
    link4.appendChild(node4);
    const file4 = document.createElement("span");
    const file4Text = document.createTextNode("lastfm");
    file4.appendChild(file4Text);
    file4.style.color = "var(--accent, #fff)"
    link4.appendChild(file4);

    // Anilist
    const link5 = document.createElement("p");
    const node5 = document.createTextNode("-rw-r--r-- 1 fluttr stats- 64 Mar  1 13:29 ");
    link5.appendChild(node5);
    const file5 = document.createElement("span");
    const file5Text = document.createTextNode("anilist");
    file5.appendChild(file5Text);
    file5.style.color = "var(--accent, #fff)"
    link5.appendChild(file5);

    // Bandcamp
    const link6 = document.createElement("p");
    const node6 = document.createTextNode("-rw-r--r-- 1 fluttr music- 64 Mar  1 13:29 ");
    link6.appendChild(node6);
    const file6 = document.createElement("span");
    const file6Text = document.createTextNode("bandcamp");
    file6.appendChild(file6Text);
    file6.style.color = "var(--accent, #fff)"
    link6.appendChild(file6);

    // YouTube (Music)
    const link7 = document.createElement("p");
    const node7 = document.createTextNode("-rw-r--r-- 1 fluttr music- 64 Mar  1 13:29 ");
    link7.appendChild(node7);
    const file7 = document.createElement("span");
    const file7Text = document.createTextNode("youtube");
    file7.appendChild(file7Text);
    file7.style.color = "var(--accent, #fff)"
    link7.appendChild(file7);

    // Soundcloud
    const link8 = document.createElement("p");
    const node8 = document.createTextNode("-rw-r--r-- 1 fluttr music- 64 Mar  1 13:29 ");
    link8.appendChild(node8);
    const file8 = document.createElement("span");
    const file8Text = document.createTextNode("soundcloud");
    file8.appendChild(file8Text);
    file8.style.color = "var(--accent, #fff)"
    link8.appendChild(file8);

    // Ko-Fi 
    const link9 = document.createElement("p");
    const node9 = document.createTextNode("-rw-r--r-- 1 fluttr donate 64 Mar  1 13:29 ");
    link9.appendChild(node9);
    const file9 = document.createElement("span");
    const file9Text = document.createTextNode("kofi");
    file9.appendChild(file9Text);
    file9.style.color = "var(--accent, #fff)"
    link9.appendChild(file9);

    // Flickr
    const link10 = document.createElement("p");
    const node10 = document.createTextNode("-rw-r--r-- 1 fluttr photos 64 Mar  1 13:29 ");
    link10.appendChild(node10);
    const file10 = document.createElement("span");
    const file10Text = document.createTextNode("flickr");
    file10.appendChild(file10Text);
    file10.style.color = "var(--accent, #fff)"
    link10.appendChild(file10);

    // Plushies
    const link11 = document.createElement("p");
    const node11 = document.createTextNode("-rw-r--r-- 1 fluttr images 64 Mar  1 13:29 ");
    link11.appendChild(node11);
    const file11 = document.createElement("span");
    const file11Text = document.createTextNode("plushies");
    file11.appendChild(file11Text);
    file11.style.color = "var(--accent, #fff)"
    link11.appendChild(file11);

    // GitHub
    const link12 = document.createElement("p");
    const node12 = document.createTextNode("-rw-r--r-- 1 fluttr coding 64 Mar  1 13:29 ");
    link12.appendChild(node12);
    const file12 = document.createElement("span");
    const file12Text = document.createTextNode("github");
    file12.appendChild(file12Text);
    file12.style.color = "var(--accent, #fff)"
    link12.appendChild(file12);

    // Codewars
    const link13 = document.createElement("p");
    const node13 = document.createTextNode("-rw-r--r-- 1 fluttr coding 64 Mar  1 13:29 ");
    link13.appendChild(node13);
    const file13 = document.createElement("span");
    const file13Text = document.createTextNode("codewars");
    file13.appendChild(file13Text);
    file13.style.color = "var(--accent, #fff)"
    link13.appendChild(file13);


    element = document.getElementById("window");
    element.appendChild(header);
    element.appendChild(link1);
    element.appendChild(link2);
    element.appendChild(link3);
    element.appendChild(link12);
    element.appendChild(link13);
    element.appendChild(link4);
    element.appendChild(link5);
    element.appendChild(link6);
    element.appendChild(link7);
    element.appendChild(link8);
    element.appendChild(link9);
    element.appendChild(link10);
    element.appendChild(link11);
}

function printDiscord() {
    const description = document.createElement("p");
    const node = document.createTextNode("Flutter#9523");
    description.appendChild(node);

    element = document.getElementById("window");
    element.appendChild(description);
}

function printLink(link) {
    const description = document.createElement("a");
    const node = document.createTextNode(link);
    description.appendChild(node);
    description.setAttribute("href", link);

    element = document.getElementById("window");
    element.appendChild(description);
    element.appendChild(document.createElement("br"));
}

function printCatHelp() {
    const description = document.createElement("p");
    const node = document.createTextNode("Usage: cat [file]");
    description.appendChild(node);

    element = document.getElementById("window");
    element.appendChild(description);
}

function printError() {
    const description = document.createElement("p");
    const node = document.createTextNode("Command not found. Type \"help\" for a list of available commands.");
    description.appendChild(node);

    element = document.getElementById("window");
    element.appendChild(description);
}

function doFocus() {
    let myInput = document.getElementById('input');
    setTimeout(function() { 
         myInput.focus(); 
    }, 50);
}