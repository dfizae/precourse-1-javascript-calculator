import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync();
    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input){

    const customDeli = input.match(/^\/\/(.)\\n(.*)$/);
    let deli = [":", ","];
    let numStr = "";

    if(customDeli){
      deli.push(customDeli[1]);
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
  
  return numbers.reduce((a, b) => a + b, 0);

  }
}

export default App;
