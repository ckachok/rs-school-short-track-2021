/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objFiles = {};
  const arrNewNames = [];

  for (let i = 0; i < names.length; i++) {
    const currName = names[i];

    if (objFiles[currName]) {
      objFiles[currName] += 1;
    } else {
      objFiles[currName] = 1;
    }

    if (arrNewNames.includes(currName)) {
      const newName = `${currName}(${objFiles[currName] - 1})`;
      arrNewNames.push(newName);
      objFiles[newName] = 1;
    } else {
      arrNewNames.push(currName);
    }
  }
  return arrNewNames;
}

module.exports = renameFiles;
