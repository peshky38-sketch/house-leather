"""
Abstractions.
Bank Class→
deposits, withdrawl,
show account.
getter and setter, →
→ easy to scale function <understing>
_______________

→ Login account
→ Create account
→ Deposit
→ Withdrawal
→ account balance

"""


class BankAccount:

    def __init__(self, name, balance, account_no):
        self.name = name
        self.account_no = account_no
        self._balance = 0
        self.balance = balance

    @property
    def balance(self):
        print("somebody tried to read rachels balance")
        return self._balance

    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Ensure you pass a number for new balance")
            return

        if value < 0:
            print("Ensure new balance must not be less than 0")
            return

        self._balance = value

    def deposit(self, amount):
        if not isinstance(amount, (int, float)):
            print("Deposit amount must be a number")
            return

        if amount <= 0:
            print("Deposit amount must be greater than 0")
            return

        self.balance += amount

    def withdrawal(self, amount):
        if not isinstance(amount, (int, float)):
            print("Withdrawal amount must be a number")
            return

        if amount <= 0:
            print("Withdrawal amount must be greater than 0")
            return

        if amount > self.balance:
            print("Insufficient funds")
            return

        self.balance -= amount

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


rachel = BankAccount(name="Rachel Gathoni", balance=0, account_no="223344226")
print("Rachel balance", rachel.balance)
rachel.deposit(5000)
rachel.withdrawal(2000)
rachel.show_account_details()
print("It is easily accessible")
