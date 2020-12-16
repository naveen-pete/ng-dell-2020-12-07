console.log('sync js');

const getUser = (username) => {
  // code to get the user from the server
  const user = users.find(
    u => u.name === username
  );

  return user;
};

console.log('begin');

const username = 'ram';
// 1. retrieve user object
const user = getUser(username);               // 5 seconds
// dependent on the result of getUser() call
console.log('  user:', user);
console.log('  get posts for the user.');

// independent on the result of getUser() call
console.log('  perform some other operation..');

console.log('end');