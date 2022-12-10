import Categories from '../../components/categories/Categories';
import PortadaHero from '../../components/hero/PortadaHero';
import { Newsletter } from '../../components/newsletter/Newsletter'; // COMPONENTE

const Inicio = () => {
    return (
        <main>
            {/* CONTENIDO PORTADA HERO */}
            <PortadaHero />

            {/* CONTENIDO CATEGORIAS */}
            <Categories />


            <Newsletter />
        </main>
    );
};

export { Inicio };
