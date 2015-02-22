
var accounts = {

  checking: {
    balance: 0,
    element: '#balance1',
    deposit: function(amount) {
      common_deposit(amount, "checking");
    },
    withdraw: function (amount) {

    }
  },

  savings: {
    balance: 0,
    element: '#balance2',
    deposit: function (amount){
      common_deposit(amount, "savings");
    },
    withdraw: function (amount) {
      
    }
  },
  

};

var common_deposit = function (amount, account) {
  var $newBalance = accounts[account].balance + amount;
  $(accounts[account].element).text('$' + $newBalance); 
  accounts[account].balance = $newBalance;
};



$('#checkingDeposit').on('click', function() {
  var $checkingDepositAmount = parseInt($('#checkingAmount').val());
  accounts.checking.deposit($checkingDepositAmount);
  $('#checkingAmount').val("");
});

$('#savingsDeposit').on('click', function() {
  var $savingsDepositAmount = parseInt($('#savingsAmount').val());
  accounts.savings.deposit($savingsDepositAmount);
  $('#savingsAmount').val("");
});


