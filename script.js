const byteSize = (str) => {
 let size = Buffer.from(str).length; 
  return size; 
};

Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
