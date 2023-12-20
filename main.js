let cuentas = [
    { nombre: "Edmundo", saldo: 500, password: 7391 },
    { nombre: "Eduardo", saldo: 500, password: 7391 },
    { nombre: "Roberto", saldo: 50, password: 7391 },
  ];
  
  //get elements in the DOM
  const formLogin = document.querySelector("#form-login");
  const accountSelected = document.querySelector("#select-account");
  const textPass = document.querySelector("#input-password");
  const buttonEnter = document.querySelector("#enter-btn");
  const hint = document.querySelector("#hint");

  const selectOne = document.querySelector('#account1');
  const selectTwo = document.querySelector('#account2');
  const selectThree = document.querySelector('#account3');
  
  const menuSection = document.querySelector("#menu-container");
  const menuTitle = document.querySelector("#menu-title");
  const balance = document.querySelector("#balance-amount");
  const hintBalance = document.querySelector('#hint-balance');
  
  const enterAmountContainer = document.querySelector("#enter-amount-container");
  const enterAmountInput = document.querySelector("#enter-amount-input");
  const enterAmountBtn = document.querySelector("#enter-amount-btn");
  
  const withdrawAmountContainer = document.querySelector("#withdraw-amount-container");
  const withdrawAmountInput = document.querySelector("#withdraw-amount-input");
  const withdrawAmountBtn = document.querySelector("#withdraw-amount-btn");
  
selectOne.textContent = cuentas[0].nombre;
selectTwo.textContent = cuentas[1].nombre;
selectThree.textContent = cuentas[2].nombre;

  let accountNumber;
  let limiteMayor = 990;
  let limiteMinor = 10;
  
  //Hiden section
  menuSection.style.display = "none";
  hintBalance.style.display = 'none';
  
  
  //function for restart styles for login form
  function restartStyleLogin() {
    accountSelected.classList = "form-select";
    textPass.classList = "form-control";
  }
  
  //funcion for login
  function valuePassword() {
    if (accountSelected.value === "Selecciona una cuenta:") {
      accountSelected.classList = "form-select is-invalid";
      hint.classList = "alert alert-warning";
      hint.textContent = "Selecciona una cuenta!";
      return;
    }
  
    restartStyleLogin();
    accountNumber = parseInt(accountSelected.value);
    const inputPass = parseInt(textPass.value);
    const valuePassAccount = cuentas[accountNumber].password;
  
    if (inputPass === valuePassAccount) {
      hint.textContent = "Bienvenid@";
      hint.classList = "alert alert-success";
      formLogin.style.display = "none";
      menuSection.style.display = "";
      menuTitle.textContent = `Bienvenid@ ${cuentas[accountNumber].nombre}`;
      balance.textContent = `$ ${cuentas[accountNumber].saldo}`;
    } else {
      textPass.classList = "form-control is-invalid";
      hint.classList = "alert alert-danger";
      hint.textContent = "🔒Password incorrecto!";
    }
  }
  
  //Enter Login Event
  buttonEnter.addEventListener("click", valuePassword);
  
  //Update balance
  function updateBalance(amountNew) {
    console.log("Actualiza saldo");
    cuentas[accountNumber].saldo = amountNew;
    balance.textContent = `$ ${amountNew}`;
    if(amountNew === limiteMayor) {
      console.log('entra');
      enterAmountContainer.style.display = "none";
      hintBalance.style.display = '';
      hintBalance.textContent =
        `⛔ No puede ingresar más de $${limiteMayor} a su cuenta estás al límite.`;
      hintBalance.classList = "alert alert-warning";
      return;
    }
    if (amount === limiteMinor) {
      console.log('entra');
      withdrawAmountContainer.style.display = "none";
      hintBalance.style.display = '';
      hintBalance.textContent =
      `⛔ No puede tener menos de $${limiteMinor}, su cuenta estás al límite.`;
      hintBalance.classList = "alert alert-warning";
      return;
    } 
  }
  
  function enterAmountValidate() {
    let amount = cuentas[accountNumber].saldo;
    let amountEnter = parseInt(enterAmountInput.value);
    amount = amount + amountEnter;
    if (amount <= limiteMayor) {
        updateBalance(amount);
        hintBalance.style.display = 'none';
      } else {
        enterAmountInput.textContent = 0;
        hintBalance.style.display = '';
        hintBalance.textContent =
        `⛔ No puede ingresar más de $${limiteMayor} a su cuenta estás al límite...`;
        hintBalance.classList = "alert alert-warning";
      }
    }   
  
  enterAmountBtn.addEventListener("click", enterAmountValidate);
  
  function withdrawAmoutValidate() {
    let amount = cuentas[accountNumber].saldo;
    let amountWithdraw = parseInt(withdrawAmountInput.value);
    amount = amount - amountWithdraw;
    if (amount >= limiteMinor) {
        updateBalance(amount);
        hintBalance.style.display = 'none';
      } else {
        withdrawAmountInputAmountInput.textContent = 0;
        hintBalance.style.display = '';
        hintBalance.textContent =
        `⛔ No puede tener menos de $${limiteMinor}, su cuenta estás al límite...`;
        hintBalance.classList = "alert alert-warning";
      }
    } 
  
  
  withdrawAmountBtn.addEventListener('click', withdrawAmoutValidate)