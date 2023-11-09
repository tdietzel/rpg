export class Shop {
  constructor() {
    this.availablePotions = [{potion:50, price:20}];
  }

  // allows players to buy shop potions
  buy(item, player) {
    let playerBank = player.currency;
    item = this.availablePotions[item];
    if(playerBank >= item.price) {
      player.currency -= item.price;
      player.inventory.push({potion:50});
      return true;
    } else {
      return false;
    }
  }
}