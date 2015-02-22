
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

var changeColor = function () {
  var array = $('div.balance');
  $.each(array, function (i, account) {
    if ($(account).text() === "$0") {
      $(account).addClass('zero');
    } else {
      $(account).removeClass('zero');
    }
  });
};

var common_deposit = function (amount, account) {
  var $newBalance = accounts[account].balance + amount;
  $(accounts[account].element).text('$' + $newBalance); 
  accounts[account].balance = $newBalance;
  changeColor();
};

var swapAccount = function (account) {
  return account === "checking" ? "savings" : "checking";
};

var common_withdraw = function(amount, account) {
  var currAcct = accounts[account];
  var otherAcct = accounts[swapAccount(account)];
  if (amount > currAcct.balance + otherAcct.balance) {
    return;
  }
  currAcct.balance -= amount;
  if(currAcct.balance < 0) {
    otherAcct.balance += currAcct.balance;
    currAcct.balance = 0;
  }

  $(currAcct.element).text('$' + currAcct.balance);
  $(otherAcct.element).text('$' + otherAcct.balance);
  changeColor();
};

$(document).ready(function () {
  var helper = function(elementId, accountFunction) {
      var amount = parseInt($(elementId).val());
      accountFunction(amount);
      $(elementId).val("");
  };

  $('#checkingDeposit').on('click', function() {
    helper('#checkingAmount', accounts.checking.deposit);
  });

  $('#checkingWithdraw').on('click', function() {
    helper('#checkingAmount', accounts.checking.withdraw);
  });

  $('#savingsDeposit').on('click', function() {
    helper('#savingsAmount', accounts.savings.deposit);
  });

  $('#savingsWithdraw').on('click', function() {
    helper('#savingsAmount', accounts.savings.withdraw);
  });
});


