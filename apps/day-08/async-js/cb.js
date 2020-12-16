console.log('callback');

const getUser = (username, cb) => {
  console.log('  getUser started. please wait...');

  setTimeout(() => {
    const user = users.find(
      u => u.name === username
    );

    if (user) {
      cb(null, user);
    } else {
      cb('user not found', null);
    }

  }, 5000);
};

console.log('begin');

const username = 'ram1';
// retrieve user object
getUser(username, (error, user) => {
  if (error) {
    console.log('Error:', error);
    return;
  }

  // dependent on the result of getUser() call
  console.log('  user:', user);
  console.log('  get posts for the user.');
});

// independent on the result of getUser() call
console.log('  perform some other operation..');

console.log('end');