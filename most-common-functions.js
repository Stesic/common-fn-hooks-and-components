//// DEEP EQUAL OBJECT COMPARE //////////////////////////

const o1 = {
  question: null,
  answer: 42,
  info: { name: "Jon", lastname: "Jones" },
};
const o2 = {
  question: null,
  answer: 42,
  fullname: { name: "Jon", lastname: "Jones" },
};
const o3 = {
  question: null,
  answer: 42,
  fullname: { name: "Jon", lastname: "Bones" },
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === "object";
}

console.log(deepEqual(o1, o2)); // true
console.log(deepEqual(o1, o3)); // false

////////////////////////////////////////////////////
