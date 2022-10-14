Feature: Home Page

    Home Page functionalities

    Scenario: Add To Cart
        Given I navigate to the shopping page 
        When I add a new element to the cart
        Then A pop up is properly displayed

    Scenario: Serach for an item
        Given I navigate to the shopping page 
        When I serach for the item 'Faded'
        And I click over the results
        Then Item details are displayed