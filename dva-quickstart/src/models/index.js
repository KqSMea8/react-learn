const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const models = [];
for (let i = 0; i < keys.length; i += 1) {
  models.push(context(keys[i]));
}

// models.push(require('./report/reportLoan'));
// models.push(require('./report/reportRepayment'));

export default models;
