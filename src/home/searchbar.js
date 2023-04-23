import React, {useEffect, useState} from 'react'
import Select, {components} from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import {searchSpotifyThunk} from "../thunks/spotify-thunks";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core";
import {findUsersThunk} from "../thunks/user-thunks";
import {FaSearch} from "react-icons/fa";
import "./style/index.css"

library.add(faSpotify)

const SearchBar = ({noOptions}) => {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([])

    const {tracks} = useSelector(state => state.spotifyData)
    const {users} = useSelector(state => state.userData)

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
        const selected = JSON.parse(e.value)
        switch (selected.type) {
            case 'user':
                navigate(`/profile/${selected.value.username}`)
                break
            case 'track':
                navigate(`/tracks/${selected.value.id}`, )
                break
            case 'search':
                navigate(`/search/${selected.value}`)
                break
            default:
                 navigate("/")
        }
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

    const moreOptions = {label: <Link to={`/search/${searchInput}`} style={{ color: 'black', textDecoration: 'none'}}>
        <div className='text-center'><FaSearch/>Display more options</div>
    </Link>,
        value: JSON.stringify({type: 'search', value: searchInput}), __isNew__: true}

    const displayedUsers = searchedUsers ?
        searchedUsers.slice(0,3).map(user => {
        return ({
            label: <Link to={`/profile/${user.username}`} style={{ color: 'black', textDecoration: 'none'}}>
                <div><img className="rounded-4" src={`https://picsum.photos/seed/${user.username}/600`} height="36px" width="36px"/> {user.username} (user)</div>
            </Link>,
            value: JSON.stringify({type: 'user', value: user})
        })
    }) : []
    const displayedTracks = tracks ? tracks.map(track => {
        const image = track.album.images[0]
        const image_label = <img src={image.url} alt={''} height="36px" width="36px"></img>
        const song_label = `${track.name} - ${track.artists.map(artist => artist.name).join(', ')}`
        return ({
            label: <Link to={`/tracks/${track.id}`} style={{ color: 'black', textDecoration: 'none', background: "blue"}}>
                <div>{image_label} {song_label}</div>
            </Link>,
            value: JSON.stringify({type: 'track', value: track})
        })
    }) : []

    return <div className='z-index-0'>
        <div>
        <Select className='z-index-2'
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: '#f5ebeb',
                    "&:hover": {
                        borderColor: "#22313f"
                    }
                }),
                menuList: base => ({
                    ...base,
                    padding: 0,
                    borderRadius: "5px"
                }),
                option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                    return {
                      ...styles,
                      backgroundColor: isFocused ? "#dfcdc3" : "#f5ebeb"
                    };
                  }
            }}
            options={searchInput ? [moreOptions, ...displayedUsers, ...displayedTracks] : []}
            components={{ NoOptionsMessage, DropdownIndicator: SpotifyDropdown }}
            onInputChange={handleChange}
            onChange={handleSelection}
            placeholder="Search for users or songs">
        </Select>
    </div>
    </div>
};

export default SearchBar;