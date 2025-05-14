// const car = { color: "red", year: 2017 }

// console.log(users[3].isOnline);

// const names = ["John Doe", "Emmet James", "Lucy Smith"];
// for (let i = 0; names.length > i; i++){
//   console.log("My name is:", names[i]);
// }

// for (let user of names) {
//   console.log("My name is", user)
// }

const users = [
  { username: "goldenapple", isOnline: false },
  { username: "violin_91", isOnline: true },
  { username: "hillsam", isOnline: true },
  { username: "monosurfer", isOnline: true },
];

const usernamesList = users.map((usersObj) => {
  return usersObj.username.toUpperCase();
});

// console.log(usernamesList.join(', '));

// violin_91, hillsam and 1 more online

let onlineUsers = 0;

let onlineUsersList = [];

for (let i = 0; users.length > i; i++) {
  if (users[i].isOnline === true) {
    onlineUsers++;
    onlineUsersList.push(users[i].username);
  }
}

// "<username1>, <username2> and <remainingUserCount> more online"
// if (onlineUsers >= 2) {
//   console.log(
//     `${userList[0]}, ${userList[1]} and ${onlineUsers - 2} more online`
//   );
// }

// for (let user of users) {
//   if (user.isOnline) {
//     onlineUsers++;
//   }
// }

/*
თუ 2-ზე მეტი მომხმარებელია online, "<username1>, <username2> and <remainingUserCount> more online".

თუ არცერთი მომხმარებელია online, "No one online".
თუ 1 მომხმარებელია online, "<username1> online".
თუ 2 მომხმარებელია online, "<username1> and <username2> online".
თუ 2-ზე მეტი მომხმარებელია online, "<username1>, <username2> and <remainingUserCount> more online".
*/

// string, boolean, number, object, array/list

// "emmet".toUpperCase()
// .length
// !, %
// !==, ===
