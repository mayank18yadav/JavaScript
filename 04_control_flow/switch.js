// Basic syntax of switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "Feburary"

switch (month) {
    case "January":
        console.log("January");
        break;
    case "Feburary":
        console.log("Feburary");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}