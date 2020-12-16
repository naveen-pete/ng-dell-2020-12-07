console.log('promise');

const getUser = function (userName) {
  console.log('promise - getUser() started.');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        u => u.name === userName
      );

      if (!user) {
        reject('Could not find user.');
      } else {
        resolve(user);
      }

    }, 3000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve, reject) => {
    console.log('getPosts() started.');
    setTimeout(() => {
      const postsForUser = posts.filter(
        p => p.userId === userId
      );

      if (postsForUser.length <= 0) {
        reject('Could not find posts for user');
      } else {
        resolve(postsForUser);
      }

    }, 3000);
  });
}


console.log('begin');

getUser('krish')
  .then((user) => {
    console.log('user:', user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log('posts for user:', posts);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// independent on the result of getUser() call
console.log('perform some other operation..');

console.log('end');