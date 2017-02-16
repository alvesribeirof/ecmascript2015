this.desc = 'Sou o module.exports... :P';
const obj = {desc: 'Sou o obj... :P'};

const func = function () {
  console.log(this);
}
func();

const funcBind = func.bind(obj);
funcBind();

const arrowFunc = () => console.log(this);
arrowFunc();

const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();
