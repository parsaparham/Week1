const greet = async (name) => {
  return 'Hello ${name}, welcome to Web3';
};

const main = async () => {
  const message = await greet("Mohamad");
  console.log(message);
};

main();
