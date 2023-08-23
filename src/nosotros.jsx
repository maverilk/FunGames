import React from "react";
import './styles/nosotros.scss'
import flogo from './components/cards/img/f-g.png';


function Nosotros() {
    return (
        <div className="nosotros-container">
            <h1 className="title">¡Bienvenidos a FunGames!</h1>
            <p className="paragraph">
                Nos complace darles la más cordial bienvenida a nuestra tienda online
                especializada en productos informáticos para gaming. En FunGames, nos
                apasiona el mundo del gaming y queremos proporcionarles una experiencia
                única y emocionante al sumergirse en este apasionante universo virtual.
            </p>
            <p>
                ¿Por qué FunGames? Nuestra tienda nace de la idea de brindar a los
                entusiastas del gaming una amplia gama de productos de alta calidad,
                diseñados específicamente para mejorar su rendimiento, comodidad y,
                sobre todo, su diversión en cada partida. Desde los componentes
                internos hasta los periféricos más avanzados, nos esforzamos por
                ofrecer una selección cuidadosamente curada de productos que satisfagan
                las necesidades y expectativas de los gamers más exigentes.
            </p>
            <p>
                ¿Qué nos hace especiales? En FunGames, no solo somos una tienda, somos
                un equipo de gamers apasionados que entiende y comparte su entusiasmo
                por el mundo del gaming. Nuestro equipo está compuesto por expertos en
                tecnología y juegos que están siempre dispuestos a brindar asesoramiento
                y soporte técnico para ayudarles a tomar decisiones informadas y
                encontrar los productos perfectos para su configuración de juego ideal.
            </p>
            <p>
                Una experiencia de compra excepcional: Queremos que su experiencia de
                compra en FunGames sea más que simplemente adquirir productos. Nos
                esforzamos por ofrecer un sitio web intuitivo y fácil de navegar, con
                descripciones detalladas de los productos, imágenes de alta calidad y
                reseñas honestas de clientes satisfechos. Además, contamos con un
                sistema de pago seguro y un servicio de envío rápido y confiable, para
                que puedan recibir sus compras en la puerta de su hogar en el menor
                tiempo posible.
            </p>
            <p>
                Comunidad FunGames: No solo queremos ser su tienda de confianza, sino
                también un punto de encuentro para la comunidad gaming. En nuestro blog
                y redes sociales, compartimos contenido interesante, novedades del
                mundo del gaming, guías útiles y eventos especiales para que se
                mantengan conectados y actualizados.
            </p>
            <p>
                En FunGames, la pasión por los videojuegos nos impulsa a superarnos
                constantemente y a ofrecerles siempre lo mejor. Agradecemos su
                confianza al elegirnos como su proveedor de productos informáticos para
                gaming y esperamos que disfruten cada momento de su experiencia en
                nuestra tienda online.
            </p>
            <p>
                ¡Bienvenidos a FunGames, donde la diversión y la tecnología se unen
                para llevar su experiencia de gaming al siguiente nivel!
            </p>
            <p>Atentamente,<img
                src={flogo}
                alt="Logo"
                style={{ width: "40px" }}
            /> </p>
            <p></p>
        </div>
    );
}

export default Nosotros;
