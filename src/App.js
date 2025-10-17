import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해주세요.\n");
    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input){

    if(!input || input.trim() === "") return 0;

    const customDeli = input.match(/^\/\/(.*)\\n(.*)$/);
    let deli = [":", ","];
    let numStr = input;

    if(customDeli){
      if(customDeli[1].length == 1){
        deli.push(customDeli[1]);
      }
      else{
        let multiDeli = customDeli[1].split('');
        for(let x of multiDeli){
          deli.push(x);
        }
      }
      numStr = customDeli[2];
    }

    const seperate = numStr.split(new RegExp(`[${deli.join("")}]`));
    
    let numbers = seperate.map((n) => {
      let num = Number(n);
      if(num < 0 || isNaN(num)){
        throw new Error("[ERROR]");
      }
      return num;
    });
  
  return numbers.reduce((a, b) => a+b, 0);

  }
}

export default App;
