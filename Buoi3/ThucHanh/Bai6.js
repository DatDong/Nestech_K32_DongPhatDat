// let browser = prompt('Enter your browser', '');
// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;
//     default:
//         alert('We hope that this page looks ok!');
// }

// let a = prompt('a?', '');
// switch (Number(a)) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

let value = prompt('Type a number', 0);
switch (true) {
    case value > 0:
        alert(1);
        break;
    case value < 0:
        alert(-1);
        break;
    default:
        alert(0);
}