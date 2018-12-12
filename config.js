const launchOptionForLambda = [
    '--no-sandbox',
    '--disable-gpu',
    '--single-process',
];

const gympassURL = "https://www.gympass.com/pessoas/entrar";
const gympassTokenURL = "https://www.gympass.com/end-user/br/daily-token";
const bluefitURL = "https://www.bluefit.com.br/gympass";
const gympassLogin = "gympass@login.com";
const gympassPassword = "GymPassPassword";
const bluefitCPF = "MyCPF";

var browser = undefined;

module.exports = {
    launchOptionForLambda,
    browser,
    gympassURL,
    gympassTokenURL,
    bluefitURL,
    gympassLogin,
    gympassPassword,
    bluefitCPF
};
