this.desc = 'Sou eu... :P';
console.log(this);

const func = function () {
  console.log(this === global);
}
func();

const arrowFunc = () =>
  console.log(this, this === module.exports);
  arrowFunc();
