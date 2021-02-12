$(document).ready(function() {
    function displayProblem() {
        $("#answer-button").removeAttr("hidden");
        var selectedProblem = $("#problem-num").val();
        // Checks which problem is selected
        switch (selectedProblem) {

            // Problem 1
            case "problem1":
                // Display title
                $("#practice-code-title").html("<u>Problem 1:</u>");
                // Display sample code
                $("#practice-code").html(
                    "class BankAccount:\n" +
                    "    def __init__ (self, accountNumber):\n" +
                    "        self.accountNumber = accountNumber\n" +
                    "        self.balance = 0\n" +
                    "\n" +
                    "    def deposit(self, userInput, amount):\n" +
                    "        if (self.accountNumber != userInput):\n" +
                    "            print(\"Invalid account number!\")\n" +
                    "        else:\n" +
                    "            balance += amount\n" +
                    "\n" +
                    "    def withdraw(self, userInput, amount):\n" +
                    "        if (self.accountNumber != userInput):\n" +
                    "            print(\"Invalid account number!\")\n" +
                    "        else:\n" +
                    "            balance -= amount\n" +
                    "\n" +
                    "    def displayBalance(self):\n" +
                    "        print(self.balance)\n" +
                    "\n" +
                    "\n" +
                    "myAccount = BankAccount(1234)\n" +
                    "myAccount.deposit(1234, 500)\n" +
                    "myAccount.withdraw(1234, 200)\n" +
                    "myAccount.displayBalance()"
                );
                // Display output
                $("#practice-code-output").html(
                    "<u>Output:</u><br>\n" +
                    "Traceback (most recent call last):<br>\n" +
                    "&emsp;File \"/home/main.py\", line 23, in &lt;module&gt;<br>\n" +
                    "&emsp;&emsp;myAccount.deposit(1234, 500)<br>\n" +
                    "&emsp;File \"/home/main.py\", line 10, in deposit<br>\n" +
                    "&emsp;&emsp;balance += amount<br>\n" +
                    "UnboundLocalError: local variable 'balance' referenced before assignment<br>"
                );
                // Display answer
                $("#answer-button").click(function() {
                    $("#answer-summary").html(
                        "<h1>Answer:</h1>\n" +
                        "The variable 'balance' was referenced as a local variable in the methods 'deposit' and 'withdraw'." +
                        "It should be referenced as the field variable 'self.balance'."
                    );
                    $("#answer-code").html(
                        "class BankAccount:\n" +
                        "    def __init__ (self, accountNumber):\n" +
                        "        self.accountNumber = accountNumber\n" +
                        "        self.balance = 0\n" +
                        "\n" +
                        "    def deposit(self, userInput, amount):\n" +
                        "        if (self.accountNumber != userInput):\n" +
                        "            print(\"Invalid account number!\")\n" +
                        "        else:\n" +
                        "            <b>self.balance += amount\n</b>" +
                        "\n" +
                        "    def withdraw(self, userInput, amount):\n" +
                        "        if (self.accountNumber != userInput):\n" +
                        "            print(\"Invalid account number!\")\n" +
                        "        else:\n" +
                        "            <b>self.balance -= amount\n</b>" +
                        "\n" +
                        "    def displayBalance(self):\n" +
                        "        print(self.balance)\n" +
                        "\n" +
                        "\n" +
                        "myAccount = BankAccount(1234)\n" +
                        "myAccount.deposit(1234, 500)\n" +
                        "myAccount.withdraw(1234, 200)\n" +
                        "myAccount.displayBalance()"
                    );
                });
                break;

            // Problem 2
            case "problem2":
                //Display title
                $("#practice-code-title").html("<u>Problem 2:</u>");
                //Display sample code
                $("#practice-code").html(
                    "class Calculator:\n" +
                    "    def add(num1, num2):\n" +
                    "        return num1 + num2\n" +
                    "        \n" +
                    "    def subtract(num1, num2):\n" +
                    "        return num1 - num2\n" +
                    "        \n" +
                    "    def multiply(num1, num2):\n" +
                    "        return num1 * num2\n" +
                    "        \n" +
                    "    def divide(num1, num2):\n" +
                    "        return num1 / num2\n" +
                    "       \n" +
                    "        \n" +
                    "myCalculator = Calculator\n" +
                    "\n" +
                    "x = 3\n" +
                    "y = input(\"Enter an integer number: \")\n" +
                    "\n" +
                    "x = myCalculator.add(x, y)\n" +
                    "y = myCalculator.subtract(x, y+2)\n" +
                    "x = myCalculator.multiply(x, 5)\n" +
                    "y = myCalculator.divide(x, y)"
                );
                // Display input
                $("#practice-code-input").html(
                    "<u>Input:</u><br>\n" +
                    "5<br><br>"
                );
                // Display output
                $("#practice-code-output").html(
                    "<u>Output:</u><br>\n" +
                    "Traceback (most recent call last):<br>\n" +
                    "&emsp;File \"/home/main.py\", line 20, in &lt;module&gt;<br>\n" +
                    "&emsp;&emsp;x = myCalculator.add(x, y)<br>\n" +
                    "&emsp;File \"/home/main.py\", line 4, in add<br>\n" +
                    "&emsp;&emsp;return num1 + num2<br>\n" +
                    "TypeError: unsupported operand type(s) for +: 'int' and 'str'<br>"
                );
                // Display answer
                $("#answer-button").click(function() {
                    $("#answer-summary").html(
                        "<h1>Answer:</h1>\n" +
                        "Any input from the user is initially a string. So, the input should be casted to an integer " +
                        "before any operations can be performed on it."
                    );
                    $("#answer-code").html(
                        "class Calculator:\n" +
                        "    def add(num1, num2):\n" +
                        "        return num1 + num2\n" +
                        "        \n" +
                        "    def subtract(num1, num2):\n" +
                        "        return num1 - num2\n" +
                        "        \n" +
                        "    def multiply(num1, num2):\n" +
                        "        return num1 * num2\n" +
                        "        \n" +
                        "    def divide(num1, num2):\n" +
                        "        return num1 / num2\n" +
                        "       \n" +
                        "        \n" +
                        "myCalculator = Calculator\n" +
                        "\n" +
                        "x = 3\n" +
                        "<b>y = int(input(\"Enter an integer number: \"))</b>\n" +
                        "\n" +
                        "x = myCalculator.add(x, y)\n" +
                        "y = myCalculator.subtract(x, y+2)\n" +
                        "x = myCalculator.multiply(x, 5)\n" +
                        "y = myCalculator.divide(x, y)"
                    );
                });
                break;
            default:
                // Display nothing if problem doesn't exist
                $("#practice-code-title").html("");
                $("#practice-code").html("");
                $("#practice-code-output").html("");
        }
    }

    // Set "Go" button to display the problem when clicked, and removes the answer
    $( "#go-button" ).on( "click", function() {
        $("#answer-button").attr("hidden");
        $("#answer-summary").html("");
        $("#answer-code").html("");
        displayProblem();
    });
});