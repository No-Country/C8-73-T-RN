import { NextTournaments, FavoriteGames, ProgrammedTournaments } from './export'; // COMPONENTES

const ProfileSummary = () => {
    return (
        <div className="profile-summary">
            {/* COMPONENTE */}
            <NextTournaments className="profile-summary-art-one" />
            {/* COMPONENTE */}
            <FavoriteGames className="profile-summary-art-two" />
            {/* COMPONENTE */}
            <ProgrammedTournaments
                className="profile-summary-art-three"
                title="Torneos programados"
                search={true}
                filter={true}
            />
        </div>
    );
};

export { ProfileSummary };
