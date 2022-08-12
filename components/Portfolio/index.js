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
        description: "AppContact es una aplicacion para que los usuarios puedran agregar a sus contactos de manera rapida y segura",
        feature: ["Crear, editar y borrar nuevos contactos", "Crear contactos randoms", "Visualizar informacion completa de los contactos", "Contactos con foto de perfil"],
        link: "https://github.com/Turo1111/app-contacts",
        principalimg: "/app-contact3.png",
        tech: ["CSS", "JS", "ReactJS", "NextJS", "Styled-Componet"],
        mobile: true
      },
      {
        title: "SimpleShop",
        img: ["/SS1.png", "/ListProductSS.png", "/CartSS.png"],
        description: "SimpleShop es una web Ecommerce donde podras vender tus productos dandole comodidad a tus clientes de poder elegir estos segun sus detalles y cargarlos al carrito, para despues terminar su compra de manera facil y rapida",
        feature: ["Buscador de productos", "Seleccion de talle y color de producto", "Diferentes metodos de pagos", "Creacion de usuarios para los clientes", "Guardar distintos lugares de envios", "Visualizar carrito con los productos agregados previamente"],
        link: "https://github.com/Turo1111/simpleshop",
        principalimg: "/SS1.png",
        tech: ["CSS", "JS", "ReactJS", "NextJS", "Styled-Componet"],
        mobile: false
      },
      {
        title: "Petgram",
        img: ["/petgram1.png", "/petgram2.png", "/petgram3.png"],
        description: "Petgram es una red social de mascotas donde podremos compartir imagenes y likear los posteos que mas nos gusten",
        feature: ["Visualizar posteo imagenes", "Visualizar historias ", "Registro e Inicio de sesion", "Likear imagenes", "Lista de imagenes likeadas"],
        link: "https://github.com/Turo1111/petgram",
        principalimg: "/petgram1.png",
        tech: ["CSS", "JS", "ReactJS", "Webpack", "Styled-Componet", "Infinity-Scroll", "LocalStorage" ],
        mobile: true
      },
      {
        title: "Pokedex",
        img: ["/principal.png", "/favoritos.png", "/pokemon.png", "/cuenta.png"],
        description: "Una Pokédex es como una enciclopedia con la que cualquiera puede consultar datos de todos los Pokémon existentes, como las debilidades y resistencias de su tipo frente a otros, los ataques que puede aprender, ya sea por nivel, MTs o crianza, una información general como su tipo o los diveros nombres que tiene en cada país, etc, las habilidades que puede poseer, su línea evolutiva si la tuviera, la descripción que le da cada Pokédex en los diversos juegos de consola, el grupo huevo al que pertenece para crianza, estrategia competitiva o sus stats base.",
        feature: ["Lista de pokemones", "Agregar a favoritos pokemones", "Registro e Inicio de sesion", "Lista de favoritos", "Caracteristicas de pokemones"],
        link: "https://github.com/Turo1111/pokedex",
        principalimg: "/principal.png",
        tech: ["React Native", "JS", "CSS3", "ReactJS"],
        mobile: true
      }
]