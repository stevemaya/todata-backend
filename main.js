const getTodoName = function(str) {
  return str.text;
};

const getPriority = function(num) {
  return num.priority;
};

const isComplete = function(bool) {
  return bool.complete;
};

const notComplete = function(bool) {
  return !bool.complete;
};

const isHighPriority = function(num) {
  return num.priority === 2;
};

const lowPriority = function(num) {
  return num.priority === 1;
};

const bothNamesAndPriorities = function(obj) {
  let newPriority = '';
  obj.priority === 2 ? newPriority = 'High' : newPriority = "Low";
  return obj.text + ' - ' + newPriority;
};

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(names) {
  return names.map(getTodoName);
};

const priorities = function(nums) {
  return nums.map(getPriority);
};

const namesAndPriorities = function(both) {
  return both.map(bothNamesAndPriorities);
};

const justComplete = function(todos) {
  return todos.filter(isComplete);
};

const priority2Only = function(num) {
  return num.filter(isHighPriority);
};

const priority1Only = function(num) {
  return num.filter(lowPriority);
};

const justNotComplete = function(todos) {
  return todos.filter(notComplete);
};



// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justComplete,
  priority2Only,
  priority1Only,
  justNotComplete,
}
