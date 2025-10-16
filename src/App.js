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
  }
}

export default App;
