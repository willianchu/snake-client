const sliding = (loop) => {
  const string = "Vancouver_is_Awesome_Lighthouse_Labs";
  while (loop > string.length) {
    loop -= string.length;
  }
  // return only 3 characters from position loop
  return `Name: ${string.slice(loop, loop + 3)}`;
};

module.exports =  {sliding};

