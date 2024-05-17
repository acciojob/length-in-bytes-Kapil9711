const byteSize = (str) => {
 let size = Buffer.from(str).length; 
  return size; 
};

Do not change the code below
const str = window.prompt("Enter some string.");
window.alert(byteSize(str));
