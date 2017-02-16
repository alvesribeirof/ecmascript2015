function click(callback = function () {}) {
  callback();
}

click();// OK
click(undefined); //OK
click(null);
