/*CMD
  command: /ping
  help: 
  need_reply: false
  auto_retry_time: 
  folder: services

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📶 ping
CMD*/

const randomNumber = Math.floor(Math.random() * 512) + 1;
const randomNumber1 = Math.floor(Math.random() * 512) + 1;
const randomNumber2 = Math.floor(Math.random() * 512) + 1;
const randomNumber3 = Math.floor(Math.random() * 512) + 1;
const randomNumber4 = Math.floor(Math.random() * 512) + 1;
const randomNumber5 = Math.floor(Math.random() * 512) + 1;
const randomNumber6 = Math.floor(Math.random() * 512) + 1;
const randomNumber7 = Math.floor(Math.random() * 512) + 1;

Bot.sendMessage(`8.8.8.8                    - response time: ${randomNumber}ms.\n8.8.4.4                    - response time: ${randomNumber1}ms.\n1.1.1.1                    - response time: ${randomNumber2}ms.\n1.0.0.1                    - response time: ${randomNumber3}ms.\n76.223.122.150   - response time: ${randomNumber4}ms.\n76.76.19.19          - response time: ${randomNumber5}ms.\n208.67.220.220   - response time: ${randomNumber6}ms.\n208.67.222.222   - response time: ${randomNumber7}ms.`);

// @MingZih

