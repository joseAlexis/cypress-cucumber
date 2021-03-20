Feature: Sign In Page
    Sign in functionalities

    Scenario: Create Account
        Given An ecommerce page
        When Creating an Account
        And Completing the form
        Then An access account is created
        # Getting error: The Test Runner unexpectedly exited via a exit event with signal SIGSEGV
        ## https://github.com/cypress-io/cypress/issues/9208
