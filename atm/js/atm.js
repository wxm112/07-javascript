
var accounts = {

  checking: {
    balance: 0,
    element: '#balance1',
    deposit: function(amount) {
      common_deposit(amount, "checking");
    },
    withdraw: function (amount) {
      common_withdraw(amount, "checking");
    }
  },

  savings: {
    balance: 0,
    element: '#balance2',
    deposit: function (amount){
      common_deposit(amount, "savings");
    },
    withdraw: function (amount) {
      common_withdraw(amount, "savings");
    }
  }
  
};

var common_deposit = function (amount, account) {
  var $newBalance = accounts[account].balance + amount;
  $(accounts[account].element).text('$' + $newBalance); 
  accounts[account].balance = $newBalance;
};

var swapAccount = function (account) {
  if (account === "checking") {
    return "savings";
  } else if (account === "savings") {
    return "checking";
  }
};

var common_withdraw = function(amount, account) {
  var $thisBalance = accounts[account].balance;
  var $thatBalance = accounts[swapAccount(account)].balance;
  if (amount > $thisBalance + $thatBalance) {
    return
  } else {
      if (amount > $thisBalance) {
        $(accounts[account].element).text('$' + 0);
        accounts[account].balance = 0;
        var $newBalance = $thatBalance - (amount - $thisBalance);
        $(accounts[swapAccount(account)].element).text('$' + $newBalance);
        accounts[swapAccount(account)].balance = $newBalance;
      } else {
          var $newBalance = $thisBalance - amount;
          $(accounts[account].element).text('$' + $newBalance);
          accounts[account].balance = $newBalance;
        }
    };
};



$('#checkingDeposit').on('click', function() {
  var $checkingDepositAmount = parseInt($('#checkingAmount').val());
  accounts.checking.deposit($checkingDepositAmount);
  $('#checkingAmount').val("");
});

$('#checkingWithdraw').on('click', function() {
  var $checkingWithdrawAmount = parseInt($('#checkingAmount').val());
  accounts.checking.withdraw($checkingWithdrawAmount);
  $('#checkingAmount').val("");
});

$('#savingsDeposit').on('click', function() {
  var $savingsDepositAmount = parseInt($('#savingsAmount').val());
  accounts.savings.deposit($savingsDepositAmount);
  $('#savingsAmount').val("");
});

$('#savingsWithdraw').on('click', function() {
  var $savingsWithdrawAmount = parseInt($('#savingsAmount').val());
  accounts.savings.withdraw($savingsWithdrawAmount);
  $('#savingsAmount').val("");
});


