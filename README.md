# localStorage
Working with the localStorage Object.


Registration, login, and profile block form should be developed.

All data goes through localStorage. The main points that should work are:

- During registration, data is saved in localStorage. Before adding a new user, we check if we already have a user with the same email, if yes, then do not add it. All data should be validated by regular expressions.
- During login, check if all fields are filled in and if the login and password are correct. If something is wrong, display the appropriate message. All data is taken from localStorage.
- If the login and password are correct, then go to the profile block.
- When Sign Out is clicked, go back to the Sign In block.
