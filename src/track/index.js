import { useParams } from 'react-router';
import TrackInfo from "./track-info";

function Track() {
    const { tid } = useParams();

    return(
        <div className="container">
            <div className="row">
                <TrackInfo tid={tid}></TrackInfo>
            </div>
        </div>
    )}

export default Track