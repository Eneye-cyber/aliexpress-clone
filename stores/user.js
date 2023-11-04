// import { defineStore } from 'pinia'
const genRand = (bLimit, uLimit) => Math.floor(Math.random() * uLimit) + bLimit;

export const useUserStore = defineStore("user", {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
    products: [
      {
        id: 1,
        title: "Title 1",
        description: "This is a description",
        url: "https://picsum.photos/id/7/800/800",
        price: 9999,
      },
      {
        id: 2,
        title: "Title 2",
        description: "This is a description",
        url: "https://picsum.photos/id/27/800/800",
        price: 9999,
      },
      {
        id: 3,
        title: "Title 3",
        description: "This is a description",
        url: "https://picsum.photos/id/37/800/800",
        price: 9999,
      },
      {
        id: 4,
        title: "Title 4",
        description: "This is a description",
        url: "https://picsum.photos/id/7/800/800",
        price: 9999,
      },
      {
        id: 5,
        title: "Title 5",
        description: "This is a description",
        url: "https://picsum.photos/id/27/800/800",
        price: 9999,
      },
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
      {id: genRand(1, 10), title: `Title ${genRand(1, 10)}`, description: "This is a description", url: `https://picsum.photos/id/${genRand(10, 100)}/800/800`, price: 9999},
    ],
  }),
  getters: {
    getProducts (state) {
        return state.products
    }
  }
});