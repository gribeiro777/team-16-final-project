import React, {useEffect, useState} from 'react'
import Select, {components} from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import {searchSpotifyThunk} from "../thunks/spotify-thunks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";
import {findUsersThunk} from "../thunks/user-thunks";
import * as JsSearch from 'js-search';

library.add(faSpotify)

const search = new JsSearch.Search('username');
search.addIndex('email')

const userSearch = (query, users) => {
    return users.filter(user => user.username.indexOf(query) !== 1)
}

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([])

    const {tracks} = useSelector(state => state.spotifyData)
    const {users, loading} = useSelector(state => state.userData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    useEffect(() => {
        dispatch(searchSpotifyThunk({query: searchInput, count: 10}))
        const matchedUsers = userSearch(searchInput, users)
        console.log('searchin g')
        setSearchedUsers(matchedUsers)
        console.log(matchedUsers)
    }, [searchInput, users])

    const handleChange = (e) => {
        setSearchInput(() => {
            if (e !== null) return e;
            else throw new Error('Async song select choice was null');
        })
    };

    const NoOptionsMessage = props => {
        return (
            <components.NoOptionsMessage {...props}>
                <span className="custom-css-class">No songs or users found matching your query</span>
            </components.NoOptionsMessage>
        );
    };

    const SpotifyIcon = () => {
        return <FontAwesomeIcon icon="fab fa-spotify" color='green' />;
    };

    const SpotifyDropdown = props => {
        return (
            <components.DropdownIndicator {...props}>
                <SpotifyIcon />
            </components.DropdownIndicator>
        );
    };

    return <div>
        <div>{searchedUsers.map(u => <p>u.username</p>)}</div>
        <div>
        <Select
            options={tracks ? tracks.map(track => {
                const image = track.album.images[0]
                const image_label = <img src={image.url} height="36px" width="36px"></img>
                const song_label = `${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`
                return ({
                    label: <Link to={`/tracks/${track.id}`} style={{ color: 'black', textDecoration: 'none'}}><div>{image_label} {song_label}</div></Link>,
                    value: track.name
                })
                }) : []
            }
            components={{ NoOptionsMessage, DropdownIndicator: SpotifyDropdown }}
            onInputChange={handleChange}
            onChange={opt => console.log(opt.label, opt.value)}
            placeholder="Search for users or songs"
        >
        </Select>
    </div>
    </div>
};

export default SearchBar;