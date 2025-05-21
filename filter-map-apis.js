const discordUsers = [
  { username: "mailbox_2", isOnline: true },
  { username: "Leanne", isOnline: false },
];

const onlineUsers = discordUsers
  .filter((userValue) => userValue.isOnline)
  .map((userValue) => userValue.username);

const onlineUserCount = onlineUsers.length;

console.log(onlineUsers)

const response = await fetch(
  "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
);

const data = await response.json();

// console.log(data)
