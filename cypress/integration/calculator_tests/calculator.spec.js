/// <reference types="cypress" />

context('Automated Tests for calculator with cypress', () => {
    describe('Calculator', () => {

        beforeEach(() => {
            cy.visit("index.html");
        });

        //bad inputs
        it('Should not allow leading zeros as valid input', function(){
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0');
        });

        it('Should not allow a zero before another digit of input', function(){
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num4').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','4');
        });

        it('Do not allows a zero before another digit of input for a second operand', function(){
            cy.get('#num5').click();
            cy.get('#multiply').click();
            cy.get('#num0').click();
            cy.get('#num6').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','30');
        });

        it('Clear the screen after doing no calculations', function(){
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        it('Clear the screen after inserting a negative integer', function(){
            cy.get('#minus').click();
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        it('Clear the screen after inserting a positive integer', function(){
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        it('Allow clear to be pressed multiple times', function(){
            cy.get('#num5').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
            cy.get('#num3').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
            cy.get('#num4').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        it('Should clear after inserting a large negative integer', function(){
            cy.get('#minus').click();
            cy.get('#num6').click();
            cy.get('#num8').click();
            cy.get('#num9').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#num6').click();
            cy.get('#num2').click();
            cy.get('#num8').click();
            cy.get('#num1').click();
            cy.get('#num0').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        it('Should clear after inserting a large positive integer', function(){
            cy.get('#num6').click();
            cy.get('#num8').click();
            cy.get('#num9').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#num6').click();
            cy.get('#num2').click();
            cy.get('#num8').click();
            cy.get('#num1').click();
            cy.get('#num0').click();
            cy.get('#clear').click();
            cy.get('#display').should('have.value','');
        });

        //ADDITION - adding two positive numbers
        it('Should be able to add two positive integers numbers', function() {
            cy.get('#num7').click(); 
            cy.get('#add').click();
            cy.get('#num3').click();
            cy.get('#num1').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','38');
        });

        it('Add a negative integer and zero', function() {
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#add').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-2');
        });

        it('Add zero and a positive integer', function() {
            cy.get('#num2').click(); 
            cy.get('#add').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','2');
        });

        it('Add zero and a positive integer', function() {
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#add').click();
            cy.get('#num7').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','5');
        });

        it('Add two large positive integers', function() {
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num3').click(); 
            cy.get('#num4').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#add').click();
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','10034500');
        });

        it('Adds a positive integer to the results of a previous operation', function() {
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#num4').click();
            cy.get('#num0').click();
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-510');
            cy.get('#add').click();
            cy.get('#num5').click()
            cy.get('#num6').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','50');
        });

        it('Adds a large integer to a previous result', function() {
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#num7').click();
            cy.get('#num8').click();
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num9').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-512');
            cy.get('#add').click();
            cy.get('#num1').click()
            cy.get('#num9').click();
            cy.get('#num3').click();
            cy.get('#num4').click();
            cy.get('#num9').click();
            cy.get('#num6').click();
            cy.get('#num7').click();
            cy.get('#num8').click();
            cy.get('#num9').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','193496277');
        });

        //Adding All Numbers
        it('Should return 45 for 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0', function() {
            cy.get('#num1').click(); 
            cy.get('#add').click();
            cy.get('#num2').click()
            cy.get('#add').click();
            cy.get('#num3').click()
            cy.get('#add').click();
            cy.get('#num4').click()
            cy.get('#add').click();
            cy.get('#num5').click()
            cy.get('#add').click();
            cy.get('#num6').click()
            cy.get('#add').click();
            cy.get('#num7').click()
            cy.get('#add').click();
            cy.get('#num8').click()
            cy.get('#add').click();
            cy.get('#num9').click()
            cy.get('#add').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','45');
        });

        //substraction
        it('Subtracts two positive integers numbers', function() {
            cy.get('#num4').click(); 
            cy.get('#minus').click();
            cy.get('#num3').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','1');
        });

        it('Subtracts zero from a negative integer', function() {
            cy.get('#minus').click();
            cy.get('#num3').click(); 
            cy.get('#minus').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-3');
        });

        it('Subtracts zero from a positive integer', function() {
            cy.get('#num3').click(); 
            cy.get('#minus').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','3');
        });

        it('Subtracts an integer from the results for a previous operation', function() {
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-500');
            cy.get('#minus').click();
            cy.get('#num5').click()
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-5500');
        });

        it('The addition for a negative integer addend should be treated as a subtraction of a poisitive integer subtrahend', function() {
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#add').click();
            cy.get('#minus').click();
            cy.get('#num6').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-10');
        });

        it('The addition for a negative integer addend to another negative integer addend should be treated as a subtraction of a poisitive integer subtrahend', function() {
            cy.get('#minus').click();
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#add').click();
            cy.get('#minus').click();
            cy.get('#num6').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-110');
        });

        it('Subtracts two large integers', function() {
            cy.get('#num1').click();
            cy.get('#num2').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#num0').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#minus').click();
            cy.get('#num9').click()
            cy.get('#num7').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-85000000');
        });

        it('Subtracts a large integer from the results of a previous result', function() {
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-500');
            cy.get('#minus').click();
            cy.get('#num1').click()
            cy.get('#num2').click();
            cy.get('#num3').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#num6').click();
            cy.get('#num7').click();
            cy.get('#num8').click();
            cy.get('#num9').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-123457289');
        });

        //mulitiplication - Multiply two positive numbers
        it('Multiply two positive integers numbers', function() {
            cy.get('#num7').click(); 
            cy.get('#multiply').click();
            cy.get('#num3').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','21');
        });

        it('Multiply a integer multiplicand with zero', function() {
            cy.get('#num7').click(); 
            cy.get('#multiply').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0');
        });

        it('Multiply a negative integer multiplicand with a positive intger multiplier', function() {
            cy.get('#minus').click();
            cy.get('#num7').click(); 
            cy.get('#multiply').click();
            cy.get('#num3').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-21');
        });

        it('Multiply the result for a previous operation by a positive integer', function() {
            cy.get('#num1').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-1000');
            cy.get('#multiply').click();
            cy.get('#num1').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-10000');
        });

        it('Multiply two large integers', function() {
            cy.get('#num1').click(); 
            cy.get('#num3').click(); 
            cy.get('#num5').click(); 
            cy.get('#num4').click();
            cy.get('#num2').click();
            cy.get('#num1').click();
            cy.get('#num6').click();
            cy.get('#num0').click();
            cy.get('#multiply').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num3').click(); 
            cy.get('#num4').click(); 
            cy.get('#num5').click(); 
            cy.get('#num7').click();
            cy.get('#num6').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','343236337241600');
        });

        it('Should multiply the result for a previous operation by large integer', function() {
            cy.get('#num1').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-1000');
            cy.get('#multiply').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num3').click(); 
            cy.get('#num4').click(); 
            cy.get('#num5').click(); 
            cy.get('#num7').click();
            cy.get('#num6').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-25345760000');
        });

        it('Should multiply the result of a previous operation by zero when the previous result is zero', function() {
            cy.get('#minus').click();
            cy.get('#num9').click(); 
            cy.get('#multiply').click();
            cy.get('#num0').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0');
            cy.get('#multiply').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0');
        });

        // Division
        it('Divide two positive integers', function() {
            cy.get('#num7').click(); 
            cy.get('#divide').click();
            cy.get('#num2').click();
            cy.get('#num8').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0.25');
        });

        it('Divides 0 by a integer divisor', function() {
            cy.get('#num0').click(); 
            cy.get('#divide').click();
            cy.get('#num8').click()
            cy.get('#equal').click();
            cy.get('#display').should('have.value','0');
        });

        it('Divides a negative dividend by a positive divisor', function() {
            cy.get('#minus').click();
            cy.get('#num7').click(); 
            cy.get('#divide').click();
            cy.get('#num2').click();
            cy.get('#num8').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-0.25');
        });

        it('Should divide the result for a previous operation by a positive integer', function() {
            cy.get('#num1').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-1000');
            cy.get('#divide').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-0.5');
        });

        it('Returns NaN for division by 0', function() {
            cy.get('#num0').click(); 
            cy.get('#divide').click();
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','NaN');
        });

        it('Should divide the result for a previous operation by a large integer', function() {
            cy.get('#num1').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-1000');
            cy.get('#divide').click();
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-4e-7');
        });

        //Square root
        it('Return the square root for a postive integer', function() {
            cy.get('#num6').click(); 
            cy.get('#num4').click();  
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','8');
        });

        it('Allows multiple clicks of the square root operator', function() {
            cy.get('#num1').click();  
            cy.get('#num6').click();  
            cy.get('#sqrt').click(); 
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','2');
        });

        it('Return the square root for a large postive integer', function() {
            cy.get('#num2').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click();
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','5000000');
        });

        it('Return the square root of a zero as zero', function() { 
            cy.get('#num0').click(); 
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','0');
        });

        it('Square the root of the result for a previous operation', function() {
            cy.get('#num8').click();  
            cy.get('#add').click();
            cy.get('#num8').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','16');
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','4');
        });

        it('Should not allow the square root of a negative integer', function(){
            cy.get('#minus').click();
            cy.get('#num6').click();
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','NaN');
        });

        it('Return NaN for the square root of an empty display', function(){
            cy.get('#sqrt').click();
            cy.get('#display').should('have.value','NaN');
        });

        it('Returns NaN for the Plus/Minus of an empty display', function(){
            cy.get('#plus_minus').click();
            cy.get('#display').should('have.value','NaN');
        });

        it('Returns the calculation of the display with a negative result for one click of the plus/minus operator', function(){
            cy.get('#num9').click();
            cy.get('#add').click();
            cy.get('#num9').click();
            cy.get('#plus_minus').click();
            cy.get('#display').should('have.value','-18');
        });

        it('Return the calculation of the display with a positive result for two click of the plus/minus operator', function(){
            cy.get('#num3').click();
            cy.get('#add').click();
            cy.get('#num3').click();
            cy.get('#plus_minus').click();
            cy.get('#plus_minus').click();
            cy.get('#display').should('have.value','6');
        });

        it('Allow multiple clicks of the plus/minus operator', function(){
            cy.get('#num9').click();
            cy.get('#plus_minus').click();
            cy.get('#plus_minus').click();
            cy.get('#plus_minus').click();
            cy.get('#plus_minus').click();
            cy.get('#display').should('have.value','9');
        });

        it('Change the sign of the result for a previous operation', function() {
            cy.get('#num1').click(); 
            cy.get('#num5').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#add').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#num0').click(); 
            cy.get('#equal').click();
            cy.get('#display').should('have.value','3500');
            cy.get('#plus_minus').click();
            cy.get('#display').should('have.value','-3500');
        });

        // Percentage

        it('Return NaN for the percentage of an empty display', function(){
            cy.get('#Percent').click();
            cy.get('#display').should('have.value','NaN');
        });

        it('Allow multiple clicks for the percentage operator', function() { 
            cy.get('#num6').click();  
            cy.get('#Percent').click(); 
            cy.get('#Percent').click();
            cy.get('#display').should('have.value','0.0006');
        });

        it('Returns the percentage for a negative number', function() {
            cy.get('#minus').click(); 
            cy.get('#num6').click();   
            cy.get('#Percent').click();
            cy.get('#display').should('have.value','-0.06');
        });

        it('Returns the percentage for a positive number', function() {
            cy.get('#num1').click();  
            cy.get('#num6').click();   
            cy.get('#Percent').click();
            cy.get('#display').should('have.value','0.16');
        });

        it('Finds the percentage of the result for a previous operation', function() {
            cy.get('#num1').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#minus').click();
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','-500');
            cy.get('#Percent').click();
            cy.get('#display').should('have.value','-5');
        });

        it('Should return 900 for 00450 + 00450', function(){
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#add').click();
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num4').click();
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#equal').click();
            cy.get('#display').should('have.value','900');
          });

        //memory recall
        it('Returns Memory when memory recall operator is clicked', function() {
            cy.get('#MRC').click();
            cy.get('#display').should('have.value', '0');
        });

        it('Allows what is recall from memory to use in further operations', function() {
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#add').click(); 
            cy.get('#num7').click();
            cy.get('#num0').click();
            cy.get('#equal').click(); 
            cy.get('#clear').click();
            cy.get('#MRC').click();
            cy.get('#add').click(); 
            cy.get('#num1').click();
            cy.get('#num0').click();
            cy.get('#equal').click(); 
            cy.get('#display').should('have.value','280');
        });

        it('Replaces what is displayed to what is in memory', function() {
            cy.get('#num2').click(); 
            cy.get('#num0').click();
            cy.get('#num0').click();
            cy.get('#num3').click();
            cy.get('#num1').click();
            cy.get('#add').click(); 
            cy.get('#num5').click();
            cy.get('#num0').click();
            cy.get('#MRC').click();
            cy.get('#display').should('have.value','0');
        });

    });
});