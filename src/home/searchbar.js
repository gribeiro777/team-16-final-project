import React, {useEffect, useState} from 'react'
import Select, {components} from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import {searchSpotifyThunk} from "../thunks/spotify-thunks";
import { Link, redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";
import {findUsersThunk} from "../thunks/user-thunks";

library.add(faSpotify)

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([])

    const {tracks} = useSelector(state => state.spotifyData)
    const {users, loading} = useSelector(state => state.userData)

    const userSearch = () => {
        return searchInput ? users.filter(user => user.username.indexOf(searchInput) !== -1) : []
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUsersThunk())
    }, [])
    useEffect(() => {
        dispatch(searchSpotifyThunk({query: searchInput, count: 10}))
        setSearchedUsers(userSearch())
    }, [searchInput, users])

    const handleChange = (e) => {
        setSearchInput(() => {
            if (e !== null) return e;
        })
    };
    const handleSelection = (e) => {
        e.value.indexOf('user') !== -1 ?
        redirect('/users/') : redirect('/tracks/')
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

    const displayedUsers = searchedUsers ?
        searchedUsers.slice(0,3).map(user => {
        return ({
            label: <Link to={`/users/${user._id}`} style={{ color: 'black', textDecoration: 'none'}}>
                <div>user: <span color={'blue'}>{user.username}</span> <span>{user.username}</span></div>
            </Link>,
            value: `user:${user.username}`
        })
    }) : []
    const displayedTracks = tracks ? tracks.map(track => {
        const image = track.album.images[0]
        const image_label = <img src={image.url} alt={''} height="36px" width="36px"></img>
        const song_label = `${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`
        return ({
            label: <Link to={`/tracks/${track.id}`} style={{ color: 'black', textDecoration: 'none'}}>
                <div>{image_label} {song_label}</div>
            </Link>,
            value: `track:${track.name}`
        })
    }) : []
    return <div>
        <div>
        <Select
            options={displayedUsers.concat(displayedTracks)
            }
            components={{ NoOptionsMessage, DropdownIndicator: SpotifyDropdown }}
            onInputChange={handleChange}
            onChange={handleSelection}
            placeholder="Search for users or songs">
        </Select>
    </div>
    </div>
};

export default SearchBar;