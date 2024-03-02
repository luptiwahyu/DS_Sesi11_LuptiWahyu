@digital-skola @login
Feature: Swag Labs - Login - Negative
  Background: User on the login page
    Given Lupti is on the login page

  @negative
  Scenario: As a locked_out_user, i should get error message
    When Lupti login with "locked_out_user" credential
    Then Lupti should see error "Epic sadface: Sorry, this user has been locked out."
