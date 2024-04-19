#!/usr/bin/env node 

import inquirer from "inquirer";
const ans: {
    sentence :"any"
} = await inquirer.prompt({
name : "sentence",
type : "input",
 message : "enter a sentence then we will count it\n"
})
const word = ans.sentence.trim().split(" ");
console.log (word)
console.log(`you have writed ${word.length} words`);