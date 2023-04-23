import { useParams } from 'react-router';
import TrackInfo from "./track-info";

function Track({explore}) {
    const { tid } = useParams();

    return(
        <div className="container">
            <div className="row">
                <TrackInfo tid={tid} explore={explore}></TrackInfo>
            </div>
        </div>
    )}

export default Track