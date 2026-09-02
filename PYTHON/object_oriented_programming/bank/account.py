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
        self.balance = balance
        self.account_no = account_no

    # latter change gee
    def get_balance(self):
        pass

    # setter
    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.name}")
        print(f"Balance {self.balance}")
        print(f"Account No {self.account_no}")


rachel = BankAccount(name="Rachel Gathoni", balance=0, account_no="223344226")

rachel.show_account_details()
