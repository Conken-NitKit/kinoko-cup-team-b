import react from 'react';
import { GameText } from '../../../interfaces';
import { GameTextData } from '../../../utils/game-text-data';

function DisplayText({GameTextData}) {
    return(
        <div>
            
        </div>
    );
}

export const MessageWindow = () => {
    return(
        <div>
            {GameTextData[0].text}
        </div>
    );
};