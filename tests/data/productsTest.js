import { Product, Appliance, Clothing } from "../../data/products.js";



const products = new Product({
  
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  }
)
const object2 =  new Appliance({
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ], 
    type: "appliance",
    instructionsLink: "images/appliance-instructions.png",
    warrantyLink: "images/appliance-warranty.png"
  })

  const object3 = new Clothing({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  })


describe('test suite: Product class', () => {
  it('tests the product class', () => {
    expect(products.id ).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(products.priceCents).toEqual(1090)
  })
})

describe('test suite: Appliance class', () => {
  it('test the appliance class',() => {
    expect(object2.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(object2.name).toEqual('2 Slot Toaster - Black');
    expect(object2.extraInfoHTML()).toContain('Warranty')
  })
})

describe('test suite: Clothing class', () => {
  it('test the clothing class', () => {
    expect(object3.extraInfoHTML()).toContain('Size Chart')
    expect(object3.sizeChartLink).toEqual('images/clothing-size-chart.png')
  })
})

