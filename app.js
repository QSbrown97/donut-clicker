
class DonutMaker {

  #donuts = 0;
  #clickers = 0;
  #cost = 100;
  

  constructor() {
    //Save the make donut button as a property
    this.makeDonut = document.querySelector('#donut');
    //Save p element for displaying amount of donuts as a property
    this.donutCount = document.querySelector('#donut-count');
    //Save p element for displaying amount of auto-clickers as a property
    this.autoClickerCount = document.querySelector('#auto-clicker-count');
    //Save the auto-cliker button as a property
    this.autoClicker = document.querySelector('#auto-clicker');
    //Save the reset button as a property
    this.resetButton = document.querySelector('#reset');
    //Save the modal button as a property
    this.modalButton = document.querySelector('#modalBttn');
    //Save the modal as a property
    this.modal = document.querySelector('#modal-container');
    //Save the close span as a property
    this.close = document.querySelector('#close');
    setInterval(() => this.addDonut(this.#clickers), 1000)
    this.addEventListeners();
    
  }
  
  addEventListeners() {
    this.makeDonut.addEventListener("click", () => this.addDonut());
    this.autoClicker.addEventListener("click", () => this.purchaseAutoClicker());
    this.modalButton.addEventListener("click", () => this.modal.style.display = "block");
    this.close.addEventListener("click", () => this.modal.style.display = "none");
    this.resetButton.addEventListener("click", () => this.resetGame());
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.modal.style.display = "none";
      } 
    })
  }
  
  
  addDonut(quantity = 1) {
    this.donutCount.innerHTML = `Amount of Donuts: ${this.#donuts+= quantity}`;
    this.hasEnoughDonuts();
  }

  getDonutCount() {
    return this.#donuts;
  }

  purchaseAutoClicker() {

    if (this.#donuts >= this.#cost) {
      this.autoClickerCount.innerHTML = `Amount of Auto-Clickers: ${this.#clickers+=1}`
      this.donutCount.innerHTML = `Amount of Donuts: ${this.#donuts -= this.#cost}`;
      this.updateAutoClickerCost();
    }

  }

  hasEnoughDonuts() {
    if (this.#donuts >= this.#cost) {
      return this.autoClicker.disabled = false;
    }
    return this.autoClicker.disabled = true;
  }

  updateAutoClickerCost() {
    this.autoClicker.innerHTML = `Purchase Auto-Clicker: ${this.#cost += Math.floor(this.#cost * .1)} Donuts`;
  }

  activateAutoClicker() {
    if (this.#clickers > 0) {
        setInterval(() => this.addDonut(), 1000);
      }
    }
    

  resetGame() {
    this.#donuts = 0
    this.donutCount.innerHTML = `Amount of Donuts: ${this.#donuts}`;
    this.#clickers = 0;
    this.autoClickerCount.innerHTML = `Amount of Auto-Clickers: ${this.#clickers}`;
    this.#cost = 100;
    this.autoClicker.innerHTML = `Purchase Auto-Clicker: ${this.#cost} Donuts`;
    
  }
}

let donutMaker = new DonutMaker();
