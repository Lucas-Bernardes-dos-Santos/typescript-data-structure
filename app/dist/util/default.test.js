import chalk from "chalk";
export default class Test {
    static printLabel() {
        console.log(`Testing Result: ${chalk.italic('Expected value')} / ${chalk.italic('Amout received')}`);
    }
    static printTitleTest(title) {
        console.log(`${chalk.rgb(235, 179, 16)(`${title}`)}`);
    }
}
