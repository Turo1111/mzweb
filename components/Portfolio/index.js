import React, {useState, useEffect} from "react"
import PortfItem from "../PortfItem"
import Window from "../Window"
import { Container, Cosa, GridModal } from "./styles"
import Spinner from "../Spinner";

import Head from 'next/head';

const Portfolio = () => {

    (apps)

    return (
        <Container>
            <Head>
              <title>Portfolio - Zurita Matias</title>
              <link rel="icon" href="/portfolio.ico" />
            </Head>
            {
                apps.load ? <Spinner/> :
                apps.map(item =>
                    <Window key={item.title || item} width={"300px"} height={"250px"} title={item.title || "desconocido"} background={item.principalimg} hover={true}>
                        <PortfItem item={item} />
                    </Window>
                )
            }
            
        </Container>
    )
}

export default Portfolio

const apps = [
    {
        title: "AppContact",
        img: ["/app-contact1.png", "/app-contact2.png", "/app-contact3.png"],
        description: "AppContact is an application for the user to add contacts easily and safely",
        feature: ["Add, Modify y Delete new contact", "Add random contact", "See full contact information", "Add profile picture"],
        link: "https://github.com/Turo1111/app-contacts",
        principalimg: "/app-contact3.png",
        tech: ["CSS", "JS", "ReactJS", "NextJS", "Styled-Componet"],
        mobile: true
      },
      {
        title: "SimpleShop",
        img: ["/SS1.png", "/ListProductSS.png", "/CartSS.png"],
        description: "SimpleShop is an Ecommerce where you can sell your products giving comfort to your customer to choose these products according to their details and add them to the cart, to later finish their purchase easily and quickly",
        feature: ["Search products", "Select size and color", "Different payment methods", "Create user for client", "Save different shipping locations", "View cart with previously added products"],
        link: "https://github.com/Turo1111/simpleshop",
        principalimg: "/SS1.png",
        tech: ["CSS", "JS", "ReactJS", "NextJS", "Styled-Componet"],
        mobile: false
      },
      {
        title: "Petgram",
        img: ["/petgram1.png", "/petgram2.png", "/petgram3.png"],
        description: "Petgram is a pet social where we can share images and like the posts that we like the most",
        feature: ["View Posting Images", "View Stories", "Registration and Login", "Like Images", "List of Liked Images"],
        link: "https://github.com/Turo1111/petgram",
        principalimg: "/petgram1.png",
        tech: ["CSS", "JS", "ReactJS", "Webpack", "Styled-Componet", "Infinity-Scroll", "LocalStorage" ],
        mobile: true
      },
      {
        title: "Pokedex",
        img: ["/principal.png", "/favoritos.png", "/pokemon.png", "/cuenta.png"],
        description: "A Pokédex is like an encyclopedia with which anyone can consult data on all existing Pokémon, such as the weaknesses and resistances of its type against others, the attacks it can learn, either by level, MTs or breeding, general information such as its type or the various names it has in each country, etc, the abilities it can possess, its evolutionary line if it had one, the description given by each Pokédex in the various console games, the egg group to which it belongs for breeding, competitive strategy or its base stats.",
        feature: ["List of pokemon", "Add pokemon to favorites", "Registration and Login", "List of favorites", "Characteristics of pokemons"],
        link: "https://github.com/Turo1111/pokedex",
        principalimg: "/principal.png",
        tech: ["React Native", "JS", "CSS3", "ReactJS"],
        mobile: true
      }
]