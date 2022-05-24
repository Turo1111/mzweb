// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
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
    }
  ])
}

