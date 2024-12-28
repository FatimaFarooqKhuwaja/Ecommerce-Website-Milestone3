//api/cardsData/route.js

import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json([
        {
          id: 1,
          slug:"product1",
          title: "Armin Strom",
          price: 100,
          image: "/watch.jpg", // Assuming the image is in the public folder
        },
        {
          id: 2,
          slug:"product2",
          title: "Alpina",
          price: 300,
          image: "/watch14.jpg",
        },
        {
          id: 3,
          slug:"product3",
          title: "Anonimo",
          price: 202,
          image: "/watch9.jpg",
        },
        {
          id: 4,
          slug:"product4",
          title: "Cartier",
          price: 305,
          image: "/watch4.jpg",
        },
        {
          id: 5,
          slug:"product4",
          title: "rado",
          price: 275,
          image: "/watch11.jpg",
        },
        {
          id: 6,
          slug:"product4",
          title: "Omega",
          price: 348,
          image: "/watch3.jpg",
        },
        {
          id: 7,
          slug:"product4",
          title: "breitling",
          price: 189,
          image: "/watch7.jpg",
        },
        {
          id: 8,
          slug:"product4",
          title: "Richard Mille",
          price: 190,
          image: "/watch8.jpg",
        },
        {
          id: 9,
          slug:"product4",
          title: "TAG Heuer",
          price: 254,
          image: "/watch9.jpg",
        },
        {
          id: 10,
          slug:"product4",
          title: "Rolex",
          price: 312,
          image: "/watch10.jpg",
        },
        {
          id: 11,
          slug:"product4",
          title: "breitling",
          price: 235,
          image: "/watch14.jpg",
        },
        {
          id: 12,
          slug:"Omega",
          title: "Anonimo",
          price: 319,
          image: "/watch.jpg",
        },
      ],
   { status: 200 } // status code 200 indicates a successful response
    )

  }
  