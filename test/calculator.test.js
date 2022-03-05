describe('Calculator', function() {

  beforeEach(function() {

      var fixture = `  <!-- calculator -->
      <div id="fixture" class="calculator">
    
        <!-- display -->
        <input id="display" type="text" class="display" disabled>
        <!-- keys -->
        <div class="keys">
          <!-- 4 rows of keys -->
          <div class="row">
            <button id="plus_minus" value="+-" class="operator">&#8723;</button>
            <button id="sqrt" value="sqrt" class="operator">&#8730;</button>
          </div>
          <div class="row">
            <button id="MRC" value="MRC" class="operator">mrc</button>
            <button id="M-" value="M-" class="operator">M-</button>
            <button id="M+" value="M+" class="operator">M+</button>
            <button id="Percent" value="%" class="operator">%</button>
          </div>
          <div class="row">
            <button id="num7" value="7">7</button>
            <button id="num8" value="8">8</button>
            <button id="num9" value="9">9</button>
            <button id="add" value="+" class="operator">+</button>
          </div>
          <div class="row">
            <button id="num4" value="4">4</button>
            <button id="num5" value="5">5</button>
            <button id="num6" value="6">6</button>
            <button id="minus" value="-" class="operator">-</button>
          </div>
          <div class="row">
            <button id="num1" value="1">1</button>
            <button id="num2" value="2">2</button>
            <button id="num3" value="3">3</button>
            <button id="multiply" value="*" class="operator">*</button>
          </div>
          <div class="row">
            <button id="clear" value="C" class="operator">C</button>
            <button id="num0" value="0">0</button>
            <button id="divide" value="/" class="operator">/</button>
            <button id="equal" value="=" class="operator">=</button>
          </div>
        </div>
      </div>`;

      document.body.insertAdjacentHTML(
          'afterbegin', 
          fixture);
  });

  afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
  });

  beforeEach(function() {
      window.calculator.init();
  });

  //bad inputs
  it('Should not allow leading zeros as valid input', function(){
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0');
  });

  it('Should not allow a zero before another digit of input', function(){
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num4').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('4');
  });

  it('Do not allows a zero before another digit of input for a second operand', function(){
    document.getElementById('num5').click();
    document.getElementById('multiply').click();
    document.getElementById('num0').click();
    document.getElementById('num6').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('30');
  });

  it('Do not allows a double negation, error must be thrown', function(){
    expect(function(){
      document.getElementById('minus').click();
      document.getElementById('minus').click();
      document.getElementById('num3').click();
      document.getElementById('num6').click();
      document.getElementById('equal').click();
    }).toThrowError
  });

  it('Clear the screen after doing no calculations', function(){
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  it('Clear the screen after inserting a negative integer', function(){
    document.getElementById('minus').click();
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  it('Clear the screen after inserting a positive integer', function(){
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  it('Allow clear to be pressed multiple times', function(){
    document.getElementById('num5').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
    document.getElementById('num3').click();
    document.getElementById('num4').click();
    document.getElementById('num5').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
    document.getElementById('num4').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  it('Should clear after inserting a large negative integer', function(){
    document.getElementById('minus').click();
    document.getElementById('num6').click();
    document.getElementById('num8').click();
    document.getElementById('num9').click();
    document.getElementById('num4').click();
    document.getElementById('num5').click();
    document.getElementById('num6').click();
    document.getElementById('num2').click();
    document.getElementById('num8').click();
    document.getElementById('num1').click();
    document.getElementById('num0').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  it('Should clear after inserting a large positive integer', function(){
    document.getElementById('num6').click();
    document.getElementById('num8').click();
    document.getElementById('num9').click();
    document.getElementById('num4').click();
    document.getElementById('num5').click();
    document.getElementById('num6').click();
    document.getElementById('num2').click();
    document.getElementById('num8').click();
    document.getElementById('num1').click();
    document.getElementById('num0').click();
    document.getElementById('clear').click();
    expect(document.getElementById('display').value).toBe('');
  });

  //ADDITION - adding two positive numbers
  it('Should be able to add two positive integers numbers', function() {
    document.getElementById('num7').click(); 
    document.getElementById('add').click();
    document.getElementById('num3').click();
    document.getElementById('num1').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('38');
  });

  it('Add a negative integer and zero', function() {
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('add').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-2');
  });

  it('Add zero and a positive integer', function() {
    document.getElementById('num2').click(); 
    document.getElementById('add').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('2');
  });

  it('Add zero and a positive integer', function() {
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('add').click();
    document.getElementById('num7').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('5');
  });

  it('Add two large positive integers', function() {
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num3').click(); 
    document.getElementById('num4').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('add').click();
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('10034500');
  });

  it('Adds a positive integer to the results of a previous operation', function() {
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('num4').click();
    document.getElementById('num0').click();
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-510');
    document.getElementById('add').click();
    document.getElementById('num5').click()
    document.getElementById('num6').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('50');
  });

  it('Adds a large integer to a previous result', function() {
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('num7').click();
    document.getElementById('num8').click();
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num9').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-512');
    document.getElementById('add').click();
    document.getElementById('num1').click()
    document.getElementById('num9').click();
    document.getElementById('num3').click();
    document.getElementById('num4').click();
    document.getElementById('num9').click();
    document.getElementById('num6').click();
    document.getElementById('num7').click();
    document.getElementById('num8').click();
    document.getElementById('num9').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('193496277');
  });

  //Adding All Numbers
  it('Should return 45 for 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0', function() {
    document.getElementById('num1').click(); 
    document.getElementById('add').click();
    document.getElementById('num2').click()
    document.getElementById('add').click();
    document.getElementById('num3').click()
    document.getElementById('add').click();
    document.getElementById('num4').click()
    document.getElementById('add').click();
    document.getElementById('num5').click()
    document.getElementById('add').click();
    document.getElementById('num6').click()
    document.getElementById('add').click();
    document.getElementById('num7').click()
    document.getElementById('add').click();
    document.getElementById('num8').click()
    document.getElementById('add').click();
    document.getElementById('num9').click()
    document.getElementById('add').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('45');
  });

  //substraction
  it('Subtracts two positive integers numbers', function() {
    document.getElementById('num4').click(); 
    document.getElementById('minus').click();
    document.getElementById('num3').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('1');
  });

  it('Subtracts zero from a negative integer', function() {
    document.getElementById('minus').click();
    document.getElementById('num3').click(); 
    document.getElementById('minus').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-3');
  });

  it('Subtracts zero from a positive integer', function() {
    document.getElementById('num3').click(); 
    document.getElementById('minus').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('3');
  });

  it('Subtracts an integer from the results for a previous operation', function() {
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-500');
    document.getElementById('minus').click();
    document.getElementById('num5').click()
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-5500');
  });

  it('The addition for a negative integer addend should be treated as a subtraction of a poisitive integer subtrahend', function() {
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('add').click();
    document.getElementById('minus').click();
    document.getElementById('num6').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-10');
  });

  it('The addition for a negative integer addend to another negative integer addend should be treated as a subtraction of a poisitive integer subtrahend', function() {
    document.getElementById('minus').click();
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('add').click();
    document.getElementById('minus').click();
    document.getElementById('num6').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-110');
  });

  it('Subtracts two large integers', function() {
    document.getElementById('num1').click();
    document.getElementById('num2').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('minus').click();
    document.getElementById('num9').click()
    document.getElementById('num7').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-85000000');
  });

  it('Subtracts a large integer from the results of a previous result', function() {
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-500');
    document.getElementById('minus').click();
    document.getElementById('num1').click()
    document.getElementById('num2').click();
    document.getElementById('num3').click();
    document.getElementById('num4').click();
    document.getElementById('num5').click();
    document.getElementById('num6').click();
    document.getElementById('num7').click();
    document.getElementById('num8').click();
    document.getElementById('num9').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-123457289');
  });

  //mulitiplication - Multiply two positive numbers
  it('Multiply two positive integers numbers', function() {
    document.getElementById('num7').click(); 
    document.getElementById('multiply').click();
    document.getElementById('num3').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('21');
  });

  it('Multiply a integer multiplicand with zero', function() {
    document.getElementById('num7').click(); 
    document.getElementById('multiply').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0');
  });

  it('Multiply a negative integer multiplicand with a positive intger multiplier', function() {
    document.getElementById('minus').click();
    document.getElementById('num7').click(); 
    document.getElementById('multiply').click();
    document.getElementById('num3').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-21');
  });

  it('Multiply the result for a previous operation by a positive integer', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-1000');
    document.getElementById('multiply').click();
    document.getElementById('num1').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-10000');
  });

  it('Multiply two large integers', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num3').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num4').click();
    document.getElementById('num2').click();
    document.getElementById('num1').click();
    document.getElementById('num6').click();
    document.getElementById('num0').click();
    document.getElementById('multiply').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num3').click(); 
    document.getElementById('num4').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num7').click();
    document.getElementById('num6').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('343236337241600');
  });

  it('Should multiply the result for a previous operation by large integer', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-1000');
    document.getElementById('multiply').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num3').click(); 
    document.getElementById('num4').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num7').click();
    document.getElementById('num6').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-25345760000');
  });

  it('Should multiply the result of a previous operation by zero when the previous result is zero', function() {
    document.getElementById('minus').click();
    document.getElementById('num9').click(); 
    document.getElementById('multiply').click();
    document.getElementById('num0').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0');
    document.getElementById('multiply').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0');
  });

  // Division
  it('Divide two positive integers', function() {
    document.getElementById('num7').click(); 
    document.getElementById('divide').click();
    document.getElementById('num2').click();
    document.getElementById('num8').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0.25');
  });

  it('Divides 0 by a integer divisor', function() {
    document.getElementById('num0').click(); 
    document.getElementById('divide').click();
    document.getElementById('num8').click()
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('0');
  });

  it('Divides a negative dividend by a positive divisor', function() {
    document.getElementById('minus').click();
    document.getElementById('num7').click(); 
    document.getElementById('divide').click();
    document.getElementById('num2').click();
    document.getElementById('num8').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-0.25');
  });

  it('Should divide the result for a previous operation by a positive integer', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-1000');
    document.getElementById('divide').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-0.5');
  });

  it('Returns NaN for division by 0', function() {
    document.getElementById('num0').click(); 
    document.getElementById('divide').click();
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('NaN');
  });

  it('Should divide the result for a previous operation by a large integer', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-1000');
    document.getElementById('divide').click();
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-4e-7');
  });

  //Square root
  it('Return the square root for a postive integer', function() {
    document.getElementById('num6').click(); 
    document.getElementById('num4').click();  
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('8');
  });

  it('Allows multiple clicks of the square root operator', function() {
    document.getElementById('num1').click();  
    document.getElementById('num6').click();  
    document.getElementById('sqrt').click(); 
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('2');
  });

  it('Return the square root for a large postive integer', function() {
    document.getElementById('num2').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click();
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('5000000');
  });

  it('Return the square root of a zero as zero', function() { 
    document.getElementById('num0').click(); 
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('0');
  });

  it('Square the root of the result for a previous operation', function() {
    document.getElementById('num8').click();  
    document.getElementById('add').click();
    document.getElementById('num8').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('16');
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('4');
  });

  it('Should not allow the square root of a negative integer, an error must be thrown', function(){
    expect(function(){
      document.getElementById('minus').click();
      document.getElementById('num6').click();
      document.getElementById('sqrt').click();
    }).toThrowError
  });

  it('Return NaN for the square root of an empty display', function(){
    document.getElementById('sqrt').click();
    expect(document.getElementById('display').value).toBe('NaN');
  });

  it('Returns NaN for the Plus/Minus of an empty display', function(){
    document.getElementById('plus_minus').click();
    expect(document.getElementById('display').value).toBe('NaN');
  });

  it('Returns the calculation of the display with a negative result for one click of the plus/minus operator', function(){
    document.getElementById('num9').click();
    document.getElementById('add').click();
    document.getElementById('num9').click();
    document.getElementById('plus_minus').click();
    expect(document.getElementById('display').value).toBe('-18');
  });

  it('Return the calculation of the display with a positive result for two click of the plus/minus operator', function(){
    document.getElementById('num3').click();
    document.getElementById('add').click();
    document.getElementById('num3').click();
    document.getElementById('plus_minus').click();
    document.getElementById('plus_minus').click();
    expect(document.getElementById('display').value).toBe('6');
  });

  it('Allow multiple clicks of the plus/minus operator', function(){
    document.getElementById('num9').click();
    document.getElementById('plus_minus').click();
    document.getElementById('plus_minus').click();
    document.getElementById('plus_minus').click();
    document.getElementById('plus_minus').click();
    expect(document.getElementById('display').value).toBe('9');
  });

  it('Change the sign of the result for a previous operation', function() {
    document.getElementById('num1').click(); 
    document.getElementById('num5').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('add').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('num0').click(); 
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('3500');
    document.getElementById('plus_minus').click();
    expect(document.getElementById('display').value).toBe('-3500');
  });

  // Percentage

  it('Return NaN for the percentage of an empty display', function(){
    document.getElementById('Percent').click();
    expect(document.getElementById('display').value).toBe('NaN');
  });

  it('Allow multiple clicks for the percentage operator', function() { 
    document.getElementById('num6').click();  
    document.getElementById('Percent').click(); 
    document.getElementById('Percent').click();
    expect(document.getElementById('display').value).toBe('0.0006');
  });

  it('Returns the percentage for a negative number', function() {
    document.getElementById('minus').click(); 
    document.getElementById('num6').click();   
    document.getElementById('Percent').click();
    expect(document.getElementById('display').value).toBe('-0.06');
  });

  it('Returns the percentage for a positive number', function() {
    document.getElementById('num1').click();  
    document.getElementById('num6').click();   
    document.getElementById('Percent').click();
    expect(document.getElementById('display').value).toBe('0.16');
  });

  it('Finds the percentage of the result for a previous operation', function() {
    document.getElementById('num1').click();
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('minus').click();
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click();
    expect(document.getElementById('display').value).toBe('-500');
    document.getElementById('Percent').click();
    expect(document.getElementById('display').value).toBe('-5');
  });

  //memory recall
  it('Returns Memory when memory recall operator is clicked', function() {
    document.getElementById('MRC').click();
    expect(document.getElementById('display').value).toBe(memory);
  });

  it('Allows what is recall from memory to use in further operations', function() {
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('add').click(); 
    document.getElementById('num7').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click(); 
    document.getElementById('clear').click();
    document.getElementById('MRC').click();
    document.getElementById('add').click(); 
    document.getElementById('num1').click();
    document.getElementById('num0').click();
    document.getElementById('equal').click(); 
    expect(document.getElementById('display').value).toBe('280');
  });

  it('Replaces what is displayed to what is in memory', function() {
    document.getElementById('num2').click(); 
    document.getElementById('num0').click();
    document.getElementById('num0').click();
    document.getElementById('num3').click();
    document.getElementById('num1').click();
    document.getElementById('add').click(); 
    document.getElementById('num5').click();
    document.getElementById('num0').click();
    document.getElementById('MRC').click();
    expect(document.getElementById('display').value).toBe('0');
  });
});