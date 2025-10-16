import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync();
    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(){

  }
}

export default App;
