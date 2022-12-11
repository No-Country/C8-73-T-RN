import { Newsletter } from '../../components/newsletter/newsletter'; // COMPONENTE
import Categories from '../../components/categories/Categories'; // COMPONENTE
import PortadaHero from '../../components/hero/PortadaHero'; // COMPONENTE

const Inicio = () => {
    return (
        <main>
            {/* COMPONENTE */}
            <PortadaHero />
            {/* COMPONENTE */}
            <Categories />
            {/* COMPONENTE */}
            <Newsletter />
        </main>
    );
};

export { Inicio };
