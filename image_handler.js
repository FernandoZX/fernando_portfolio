const im = require('imagemagick');
const fs = require('fs')
const path = require("path");

// Recursive function to get files
function getFiles(dir, files = []) {
  // Get an array of all files and directories in the passed directory using fs.readdirSync
  const fileList = fs.readdirSync(dir)
  // Create the full path of the file/directory by concatenating the passed directory and file/directory name
  for (const file of fileList) {
    const name = `${dir}/${file}`
    // Check if the current file/directory is a directory using fs.statSync
    if (fs.statSync(name).isDirectory()) {
      // If it is a directory, recursively call the getFiles function with the directory path and the files array
      getFiles(name, files)
    } else {
      // If it is a file, push the full path to the files array
      files.push(name)
    }
  }
  return files
}

const filesInTheFolder = getFiles('assets/images/programing_lang');


// console.log(filesInTheFolder);
/*
filesInTheFolder.forEach((file) => {
  var extension = path.extname(file);
  var name = path.parse(file).name  
  im.resize({
    srcPath: file,
    dstPath: 'assets/images/programing_lang/' + fs.rename(file, name.concat('-resized', extension), function (err) {
      if (err) console.log('ERROR: ' + err);
    }),
    width: 256
  }, function (err, stdout, stderr) {
    if (err) throw err;
    console.log('resized kittens.jpg to fit within 256x256px');
  });
  
});
*/

im.resize({
  srcPath: 'java.png',
  dstPath: 'java.png',
  width: 200
}, function (err, stdout, stderr) {
  if (err) throw err;
  console.log(err);
  console.log('resized kittens.jpg to fit within 256x256px');
});

im.convert(
  ['java.png', '-flatten', '-transparent', 'white','java.png'],
  function (err, stdout, stderr) {
    if (err) throw err;
    console.log(err);
    console.log('to transparent background');
  },
);