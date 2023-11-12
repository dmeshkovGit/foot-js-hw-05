const getTotalBalanceByGender = (users, gender) => {
        let total = 0;
    for (const user of users) {
        if (user.gender === gender) {
            total += user.balance;
        }
    }
    return total;
    
    // Не зміг розібратися чому метод reduce повертає undefined, тому вирішив задачу методом forof.
    
//     users.reduce((totalBalance, user) => {
//     if (user.gender === gender) {
//         return  totalBalance += user.balance 
//     }
// }, 0);
}

const allUsers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863