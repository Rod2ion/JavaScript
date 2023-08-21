class Wallet {
    constructor(){
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amout){
        this._processDeposit(amout);
        this._balance += amout;
    }

    withdraw(amout){
        if(amout > this._balance){
            console.log('Not enough funds');
            return;
        }
        this._processWithdraw(amout);
        this._balance -= amout;
    }
    _processDeposit(amout){
        console.log(`Depositing ${amout}`);

        this._transactions.push({
            type: 'deposit',
            amout,
        });
    }
    _processWithdraw(amout){
        console.log(`Withdrawing ${amout}`);

        this._transactions.push({
            type: 'withdraw',
            amout,
        });
    }

    get balance(){
        return this._balance;
    }

    get transactions(){
        return this._transactions;
    }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance);
console.log(wallet.transactions);