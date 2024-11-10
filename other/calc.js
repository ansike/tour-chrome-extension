// 养老
const oldBase = 21228;
const insuranceOldRate = 0.08;

// 医疗
const insuranceMedicalBaseBefore7 = 21228;
const insuranceMedicalBaseAfter7 = 22555;
const insuranceMedicalRate = 0.02;

// 失业
const undeploymentBase = 21228;
const insuranceUndeploymentRate = 0.004;

// 公积金
const accumulationFundBaseBefore7 = 29353;
const accumulationFundBaseAfter7 = 31362;
const accumulationFundRate = 0.12;

const base = 5000;

const principleMap = [
  {
    min: 0,
    max: 36000,
    rate: 0.03,
    deduct: 0,
  },
  {
    min: 36000,
    max: 144000,
    rate: 0.1,
    deduct: 2520,
  },
  {
    min: 144000,
    max: 300000,
    rate: 0.2,
    deduct: 16920,
  },
  {
    min: 300000,
    max: 420000,
    rate: 0.25,
    deduct: 31920,
  },
];

function main(salarys, taxs, month) {
  // 当月工资
  const curSalary = salarys[month - 1];
  // 当月的保险+公积金
  const insurance = calcInsurance(curSalary, month);
  //   累计工资
  const sumSalary = salarys.slice(0, month).reduce((a, b) => a + b, 0);

  //   累计计税工资
  let insuranceNum = insurance.total * month;

  if (month > 6) {
    const beforeInsurance = calcInsurance(salarys[0], 1);
    console.log("beforeInsurance", beforeInsurance);
    console.log("insurance", insurance);
    insuranceNum = beforeInsurance.total * 6 + insurance.total * (month - 6);
  }

  const calcSalary = sumSalary - insuranceNum - base * month;

  console.log(
    `累计工资${sumSalary},减去社保公积金${insuranceNum}，减去${
      base * month
    }基数`,
    calcSalary,
  );

  const principle = principleMap.find((item) => {
    return calcSalary > item.min && calcSalary <= item.max;
  });
  console.log("principle", principle);

  const alreadyTax = taxs.slice(0, month - 1).reduce((a, b) => a + b, 0);
  const principleTax =
    calcSalary * principle.rate - principle.deduct - alreadyTax;
  console.log(
    `本月税额 ${principleTax}, 扣除数${principle.deduct} 已交税额 ${alreadyTax}`,
  );

  return {
    calcSalary,
    principleTax,
    insurance,
  };
}

const calcInsurance = (salary, month) => {
  let insuranceBaseMedical = insuranceMedicalBaseBefore7;
  let accumulationFundBase = accumulationFundBaseBefore7;
  if (month < 7) {
    insuranceBaseMedical = insuranceMedicalBaseBefore7;
    accumulationFundBase = accumulationFundBaseBefore7;
  } else {
    insuranceBaseMedical = insuranceMedicalBaseAfter7;
    accumulationFundBase = accumulationFundBaseAfter7;
  }
  // 社保
  const insuranceOld = (salary > oldBase ? oldBase : salary) * insuranceOldRate;

  const insuranceMedical =
    (salary > insuranceBaseMedical ? insuranceBaseMedical : salary) *
    insuranceMedicalRate;
  const insuranceUndeployment =
    (salary > undeploymentBase ? undeploymentBase : salary) *
    insuranceUndeploymentRate;

  // 公积金，我的基数按最大走
  const accumulationFund = accumulationFundBase * accumulationFundRate;

  return {
    insuranceOld,
    insuranceMedical,
    insuranceUndeployment,
    accumulationFund,
    // 总和
    total:
      insuranceOld +
      insuranceMedical +
      insuranceUndeployment +
      accumulationFund,
  };
};

// const salarys = [27500, 31188, 27500, 30962, 51738, 32059, 28007, 28000];
// const taxs = [503, 702, 1676, 2023, 4100, 2133, 2660, 3400];

// 收入合计 452465
// 申报合计 42377.83
const salarys = [
  38000.01, 41688.33, 38011.56, 40962.46, 61738.12, 42059.02, 38007.11,
  38000.43,
];
const taxs = [
  818.09, 2484.72, 2728.15, 3023.24, 7375.82, 6265.79, 5401.89, 5400.54,
];

const reward = 114021.03;
const rewardInterest = reward * 0.1 - 2520;

// 114021.03/12 = 9500
// 114021.03*0.1-2520 = 8882.1
// 税 8882.1

console.log(main(salarys, taxs, 8));

console.log("收入合计", salarys.reduce((prev, cur) => prev + cur, 0) + reward);
console.log("税额合计", taxs.reduce((prev, cur) => prev + cur, 0) + rewardInterest);
