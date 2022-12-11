import TournamentTable from '../../components/tournamentTable/TournamentTable'; // COMPONENTE
import { ProgrammedTournaments } from '../../components/account/ProgrammedTournaments'; // COMPONENTE

const Torneos = () => {
    return (
        <main>
            {/* COMPONENTE */}
            <TournamentTable />
            <section className="tournaments-tourney">
                {/* COMPONENTE */}
                <ProgrammedTournaments title="Próximos torneos" search={true} filter={true} />
                {/* COMPONENTE */}
                <ProgrammedTournaments title="Torneos finalizados" link={true} />
            </section>
        </main>
    );
};

export { Torneos };
