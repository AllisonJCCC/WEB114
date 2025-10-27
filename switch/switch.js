
        // Prompt user for favorite month
        const favMonth = prompt("What is your favorite month?").toLowerCase();

        // Switch statement for all months
        switch(favMonth) {
            case "january":
                console.log("January is a fresh start to the year!");
                break;
            case "february":
                console.log("February is short but sweet!");
                break;
            case "march":
                console.log("March brings spring and new beginnings!");
                break;
            case "april":
                console.log("April showers bring May flowers!");
                break;
            case "may":
                console.log("May is full of blooming flowers and sunshine!");
                break;
            case "june":
                console.log("June starts the summer fun!");
                break;
            case "july":
                console.log("July is hot and perfect for vacations!");
                break;
            case "august":
                console.log("August is great for summer adventures!");
                break;
            case "september":
                console.log("September signals back-to-school season!");
                break;
            case "october":
                console.log("October is full of autumn colors and Halloween!");
                break;
            case "november":
                console.log("November brings Thanksgiving and cozy weather!");
                break;
            case "december":
                console.log("December is full of holidays and celebrations!");
                break;
            default:
                console.log("That's an interesting month!");
        }

        // If/Else if/Else for seasonal messages
        if(favMonth === "december" || favMonth === "january" || favMonth === "february") {
            console.log("You love the winter months!");
        } else if(favMonth === "june" || favMonth === "july" || favMonth === "august") {
            console.log("You enjoy the summer months!");
        } else {
            console.log("You must like Spring or Fall!");
        }
