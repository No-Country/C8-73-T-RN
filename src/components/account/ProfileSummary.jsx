import { NextTournaments, FavoriteGames, ProgrammedTournaments } from './export'; // COMPONENTES

const ProfileSummary = () => {
    return (
        <div className="profile-summary">
            {/* CONTENIDO */}
            <NextTournaments className="profile-summary-art-one" />
            <FavoriteGames className="profile-summary-art-two" />
            <ProgrammedTournaments className="profile-summary-art-three" />
        </div>
    );
};

export { ProfileSummary };
