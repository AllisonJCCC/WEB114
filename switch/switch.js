//Allison Hanna 10/29/2025

//Step 1: Prompt for user input
let favMonth = prompt("Enter your favorite month:").toLowerCase();

//Step 7: Optional Error Testing
if (/\d/.test(favMonth)) {
    console.log("Please enter a valid month, not numbers!")
}
    else {

    //Step 2: Switch statements for each month
    switch(favMonth) {
        case "january":
            console.log("Happy New Year!");
            break;
        case "february":
            console.log("Happy St. Valentine's Day!");
            break;
        case "march":
            console.log("Happy St. Patrick's Day!");
            break;
        case "april":
            console.log("Happy Spring!");
            break;
        case "may":
            console.log("Happy Memorial Day!");
         break;            
        case "june":
            console.log("Happy Summer!");
            break;
        case "july":
            console.log("Happy Birthday America!");
            break;
        case "august":
            console.log("Happy Back to School!");
            break;
        case "september":
            console.log("Happy Fall Y'all! The very BEST season of them all!");
            break;
        case "october":
            console.log("Spooky season is among us!");
            break;
        case "november":
            console.log("Happy Thanksgiving!");
            break;
        case "december":
            console.log("Happy Holidays!");
            break;        
}

// Step 3. Add an If/Else If/Else Condition for Seasons
if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    console.log("You love the winter months!");
}

else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
    console.log("You enjoy the summer months!");
}

else {
    console.log("Other months are interesting too!");
}
}