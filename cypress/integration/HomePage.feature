Feature: Home Page

    Home Page functionalities

    Scenario: Add To Cart
        Given An ecommerce page
        When Try to add a element to the cart
        Then A pop up is properly displayed


    Scenario: Serach for an item
    Given An ecommerce page
    When Serach for an item
    |name   |
    |Faded  |
    And click over the results
    Then Item details are displayed