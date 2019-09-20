let name = document.getElementById("name");
        name.onfocus = nameFocus;
        name.onblur = nameBlur

        function nameFocus() {
            var nameFeed = document.getElementById('nameOutput');
            nameFeed.innerHTML = "Hello there, what's your name?";
        };

        function nameBlur() {
            var nameFeed = document.getElementById('nameOutput');
            if (name.value == ("")) {
                nameFeed.innerHTML = "Please tell me your name.";
            } else {
                nameFeed.innerHTML = "Hi, " + name.value + "!";
            }
        };

        let birthday = document.getElementById("date");
        date.onfocus = dateFocus;
        date.onblur = dateBlur;

        function dateFocus() {
            var dateFeed = document.getElementById("ageOutput");
            dateFeed.innerHTML = "Let me guess, your age is...";
        }

        function dateBlur() {
            var dateFeed = document.getElementById('ageOutput');
            if (date.value == ("")) {
                dateFeed.innerHTML = "Would you mind entering your birthday?";
            } else {
                let birthyear = new Date(date.value);
                let currentDate = new Date();
                currentAge = currentDate.getYear() - birthyear.getYear();
                dateFeed.innerHTML = "Your age is " + currentAge + " years old!";
            }
        };

        let lightTheme = document.getElementById("light");
        lightTheme.onclick = changeTheme;
        let darkTheme = document.getElementById("dark");
        darkTheme.onclick = changeTheme;

        function changeTheme(event) {
            if (event.currentTarget == lightTheme) {
                var themeFeed = document.getElementById("themeOutput");
                themeFeed.innerHTML = "You selected Light Mode!"
                var theme = document.getElementById("right-panel");
                theme.className = "panel bg-light text-black";
            } else {
                var themeFeed = document.getElementById("themeOutput");
                themeFeed.innerHTML = "You selected Dark Mode!"
                var theme = document.getElementById("right-panel");
                theme.className = "panel bg-dark text-white";
            }
        }

        let htmlButton = document.getElementById("html");
        let jsButton = document.getElementById("javascript");
        let cssButton = document.getElementById("css");
        htmlButton.onmouseover = highlightButton;
        jsButton.onmouseover = highlightButton;
        cssButton.onmouseover = highlightButton;
        jsButton.onmouseout = defaultButton;
        cssButton.onmouseout = defaultButton;
        htmlButton.onmouseout = defaultButton;
        htmlButton.onclick = transferButton;
        cssButton.onclick = transferButton;
        jsButton.onclick = transferButton;

        function highlightButton(event) {
            event.currentTarget.className = "btn btn-danger btn-sm"
        }

        function defaultButton(event) {
            event.currentTarget.className = "btn btn-success btn-sm"
        }

        function transferButton(event) {
            if (event.currentTarget.parentNode == document.getElementById("left-panel-body")) {
                document.getElementById("right-panel-body").appendChild(event.currentTarget)
            } else {
                document.getElementById("left-panel-body").appendChild(event.currentTarget)

            }
        }